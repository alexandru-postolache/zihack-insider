<?php
namespace AppBundle\Entity;


class Credentials
{
    const TYPE_IBM_WATSON = 1;
    const TYPE_CLARIFAI   = 2;

    private $id;

    private $credential;

    private $lastUsed;

    private $type;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getCredential()
    {
        return $this->credential;
    }

    /**
     * @param mixed $credential
     * @return Credentials
     */
    public function setCredential($credential)
    {
        $this->credential = $credential;
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
     * @return Credentials
     */
    public function setLastUsed($lastUsed)
    {
        $this->lastUsed = $lastUsed;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     * @return Credentials
     */
    public function setType($type)
    {
        $this->type = $type;
        return $this;
    }
}