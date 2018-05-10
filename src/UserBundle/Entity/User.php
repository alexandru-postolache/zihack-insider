<?php

namespace UserBundle\Entity;

/**
 * Class User
 * @package UserBundle\Entity
 */
class User extends \FOS\UserBundle\Model\User
{

    /**
     * @var \DateTime
     */
    private $added;

    /**
     * @var string
     */
    private $facebookId;

    /**
     * @var string
     */
    private $accessToken;

    /**
     * User constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->added = new \DateTime();
    }

    /**
     * @return \DateTime
     */
    public function getAdded(): \DateTime
    {
        return $this->added;
    }

    /**
     * @param \DateTime $added
     * @return User
     */
    public function setAdded(\DateTime $added): User
    {
        $this->added = $added;
        return $this;
    }

    /**
     * @return string
     */
    public function getFacebookId(): ?string
    {
        return $this->facebookId;
    }

    /**
     * @param string $facebookId
     * @return User
     */
    public function setFacebookId(?string $facebookId): User
    {
        $this->facebookId = $facebookId;
        return $this;
    }

    /**
     * @return string
     */
    public function getAccessToken(): string
    {
        return $this->accessToken;
    }

    /**
     * @param string $accessToken
     * @return User
     */
    public function setAccessToken(string $accessToken): User
    {
        $this->accessToken = $accessToken;
        return $this;
    }
}