<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class LogController extends Controller
{
    public function index()
    {
    	$revisions = Revision::latest()->take(30)->get();
    	$log = [];

    	foreach($revisions as $revision) {
    		$type  = $revision->revisionable_type;
    		$model = (new $type)->find($revision->revisionable_id);

    		if($model && $model->language && !($model instanceof \Algling\Morphemes\Models\Morpheme && $model->name == 'V')) {
				$log[] = [
					'model' => $model,
					'revision' => $revision
				];
    		}
    	}
    	
    	return view('log.index', compact('log'));
    }
}
