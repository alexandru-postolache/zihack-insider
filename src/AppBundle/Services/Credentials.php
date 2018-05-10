<?php

namespace AppBundle\Services;


use Doctrine\Bundle\DoctrineBundle\Registry;

class Credentials
{
    /**
     * @var Registry
     */
    private $doctrine;

    /**
     * Credentials constructor.
     * @param Registry $doctrine
     */
    public function __construct(Registry $doctrine)
    {
        $this->doctrine = $doctrine;
    }

    /**
     * Get the credentials
     * @param int $credentialType
     * @return string
     */
    public function getCredentials(int $credentialType)
    {
        $credentialsRepo = $this->doctrine->getRepository('AppBundle:Credentials');
        return $credentialsRepo->getLatestCredentialsUsed($credentialType)->getCredential();
    }
}