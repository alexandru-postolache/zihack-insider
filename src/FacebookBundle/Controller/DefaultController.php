<?php

namespace FacebookBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;

class DefaultController extends Controller
{
    public function indexAction()
    {

//        $url = 'https://www.facebook.com/logout.php?next=' . 'http://insider.vagrant.local' .
//            '&access_token='. $this->getUser()->getAccessToken();
//
//        return new RedirectResponse($url);

        set_time_limit(0);
//        $photos = $this->get('facebook.reader')->getAllPhotos();
//        $feed = $this->get('facebook.reader')->getAllFeed();
//        $infos = array_merge($feed, $photos);
//        $message = '';
//
//        foreach ($infos as $item) {
//            $message .= ' ' . $item['name'];
//        }
//
//        dump($message);

        return $this->render(
            '@Facebook/Default/index.html.twig',
            ['logout_url' => $this->get('facebook.reader')->getLogoutUrl()]
        );
    }
}
