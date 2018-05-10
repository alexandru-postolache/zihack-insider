<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Peoples;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use UserBundle\Entity\User;

class DefaultController extends Controller
{
    const RETRY_REQUESTS = 3;

    /**
     * @Route("/", name="homepage")
     * @return Response
     */
    public function indexAction()
    {
        return $this->render("view.html.twig");
    }

    /**
     * @Route("/start_process", name="start_analyze_process")
     * @param Request $request
     * @return Response
     */
    public function startProcessAction(Request $request)
    {
        set_time_limit(0);

        $this->get('session')->save();

        $photos = $this->getPhotoWithTags();
        $feed = $this->getTranslatedFeed();

        $userData = [
            'photos' => $photos,
            'feed'   => $feed,
        ];

        // save the details in DB
        $user = $this->get('security.token_storage')->getToken()->getUser();
        $newPerson = new Peoples();
        $newPerson->setProfileId($this->getRandomId());
        $newPerson->setUser($user);
        $newPerson->setData(\json_encode($userData));
        $this->get('doctrine')->getManager()->persist($newPerson);
        $this->get('doctrine')->getManager()->flush($newPerson);

        $viewData = array();
        $viewData['profileId'] = $newPerson->getProfileId();
        // shuffle and returns 20 messages
        shuffle($userData['feed']);
        $feed = $userData['feed'];
        $viewData['feed'] = array_slice($feed, 0, 20);

        $viewData['photos'] = array();

        // prepare data for view
        // shuffle and returns 10 photos
        shuffle($userData['photos']);
        $photos = $userData['photos'];
        $userData['photos'] = array_slice($photos, 0,10);
        foreach ($userData['photos'] as $picture) {

            // filter the poses
            $newPicture = array();
            $newPicture['name'] = $picture['name'];
            $newPicture['id']   = $picture['id'];
            $newPicture['url']  = $picture['url'];
            $newPicture['en']   = $picture['en'];

            $newTags            = array_slice($picture['tags'], 0, 10);
            $newPicture['tags'] = $newTags;

            $viewData['photos'][] = $newPicture;
        }

        return new JsonResponse($viewData);
    }


    private function getRandomId(){
        $string = time() . rand(999, 9999999) . 'asdadasdasdasda';
        return md5($string);
    }

    private function getPhotoWithTags()
    {
        $photos = $this->get('facebook.reader')->getAllPhotos();
        $photosToTag = [];
        foreach ($photos as $photo) {
            $photosToTag[] = $photo['url'];
        }
        $translatedTexts = [];
        $tries = 0;
        while (count($translatedTexts) <> count($photosToTag)) {
            $translatedTexts = $this->get('clearifai.general_model')->getImageTags($photosToTag);
            if (++$tries > self::RETRY_REQUESTS) {
                break;
            }
        }
        foreach ($photos as $key => $photo) {
            $concepts = $translatedTexts[$key]->data;
            $tagsList = [];
            foreach ($concepts->concepts as $concept) {
                $confidence = $concept->value;

                if ($confidence > 0.5) {
                    $tagsList[] = $concept->name;
                }
            }

            $photos[$key]['tags'] = $tagsList;
        }

        $descriptionsToDownload = [];
        foreach ($photos as $photo) {
            $descriptionsToDownload[] = $photo['name'];
        }
        $translatedText = [];
        $tries = 0;
        while (count($translatedText) <> count($descriptionsToDownload)) {
            $translatedText = $this->get('google.translate')->translateToEn($descriptionsToDownload);
            if (++$tries > self::RETRY_REQUESTS) {
                break;
            }
        }
        foreach ($photos as $key => $photo) {
            $photos[$key]['en'] = $translatedText[$key]['text'];
        }

        return $photos;
    }

