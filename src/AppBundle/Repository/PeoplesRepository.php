<?php
/**
 * Created by PhpStorm.
 * User: george.tutuianu
 * Date: 10/27/2017
 * Time: 5:32 PM
 */

namespace AppBundle\Repository;


use AppBundle\Entity\Peoples;
use Doctrine\ORM\EntityRepository;
use UserBundle\Entity\User;

class PeoplesRepository extends EntityRepository
{
    /**
     * @param User $user
     * @return Peoples
     */
    public function getUserLastData(User $user)
    {
        $query = $this->createQueryBuilder('P')
            ->orderBy('P.id', 'DESC')
            ->setMaxResults(1)
            ->where('P.user = :user')->setParameter('user', $user);

        return $query->getQuery()->getSingleResult();
    }

    public function getLastPersonalityData()
    {
        $query = $this->createQueryBuilder('P')
            ->orderBy('P.id', 'DESC')
            ->setMaxResults(1)
            ->where('P.personality IS NOT NULL');

        return $query->getQuery()->getSingleResult();
    }
}