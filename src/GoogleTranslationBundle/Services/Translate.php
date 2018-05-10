<?php
/**
 * Created by PhpStorm.
 * User: georg
 * Date: 10/19/2017
 * Time: 11:43 PM
 */

namespace GoogleTranslationBundle\Services;


use Google\Cloud\Translate\TranslateClient;

class Translate
{
    const MAX_STRINGS_TO_TRANSLATE = 128;

    public function translateToEn($text)
    {
        if (count($text) < self::MAX_STRINGS_TO_TRANSLATE) {
            return $this->translate($text);
        }
        // this is where we get in trouble. let's split them in 128
        $translatedTexts = array();

        $arrayToTranslate = array();
        $counter          = 0;
        foreach ($text as $textPart) {
            $arrayToTranslate[] = $textPart;
            $counter++;

            if (count($arrayToTranslate) == self::MAX_STRINGS_TO_TRANSLATE || $counter == count($text)) {
                $translatedTexts = array_merge($translatedTexts, $this->translate($arrayToTranslate));
                $arrayToTranslate = array();
            }
        }

        return $translatedTexts;
    }

    private function translate(array $texts, $language = 'en')
    {
        $translate = new TranslateClient([
            'key' => 'AIzaSyDaylDFUa4fZpEHrM4dStsGAv0hB3WXXTE'
        ]);

        // Translate text from english to french.
        $result = $translate->translateBatch($texts, [
            'target' => $language
        ]);

        return $result;
    }
}