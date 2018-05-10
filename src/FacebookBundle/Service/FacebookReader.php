<?php

namespace FacebookBundle\Service;


use Facebook\Facebook;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use UserBundle\Entity\User;

class FacebookReader
{
    use StringCorrectionTrait;
    /**
     * @var User
     */
    private $user;

    /**
     * @var Facebook
     */
    private $facebook;

    /**
     * FacebookReader constructor.
     *
     * @param TokenStorageInterface $tokenStorage
     * @param $appId
     * @param $appSecret
     */
    public function __construct(TokenStorageInterface $tokenStorage, $appId, $appSecret)
    {
        $this->user = $tokenStorage->getToken()->getUser();
        $this->facebook = new Facebook(
            [
                'app_id'                => $appId,
                'app_secret'            => $appSecret,
                'default_graph_version' => 'v2.10',
                'default_access_token'  => $this->user->getAccessToken(),
            ]
        );
    }

    /**
     * @return array
     */
    public function getProfilePicture()
    {
        $response = $this->facebook->get('/me/picture?type=large');

        return $response->getHeaders()['Location'] ?? 'https://img.gadgethacks.com/img/10/10/63485380952507/0/anonymous-texting-101-block-your-cell-phone-number-while-sending-text-messages.w1456.jpg';
    }


    /**
     *
     */
    public function getAllFeed()
    {
        $feed = [];

        $response = $this->facebook->get('/me/feed?limit=200');
        $feedGraph = $response->getGraphEdge();
        if ($this->facebook->next($feedGraph)) {
            $feed = array_merge($feed, $feedGraph->asArray());
            while ($feedGraph = $this->facebook->next($feedGraph)) {
                $feed = array_merge($feed, $feedGraph->asArray());
                if(count($feed) >= 200){
                    break;
                }
            }
        } else {
            $feed = array_merge($feed, $feedGraph->asArray());
        }

        return $this->formatFeed($feed);
    }

    /**
     * @param array $feed
     * @return array
     */
    protected function formatFeed(array $feed)
    {
        $response = [];
        foreach ($feed as $key => $item) {
            if (!isset($item['message']) || !trim($item['message'])) {
                continue;
            }
            $message = $this->hyphenize(strtolower($item['message']));
            $message = str_replace('-', ' ', $message);
            $feed[$key]['name'] = trim($message);

            $response[] = $feed[$key];
        }

        return $response;
    }

    /**
     * @return array
     */
    public function getAllPhotos()
    {
        $photos = [];

        $response = $this->facebook->get('/me/photos?limit=100');
        $photosGraph = $response->getGraphEdge();
        if ($this->facebook->next($photosGraph)) {
            $photos = array_merge($photos, $photosGraph->asArray());

            while ($photosGraph = $this->facebook->next($photosGraph)) {
                $photos = array_merge($photos, $photosGraph->asArray());
                if(count($photos) > 100){
                    break;
                }
            }
        } else {
            $photos = array_merge($photos, $photosGraph->asArray());
        }

        $this->assignPhotosUrls($photos);

        return $this->formatPhotos($photos);
    }

    /**
     * @param array $photos
     */
    protected function assignPhotosUrls(array &$photos)
    {
        foreach ($photos as &$photo) {
            if (!isset($photo['id'])) {
                continue;
            }
            $photoResponse = $this->facebook->get('/' . $photo['id'] . '/picture?type=normal');
            $photo['url'] = $photoResponse->getHeaders()['Location'] ?? null;
        }
    }

    /**
     * @param array $photos
     * @return array
     */
    protected function formatPhotos(array $photos)
    {
        $response = [];
        foreach ($photos as $key => $item) {
            if (!isset($item['name']) || !trim($item['name'])) {
                continue;
            }
            $message = $this->hyphenize(strtolower($item['name']));
            $message = str_replace('-', ' ', $message);
            $photos[$key]['name'] = trim($message);
            $response[] = $photos[$key];
        }

        return $response;
    }

    public function getLogoutUrl()
    {
        return $this->facebook->getRedirectLoginHelper()->getLogoutUrl(
            $this->user->getAccessToken(),
            'http://insider.vagrant.local/'
        );
    }
}