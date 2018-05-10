<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Peoples;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PersonalityController extends Controller
{
    /**
     * @Route("/analyze_personality", name="analyze_personality")
     * @param Request $request
     * @return Response
     */
    public function analyzePersonalityAction(Request $request)
    {
        if ($request->get('profile')) {
            $profile = $this->get('doctrine')->getRepository('AppBundle:Peoples')->findOneBy(
                ['profileId' => $request->get('profile')]
            );
            if (!$profile) {
                return new Response('NotFound', 404);
            }

            $personality = \json_decode($profile->getPersonality(), true);

            $templateString = $this->renderView(
                'personality_template.html.twig',
                ['data' => $this->preparePersonalityData($personality)]
            );

            return new JsonResponse(['template' => $templateString, 'data' => $personality, 'profileId' => $profile->getProfileId()]);
        }


        $user = $this->get('security.token_storage')->getToken()->getUser();

        $peoplesRepo = $this->get('doctrine')->getRepository('AppBundle:Peoples');
        $person = $peoplesRepo->getUserLastData($user);

        $personalityStrings = $this->getStringForPersonality($person);
        $ibmWatson = $this->get('ibm_watson.personality_insights');
        $personality = \json_decode($ibmWatson->analyzeText($personalityStrings), true);

        $person->setPersonality(\json_encode($personality));
        $this->get('doctrine')->getManager()->flush($person);

        $templateString = $this->renderView(
            'personality_template.html.twig',
            ['data' => $this->preparePersonalityData($personality)]
        );

        $profilePicture = $this->get('facebook.reader')->getProfilePicture();

        $this->get('security.token_storage')->setToken(null);

        return new JsonResponse(['template' => $templateString, 'data' => $personality, 'profile_url' => $profilePicture, 'profileId' => $person->getProfileId()]);
    }

    /**
     * @param Peoples $person
     * @return string
     */
    private function getStringForPersonality(Peoples $person)
    {
        $stringsList = [];

        $personData = \json_decode($person->getData(), true);
        foreach ($personData['photos'] as $photoInfo) {
            $stringsList[] = $photoInfo['en'];
            $stringsList[] = implode(' ', $photoInfo['tags']);
        }

        foreach ($personData['feed'] as $post) {
            $stringsList[] = $post['en'];
        }

        return implode(' ', $stringsList);
    }

    /**
     * @Route("/peek_personality", name="peek_personality")
     */
    public function peekPersonalityAction()
    {
        $personRepo = $this->get('doctrine')->getRepository('AppBundle:Peoples');
        $personality = \json_decode($personRepo->getLastPersonalityData()->getPersonality());

        return new JsonResponse($personality);
    }


    /**
     * @Route("/personality", name="peek_personality")
     */
    public function getDataAction()
    {
        //TODO DUMMY
        $personRepo = $this->get('doctrine')->getRepository('AppBundle:Peoples');
        $personality = \json_decode($personRepo->getLastPersonalityData()->getPersonality(), true);

        $templateString = $this->renderView(
            'personality_template.html.twig',
            ['data' => $this->preparePersonalityData($personality)]
        );

        return new JsonResponse(['template' => $templateString, 'data' => $personality]);
    }

    /**
     * @param $data
     * @return array
     */
    protected function preparePersonalityData($data)
    {
        $personalityInfo = array_merge_recursive(
            $data['personality'],
            $data['needs'],
            $data['values']
        );

        $response = [];
        foreach ($personalityInfo as $personality) {
            $response[$personality['trait_id']] = [
                'percent' => isset($personality['percentile']) ? round($personality['percentile'] * 100) : 0,
            ];
            if (isset($personality['children'])) {
                foreach ($personality['children'] as $child) {
                    $response[$child['trait_id']] = [
                        'percent' => isset($child['percentile']) ? round($child['percentile'] * 100) : 0,
                    ];
                }
            }
        }

        return $response;
    }

    /**
     * @Route("/profile/{profileId}", name="profile")
     *
     * @return Response
     */
    public function profileAction(Request $request, $profileId)
    {
        return $this->render('profile.html.twig', ['profileId' => $profileId]);
    }
}
