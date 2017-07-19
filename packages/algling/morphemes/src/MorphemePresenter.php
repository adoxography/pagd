<?php

namespace Algling\Morphemes;

use App\AlgPresenter;

class MorphemePresenter extends AlgPresenter
{
	public function name(string $format = '')
	{
		$name = parent::name($format);

		return preg_replace('/[^A-Z∅]+/', '<em>$0</em>', $name);
	}

	public function disambiguatedName(string $format = '')
	{
		return $this->name($format) . '<sup>' . $this->model->disambiguator . '</sup>';
	}

	public function unique(string $method = 'name', string $format = '')
	{
        $coloured = strpos($format, 'coloured') !== false;

		$output = $this->model->present($method) . '&nbsp(' . $this->gloss($coloured, false) . ')';

		if(strlen($format) > 0) {
			$output = $this->format($output, $format);
		}

		return $output;
	}

	public function stub()
	{
		return $this->unique('name', 'coloured');
	}

	public function gloss(bool $colour = true, bool $showAlert = true)
	{
        $output = '';
        $glosses = explode('.', $this->model->gloss);
        $currGloss;
        $colourHTML = '';

        if($colour) {
            $colourHTML = 'style="color:inherit;" ';
        }

        foreach($glosses as $glossText) {
            if(strlen($output) > 0) {
                $output .= '.';
            }

            if(strlen($glossText) > 0) {
                if($glossText{0} == '"') {
                    $currGloss = str_replace('"', '', $glossText);
                    $currGloss = str_replace(' ', '.', $currGloss);

                    $output .= $currGloss;
                } else {
                    $lookup = $this->model->glosses->where('abv', $glossText);

                    if(count($lookup) > 0) {
                        $currGloss = "<span class='gloss'><a href='/glosses/" . $lookup->first()->id . "' $colourHTML>" . $lookup->first()->abv . "</a></span>";
                    } else {
                    	$currGloss = "<span class='gloss'>$glossText</span>";

                    	if($showAlert) {
                    		$currGloss .= "<alg-morpheme-alert title='Gloss missing'><a href='/glosses/create?abv=$glossText'>Add <span class='gloss'>$glossText</span></a></alg-morpheme-alert>";
                    	}
                    }

                    $output .= $currGloss;
                }
            }
        }

        return $output;
	}
}