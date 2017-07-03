<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PageController extends Controller
{
    public function show($args)
    {
    	$path = $this->generatePath($args);
    	$title = ucfirst($this->getTitle($args));

    	if(Storage::exists($path)) {
    		$styles = $this->getCSSFiles();
    		$page = Storage::get($path);

    		return view('pages.show', compact('page', 'styles', 'title'));
    	} else {
    		abort(404);
    	}
    }

    public function resources()
    {
        return view('resources.index');
    }

    public function statistics()
    {
        $stats = [
            'languages' => \App\Language::whereNull('hidden_at')->count(),
            'verbForms' => \Algling\Verbals\Models\Form::whereNull('hidden_at')->count(),
            'nominalForms' => \Algling\Nominals\Models\Form::whereNull('hidden_at')->count(),
            'examples'  => \Algling\Words\Models\Example::whereNull('hidden_at')->count(),
            'morphemes' => \Algling\Morphemes\Models\Morpheme::whereNull('hidden_at')->count(),
            'phonemes' => \Algling\Phonology\Models\Phoneme::whereNull('hidden_at')->count()
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
