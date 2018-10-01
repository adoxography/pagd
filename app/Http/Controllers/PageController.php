<?php

namespace App\Http\Controllers;

use Algling\Nominals\Models\Form as NominalForm;
use App\Models\Phonology\Phoneme;
use Algling\Verbals\Models\Form as VerbForm;
use App\Models\Words\Example;
use App\Language;
use App\Models\Morphology\Morpheme;
use Storage;

class PageController extends Controller
{
    public function show($args)
    {
        $path = $this->generatePath($args);
        $title = ucfirst($this->getTitle($args));

        if (!Storage::exists($path)) {
            abort(404);
        }

        $styles = $this->getCSSFiles();
        $page = Storage::get($path);

        return view('pages.show', compact('page', 'styles', 'title'));
    }

    public function resources()
    {
        return view('resources.index');
    }

    public function statistics()
    {
        $stats = [
            'languages' => Language::whereNull('hidden_at')->count(),
            'verbForms' => VerbForm::whereNull('hidden_at')->count(),
            'nominalForms' => NominalForm::whereNull('hidden_at')->count(),
            'examples'  => Example::whereNull('hidden_at')->count(),
            'morphemes' => Morpheme::whereNull('hidden_at')->count(),
            'phonemes' => Phoneme::whereNull('hidden_at')->count()
        ];

        return view('resources.statistics', compact('stats'));
    }

    protected function getCSSFiles()
    {
    	$files = [];

    	// Find all of the css file names
    	$fileNames = array_where(Storage::files('css'), function($value) {
    		return preg_match('/.+\.css/', $value);
    	});

    	// Retrieve all of the css files
    	foreach($fileNames as $name) {
    		$files[] = Storage::get($name);
    	}

    	return $files;
    }

    protected function generatePath($args)
    {
    	$output = 'pages';

    	foreach(explode('/', $args) as $arg) {
    		if(strlen($arg) > 0) {
    			$output .= "/$arg";
    		}
    	}

    	return "$output.php";
    }

    protected function getTitle($args)
    {
    	$list = explode('/', $args);
    	$title = $list[count($list) - 1];

    	return str_replace('_', ' ', $title);
    }
}