    /**
     * @return array
     */
    private function getTranslatedFeed()
    {
        $feed = $this->get('facebook.reader')->getAllFeed();

        $textToTranslate = [];
        foreach ($feed as $post) {
            $textToTranslate[] = $post['name'];
        }
        $translatedText = [];
        $tries = 0;
        while (count($translatedText) <> count($textToTranslate)) {
            $translatedText = $this->get('google.translate')->translateToEn($textToTranslate);
            if (++$tries > self::RETRY_REQUESTS) {
                break;
            }
        }
        $translatedText = $this->get('google.translate')->translateToEn($textToTranslate);
        foreach ($feed as $key => $post) {
            $feed[$key]['en'] = $translatedText[$key]['text'];
        }

        return $feed;
    }

    /**
     * @Route("/get-joke", name="get-joke")
     * @param Request $request
     * @return JsonResponse
     */
    public function getJoke(Request $request)
    {
        $this->get('session')->save();

        $jokesService = $this->get('app.jokes');

        return new JsonResponse(
            [
                "joke" => $jokesService->getNextJoke(),
            ]
        );
    }

    /**
     * @Route("/analyze", name="analyze")
     * @param Request $request
     * @return Response
     */
    public function analyzeAction(Request $request)
    {
        if (!($this->get('security.token_storage')->getToken()->getUser() instanceof User)) {
            return $this->redirectToRoute('homepage', array(), 307);
        }

        return $this->render("analyze.html.twig");
    }

    /**
     * @Route("/contact", name="contact")
     * @return Response
     */
    public function contactPage()
    {
        return $this->render("contact.html.twig");
    }

    /**
     * @Route("/privacy", name="privacy")
     *
     * @param Request $request
     * @return Response
     */
    public function privacyAction(Request $request)
    {
        return new Response(
            'This is an internal app made for Zitec Hackaton. We only need your permission for this proof-of-concent app made in this hackaton. For more details you can visit this URL : http://blog.zitec.com/2017/zihack-7-wonder-hack/'
        );
    }

    /**
     * @Route("/results", name="results")
     * @param Request $request
     * @return Response
     */
    public function resultsAction(Request $request)
    {
        return $this->render("results.html.twig");
    }

    /**
     * hwi_oauth_connect_service
     * @Route("/connected_user", name="hwi_oauth_connect_service")
     */
    public function userLogged()
    {
        return $this->redirectToRoute('analyze');
	}

    /**
     * @Route("/test", name="results")
     *
     * @return Response
     */
    public function testAction()
    {
        return $this->render('test.html.twig');
    }

