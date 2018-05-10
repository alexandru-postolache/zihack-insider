<?php

namespace AppBundle\Repository;


use AppBundle\Entity\Jokes;
use Doctrine\ORM\EntityRepository;

class JokesRepository extends EntityRepository
{
    /**
     * @return Jokes
     */
    public function getNextJoke()
    {
        $query = $this->createQueryBuilder('J')
            ->orderBy('J.lastUsed', 'ASC')
            ->setMaxResults(1);

        $credential = $query->getQuery()->getSingleResult();
        $this->markAsUsed($credential);

        return $credential;
    }

    /**
     * Mark the credential as used
     * @param Jokes $joke
     */
    private function markAsUsed(Jokes $joke)
    {
        $joke->setLastUsed(new \DateTime);
        $this->_em->flush($joke);
    }
}