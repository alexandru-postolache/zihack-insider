<?php
/**
 * Created by PhpStorm.
 * User: george.calcea
 * Date: 10/21/2017
 * Time: 2:01 PM
 */

namespace FacebookBundle\Service;


trait StringCorrectionTrait
{
    protected function hyphenize($string)
    {
        $dict = array(
            "I'm" => "I am",
            "thier" => "their",
            // Add your own replacements here
        );
        return strtolower(
            preg_replace(
                array('#[\\s-]+#', '#[^A-Za-z0-9\. -]+#'),
                array('-', ''),
                $this->cleanString(
                    str_replace( // preg_replace can be used to support more complicated replacements
                        array_keys($dict),
                        array_values($dict),
                        urldecode($string)
                    )
                )
            )
        );
    }

    protected function cleanString($text)
    {
        $utf8 = array(
            '/[áàâãªä]/u' => 'a',
            '/[ÁÀÂÃÄ]/u' => 'A',
            '/[ÍÌÎÏ]/u' => 'I',
            '/[íìîï]/u' => 'i',
            '/[éèêë]/u' => 'e',
            '/[ÉÈÊË]/u' => 'E',
            '/[óòôõºö]/u' => 'o',
            '/[ÓÒÔÕÖ]/u' => 'O',
            '/[úùûü]/u' => 'u',
            '/[ÚÙÛÜ]/u' => 'U',
            '/ç/' => 'c',
            '/Ç/' => 'C',
            '/ñ/' => 'n',
            '/Ñ/' => 'N',
            '/–/' => '-', // UTF-8 hyphen to "normal" hyphen
            '/[’‘‹›‚]/u' => ' ', // Literally a single quote
            '/[“”«»„]/u' => ' ', // Double quote
            '/ /' => ' ', // nonbreaking space (equiv. to 0x160)
            '/ș/' => 's',
            '/ţ/' => 't',
            '/ă/' => 'a',
        );
        return preg_replace(array_keys($utf8), array_values($utf8), $text);
    }
}