    /**
     * @Route("/start_process_1", name="pro")
     *
     * @return JsonResponse
     */
    public function benisAction()
    {
        $array = array (
            'photos' => array(
                [
                    "url" => 'http://storage0.dms.mpinteractiv.ro/media/2/41/1815/14205483/1/galerie-mercedes-amg-gt-front.jpg?width=610&height=343',
                    "tags" => ['ceva','atceva']
                ],

            ),
            'feed' =>
                array (
                    0 =>
                        array (
                            'message' => 'Lectia slovena de baschet. Si de viata.',
                            'created_time' =>
                                array (
                                    'date' => '2017-09-25 06:24:10.000000',
                                    'timezone_type' => 1,
                                    'timezone' => '+00:00',
                                ),
                            'id' => '1446651302118442_1418006588316247',
                            'name' => 'lectia slovena de baschet. si de viata.',
                            'en' => 'Slovenian basketball lesson. and life.',
                        ),
                    1 =>
                        array (
                            'message' => 'Am venit si noi la Almete',
                            'story' => 'Osmulichevici Alexandru is with Raluca Andreea and Alexandru Postolache at Alouette Crêperie.',
                            'created_time' =>
                                array (
                                    'date' => '2017-08-30 17:51:11.000000',
                                    'timezone_type' => 1,
                                    'timezone' => '+00:00',
                                ),
                            'id' => '1446651302118442_1396787943771445',
                            'name' => 'am venit si noi la almete',
                            'en' => 'we came to the alms',
                        ),
                    2 =>
                        array (
                            'message' => 'Munte pazeaaa k venimm!!!⬆⬆⬆+Sorin+Mircea+copii+burtici+Aby!!!!!',
                            'story' => 'Alexandra Stefy is with Raluca Andreea and 8 others.',
                            'created_time' =>
                                array (
                                    'date' => '2017-08-25 06:20:40.000000',
                                    'timezone_type' => 1,
                                    'timezone' => '+00:00',
                                ),
                            'id' => '1446651302118442_1392246434225596',
                            'name' => 'munte pazeaaa k venimm sorin mircea copii burtici aby',
                            'en' => 'mountain pazeaaa k venimm sorin mircea children burtici make',
                        ),
                    3 =>
                        array (
                            'message' => '🦀🐠🐙',
                            'story' => 'Anda Maria checked in to Apiko Cafe with Raluca Andreea and 2 others.',
                            'created_time' =>
                                array (
                                    'date' => '2017-08-12 20:07:26.000000',
                                    'timezone_type' => 1,
                                    'timezone' => '+00:00',
                                ),
                            'id' => '1446651302118442_1381830401933866',
                            'name' => '',
                            'en' => '',
                        ),
                    4 =>
                        array (
                            'message' => 'Alexandru Postolache',
                            'story' => 'Alina Postolache shared Most Beautiful Cities Of the World\'s video.',
      'created_time' => 
      array (
        'date' => '2017-07-25 05:32:52.000000',
        'timezone_type' => 1,
        'timezone' => '+00:00',
      ),
      'id' => '1446651302118442_1363308263786080',
      'name' => 'alexandru postolache',
      'en' => 'alexandru postolache',
    ),
    5 => 
    array (
      'message' => 'No system is safe (y)',
      'story' => 'Oita Valentin is with Strtz Vlad and 3 others.',
      'created_time' => 
      array (
        'date' => '2017-06-26 17:37:26.000000',
        'timezone_type' => 1,
        'timezone' => '+00:00',
      ),
      'id' => '1446651302118442_1333081410142099',
      'name' => 'no system is safe y',
      'en' => 'no system is safe y',
    ),
    6 => 
    array (
      'message' => 'Somewhere new 🛫🌏',
      'story' => 'Alexandru Postolache is with Raluca Andreea at Aeroportul Henri Coanda Bucuresti.',
      'created_time' => 
      array (
        'date' => '2017-05-10 04:34:17.000000',
        'timezone_type' => 1,
        'timezone' => '+00:00',
      ),
      'id' => '1446651302118442_1286605021456405',
      'name' => 'somewhere new',
      'en' => 'somewhere new',
    ),
    7 => 
    array (
      'message' => 'Am reusiiit!',
      'created_time' => 
      array (
        'date' => '2017-05-06 14:37:48.000000',
        'timezone_type' => 1,
        'timezone' => '+00:00',
      ),
      'id' => '1446651302118442_1283627001754207',
      'name' => 'am reusiiit',
      'en' => 'am reusiiit',
    ),
    8 => 
    array (
      'message' => '365 :D',
      'story' => 'Alexandru Postolache shared a Page.',
      'created_time' => 
      array (
        'date' => '2017-05-04 06:32:48.000000',
        'timezone_type' => 1,
        'timezone' => '+00:00',
      ),
      'id' => '1446651302118442_1281697585280482',
      'name' => '365 d',
      'en' => '365 d',
    ),
    9 => 
    array (
      'message' => 'Dimineata pe racoare...😎',
      'story' => 'Oita Valentin checked in to Autostrada A2 - OMV Km 111 with Raluca Andreea and 2 others.',
      'created_time' => 
      array (
        'date' => '2017-04-29 04:33:30.000000',
        'timezone_type' => 1,
        'timezone' => '+00:00',
      ),
      'id' => '1446651302118442_1275126389270935',
      'name' => 'dimineata pe racoare...',
      'en' => 'morning on cool ...',
    ),
    10 => 
    array (
      'message' => 'Vi se mai intampla si voua sa mergeti sambata la birou? :d',
      'story' => 'Costinela Nistor is with Andrei Bordeianu and Alexandru Postolache at Zitec.',
      'created_time' => 
      array (
        'date' => '2017-04-01 12:18:43.000000',
        'timezone_type' => 1,
        'timezone' => '+00:00',
      ),
      'id' => '753869914824107_658597364351363',
      'name' => 'vi se mai intampla si voua sa mergeti sambata la birou d',
      'en' => 'you also happen to go to the office Saturday',
    ),
    11 => 
    array (
      'message' => 'Halo la start #140bpm',
      'story' => 'Costinela Nistor is with George Țuțuianu and 5 others at Parcul Tineretului.',
      'created_time' =>
      array (
          'date' => '2017-04-01 07:56:17.000000',
          'timezone_type' => 1,
          'timezone' => '+00:00',
      ),
      'id' => '1446651302118442_1242802095836698',
      'name' => 'halo la start 140bpm',
      'en' => 'halo la start 140bpm',
    ),
    12 =>
    array (
        'message' => 'Felicitari. Echipa celor 5 de la Zitec au reusit sa rezolve Arhivele Vaticanului, fara a se folosi de nici un indiciu si sa si evite declansarea alarmei . Find singurii ce au reusit acest succes. Multumim ca ne-ati aratat ca se poate.',
        'story' => 'Cryptex-Escape Room is with George Țuțuianu and 4 others at Cryptex-Escape Room.',
        'created_time' =>
            array (
                'date' => '2017-03-24 14:48:13.000000',
                'timezone_type' => 1,
                'timezone' => '+00:00',
            ),
        'id' => '1446651302118442_1235763983207176',
        'name' => 'felicitari. echipa celor 5 de la zitec au reusit sa rezolve arhivele vaticanului fara a se folosi de nici un indiciu si sa si evite declansarea alarmei . find singurii ce au reusit acest succes. multumim ca ne ati aratat ca se poate.',
        'en' => 'Congratulations. the team of the five from zitec managed to solve the Vatican archives without using any clue and avoid the alarm. find the only ones that have succeeded. thank you for showing us that we can.',
    ),
    13 =>
    array (
        'message' => 'Inspiring',
        'story' => 'Alexandru Postolache shared Hicham Bennir\'s video.',
      'created_time' => 
      array (
        'date' => '2017-03-08 06:19:51.000000',
        'timezone_type' => 1,
        'timezone' => '+00:00',
      ),
      'id' => '1446651302118442_1219672781482963',
      'name' => 'inspiring',
      'en' => 'inspiring',
    ),
    14 => 
    array (
      'message' => 'If it doesn\'t challenge you, it doesn\'t change you. Zitec Running Squad & friends at the first #140bmp run this year',
      'story' => 'Zitec is with George Țuțuianu and 13 others at Herăstrău Park.',
      'created_time' =>
      array (
          'date' => '2017-03-04 08:33:19.000000',
          'timezone_type' => 1,
          'timezone' => '+00:00',
      ),
      'id' => '1446651302118442_1216291291821112',
      'name' => 'if it doesnt challenge you it doesnt change you. zitec running squad  friends at the first 140bmp run this year',
      'en' => 'if it doesnt challenge you it doesnt change you. zitec running squad  friends at the first 140bmp run this year',
    ),
    15 =>
    array (
        'message' => 'Va multumesc tuturor pentru urari! :)',
        'created_time' =>
            array (
                'date' => '2017-02-20 07:55:54.000000',
                'timezone_type' => 1,
                'timezone' => '+00:00',
            ),
        'id' => '1446651302118442_1205466509570257',
        'name' => 'va multumesc tuturor pentru urari',
        'en' => 'thank you all for your wishes',
    ),
    16 =>
    array (
        'message' => '❤❤❤',
        'story' => 'Alexandru Postolache is with Raluca Andreea at Piata Sfatului Brasov.',
        'created_time' =>
            array (
                'date' => '2017-02-19 11:36:10.000000',
                'timezone_type' => 1,
                'timezone' => '+00:00',
            ),
        'id' => '1446651302118442_1204735689643339',
        'name' => '',
        'en' => '',
    ),
    17 =>
    array (
        'message' => 'Foarte tare 😂😂😂',
        'story' => 'Oita Valentin shared InfoAcademy\'s photo — with Strtz Vlad and 4 others.',
      'created_time' => 
      array (
        'date' => '2017-01-24 22:51:38.000000',
        'timezone_type' => 1,
        'timezone' => '+00:00',
      ),
      'id' => '1446651302118442_1179734325476809',
      'name' => 'foarte tare',
      'en' => 'very cool',
    ),
    18 => 
    array (
      'message' => 'Making accurate maps is mathematically impossible.',
      'story' => 'Alexandru Postolache shared Vox\'s video.',
      'created_time' =>
      array (
          'date' => '2016-12-09 07:21:44.000000',
          'timezone_type' => 1,
          'timezone' => '+00:00',
      ),
      'id' => '1446651302118442_1138296069620635',
      'name' => 'making accurate maps is mathematically impossible.',
      'en' => 'making accurate maps is mathematically impossible.',
    ),
    19 =>
    array (
        'message' => '🍻🇮🇪',
        'story' => 'Alexandru Postolache checked in to Temple Bar with Raluca Andreea.',
        'created_time' =>
            array (
                'date' => '2016-12-01 19:34:55.000000',
                'timezone_type' => 1,
                'timezone' => '+00:00',
            ),
        'id' => '1446651302118442_1130456453737930',
        'name' => '',
        'en' => '',
    ),
    20 =>
    array (
        'message' => '🍻❤',
        'story' => 'Alexandru Postolache is with Raluca Andreea at Guiness Storehouse, Dublin.',
        'created_time' =>
            array (
                'date' => '2016-11-30 23:33:17.000000',
                'timezone_type' => 1,
                'timezone' => '+00:00',
            ),
        'id' => '1446651302118442_1129551477161761',
        'name' => '',
        'en' => '',
    ),
    21 =>
    array (
        'message' => 'Learning about cyber security at DefCamp, the largest conference of its kind in Central Eastern Europe 
#DefCamp #DefCamp2016',
        'story' => 'Zitec is with Mortasipu Razvan and 4 others.',
        'created_time' =>
            array (
                'date' => '2016-11-11 14:00:20.000000',
                'timezone_type' => 1,
                'timezone' => '+00:00',
            ),
        'id' => '1446651302118442_35332444924469601',
        'name' => 'learning about cyber security at defcamp the largest conference of its kind in central eastern europe defcamp defcamp2016',
        'en' => 'learning about cyber security at defcamp the largest conference of its kind in central eastern europe defcamp defcamp2016',
    ),
    22 =>
    array (
        'message' => 'And the #ZiHack 6 Award goes toooooo the Mood Trackers team! Moodz reads the emotions from human faces. This is the easiest way to receive live feedback. The app needs to be connected to a webcam, takes some pictures and then gives live reports based on people\'s moods: http://moodz.zitec.ro/',
      'story' => 'Zitec is with George Țuțuianu and 7 others at Zitec.',
      'created_time' =>
      array (
          'date' => '2016-10-31 10:02:29.000000',
          'timezone_type' => 1,
          'timezone' => '+00:00',
      ),
      'id' => '1446651302118442_1093929347390641',
      'name' => 'and the zihack 6 award goes toooooo the mood trackers team moodz reads the emotions from human faces. this is the easiest way to receive live feedback. the app needs to be connected to a webcam takes some pictures and then gives live reports based on peoples moods httpmoodz.zitec.ro more pics and details about the zihack 6 apps  teams soon on httpblog.zitec.com',
      'en' => 'and the zihack 6 award goes toooooo the mood trackers team moodz reads the emotions from human faces. this is the easiest way to receive live feedback. the app needs to be connected to a webcam takes some pictures and then gives live reports based on peoples moods httpmoodz.zitec.ro more pics and details about the zihack 6 apps  teams soon on httpblog.zitec.com',
    ),
    23 =>
    array (
        'message' => '#ZiHack teams when they\'re not coding, hacking sessions, awards ceremony, ZiBand live concert &  Zitec guests at this year\'s 24h internal hackathon and after party!',
      'story' => 'Zitec added 2 new photos — with George Țuțuianu and 4 others at Zitec.',
      'created_time' =>
      array (
          'date' => '2016-10-28 19:10:44.000000',
          'timezone_type' => 1,
          'timezone' => '+00:00',
      ),
      'id' => '1446651302118442_1091211724329070',
      'name' => 'zihack teams when theyre not coding hacking sessions awards ceremony ziband live concert  zitec guests at this years 24h internal hackathon and after party',
      'en' => 'zihack teams when theyre not coding hacking sessions awards ceremony ziband live concert  zitec guests at this years 24h internal hackathon and after party',
    ),
    24 =>
    array (
        'message' => '❤',
        'story' => 'Alexandru Postolache checked in to Zaitoone with Raluca Andreea.',
        'created_time' =>
            array (
                'date' => '2016-09-20 17:55:18.000000',
                'timezone_type' => 1,
                'timezone' => '+00:00',
            ),
        'id' => '1446651302118442_1058116647638578',
        'name' => '',
        'en' => '',
    ),
    25 =>
    array (
        'message' => 'Alexandru Anghel aka bursuc
Alexandru Dobrescu aka aleee
Alexandru-Ionuț Matei aka gogosica
Alexandra Scarlat aka sefa
Alexandru Dumitrescu aka sandel
Alexandru Mircea aka alexutu
Alexandru Postolache aka alex (ba da tie de ce ti se zice doar alex?)
Alexandra Bitzi aka bitzi
Alexandru Manea aka Manéa 
Bogdan Alex aka bobo
Ioniţă Alexandru Ionuţ aka ionut baiat finut 
Alexandru Teodorescu aka sev/pisi
Alexandru Ionut aka maimuta (nu stiu de ce nu il gasesc)
Osmulikevici Alexandru Cristian
Alexandra Poenaru
Ion Marius Alexandru aka marion

Sunteti nominalizati pentru "La multi ani!" :*',
        'story' => 'Osmulichevici Alexandru updated his status.',
        'created_time' =>
            array (
                'date' => '2016-08-30 19:14:15.000000',
                'timezone_type' => 1,
                'timezone' => '+00:00',
            ),
        'id' => '1446651302118442_1039799852803591',
        'name' => 'alexandru anghel aka bursuc alexandru dobrescu aka aleee alexandru ionu matei aka gogosica alexandra scarlat aka sefa alexandru dumitrescu aka sandel alexandru mircea aka alexutu alexandru postolache aka alex ba da tie de ce ti se zice doar alex alexandra bitzi aka bitzi alexandru manea aka manea bogdan alex aka bobo ionita alexandru ionut aka ionut baiat finut alexandru teodorescu aka sevpisi alexandru ionut aka maimuta nu stiu de ce nu il gasesc osmulikevici alexandru cristian alexandra poenaru ion marius alexandru aka marion sunteti nominalizati pentru la multi ani',
        'en' => 'alexandru angel aka bursuc alexandru dobrescu aka aleee alexandra ion a mate alexandru actor alexandra aka alexandru alexandru aka alexandru alaxandru alexandra aka alexandru alexandra aka alexandru alexandru aka alexandru aka alexandru bobo ionita alexandru ionut aka ionut boy finut alexandru teodorescu aka sevpisi alexandru ionut aka monkey I do not know why I do not find him osmulikevici alexandru cristian alexandra poenaru ion marius alexandru aka marion you are nominated for many years',
    )));
        return new JsonResponse($array);
    }
}
