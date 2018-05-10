<?php

namespace AppBundle\Services;


use Doctrine\Bundle\DoctrineBundle\Registry;

class Jokes
{
    /**
     * @var Registry
     */
    private $doctrine;

    /**
     * Jokes constructor.
     * @param Registry $doctrine
     */
    public function __construct(Registry $doctrine)
    {
        $this->doctrine = $doctrine;
    }

    public function getNextJoke()
    {
        $jokesRepo = $this->doctrine->getRepository('AppBundle:Jokes');
        $joke      = $jokesRepo->getNextJoke();

        return $joke->getJoke();
    }
}