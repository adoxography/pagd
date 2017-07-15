<?php

namespace App\Modules\SmartSearch;

use Illuminate\Support\Collection;

class ModelPatternMaker
{
	public static function generate(Collection $collection, array $alternates = [], bool $words = true) : string
	{
    	$pattern = '';

        foreach($collection as $item) {
            $currPattern = preg_quote(strtolower($item->name));

            foreach($alternates as $alternate) {
                if($item->$alternate) {
                    $alt = preg_split('`[,/]`', $item->$alternate);
    
                    foreach($alt as $name) {
                        $currPattern .= '|' . preg_quote(trim(strtolower($name)));
                    }
                }
            }

            if(strlen($pattern) > 0) {
                $pattern .= '|';
            }

            $pattern .= $currPattern;
        }

        $pattern = '(' . $pattern . ')';

        if($words) {
        	$pattern = '`(?<=[ ])' . $pattern . '(?=[, ])`i';
        }

        return $pattern;
	}
}