<?php

namespace UserBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class UserController
 * @package UserBundle\UserController
 */
class FacebookLoginController extends Controller
{

    public function loginFailAction(Request $request)
    {
        dump("Failure");
    }

    public function loginSuccessAction(Request $request)
    {
        dump($request);die;
    }




}