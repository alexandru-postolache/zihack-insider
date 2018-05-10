<?php
/**
 * Created by PhpStorm.
 * User: georg
 * Date: 10/19/2017
 * Time: 10:53 PM
 */

namespace IbmWatsonBundle\Services;


use AppBundle\Services\Credentials;

class PersonalityInsights
{
    const WORDS_LIMIT = 600;

    private $url = "https://gateway.watsonplatform.net/personality-insights/api/v3/profile?version=2017-10-01";

    /**
     * @var Credentials
     */
    private $credentialsService;

    /**
     * PersonalityInsights constructor.
     * @param Credentials $credentials
     */
    public function __construct(Credentials $credentials)
    {
        $this->credentialsService = $credentials;
    }

    public function analyzeText(string $text)
    {
        $credentials = $this->credentialsService->getCredentials(\AppBundle\Entity\Credentials::TYPE_IBM_WATSON);

        while (count(explode(' ', $text)) < self::WORDS_LIMIT) {
            $text .= ' ' . $text;
        }

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $this->url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $post = $text;
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_USERPWD, $credentials);

        $headers = array();
        $headers[] = "Content-Type: text/plain;charset=utf-8";
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            echo 'Error:' . curl_error($ch);
        }
        curl_close ($ch);

        return $result;
    }
}