<?php

namespace AppBundle\Entity;


class Peoples
{
    private $id;
    private $user;
    private $data;
    private $personality;
    private $profileId;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     * @return Peoples
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * @param mixed $data
     * @return Peoples
     */
    public function setData($data)
    {
        $this->data = $data;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     * @return Peoples
     */
    public function setUser($user)
    {
        $this->user = $user;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getPersonality()
    {
        return $this->personality;
    }

    /**
     * @param mixed $personality
     * @return Peoples
     */
    public function setPersonality($personality)
    {
        $this->personality = $personality;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getProfileId()
    {
        return $this->profileId;
    }

    /**
     * @param mixed $profileId
     * @return Peoples
     */
    public function setProfileId($profileId)
    {
        $this->profileId = $profileId;

        return $this;
    }
}