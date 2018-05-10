<?php

namespace ClearifaiBundle\Services;


use AppBundle\Services\Credentials;

class GeneralModel
{
    const API_URL = 'https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/outputs';

    /**
     * @var Credentials
     */
    private $credentials;

    /**
     * GeneralModel constructor.
     * @param Credentials $credentials
     */
    public function __construct(Credentials $credentials)
    {
        $this->credentials = $credentials;
    }

    /**
     * @param array $imagesList
     * @return mixed
     */
    public function getImageTags(array $imagesList)
    {
        $imagesParamsList = array('inputs' => array());
        foreach ($imagesList as $imageUrls) {
            $imagesParamsList['inputs'][] = array(
                'data' => array(
                    'image' => array('url' => $imageUrls)
                )
            );
        }

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, self::API_URL);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, \json_encode($imagesParamsList));
        curl_setopt($ch, CURLOPT_POST, 1);

        $credentials = $this->credentials->getCredentials(\AppBundle\Entity\Credentials::TYPE_CLARIFAI);
        $headers = array();
        $headers[] = "Authorization: Key " . $credentials;
        $headers[] = "Content-Type: application/json";
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            echo 'Error:' . curl_error($ch); exit;
        }
        curl_close ($ch);
        $responseObject = \json_decode($result);

        return $responseObject->outputs;
    }
}