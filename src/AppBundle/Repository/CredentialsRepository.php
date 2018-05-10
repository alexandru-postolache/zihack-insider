<?php

namespace AppBundle\Repository;


use AppBundle\Entity\Credentials;
use Doctrine\ORM\EntityRepository;

class CredentialsRepository extends EntityRepository
{
    /**
     * @param int $credentialType
     * @return Credentials
     */
    public function getLatestCredentialsUsed(int $credentialType)
    {
        $query = $this->createQueryBuilder('C')
            ->where('C.type = :credential')
            ->setParameter('credential', $credentialType)
            ->orderBy('C.lastUsed', 'ASC')
            ->setMaxResults(1);

        $credential = $query->getQuery()->getSingleResult();
        $this->markAsUsed($credential);

        return $credential;
    }

    /**
     * Mark the credential as used
     * @param Credentials $credential
     */
    private function markAsUsed(Credentials $credential)
    {
        $credential->setLastUsed(new \DateTime);
        $this->_em->flush($credential);
    }
}