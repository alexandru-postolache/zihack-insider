<?php

namespace AppBundle\Entity;


class Jokes
{

    private $id;

    private $joke;

    private $lastUsed;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     * @return Jokes
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getJoke()
    {
        return $this->joke;
    }

    /**
     * @param mixed $joke
     * @return Jokes
     */
    public function setJoke($joke)
    {
        $this->joke = $joke;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getLastUsed()
    {
        return $this->lastUsed;
    }

    /**
     * @param mixed $lastUsed
     * @return Jokes
     */
    public function setLastUsed($lastUsed)
    {
        $this->lastUsed = $lastUsed;
        return $this;
    }
}