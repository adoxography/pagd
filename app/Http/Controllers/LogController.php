<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class LogController extends Controller
{
    public function index()
    {
    	$revisions = Revision::latest()->get();
    	$log = [];

    	foreach($revisions as $revision) {
    		$log[] = [
    			'model' => (new $revision->revisionable_type)->find($revision->revisionable_id),
    			'revision' => $revision,
    			'type' => $revision->revisionable_type
    		];

    		// $models[]['model'] = (new $revision->revisionable_type)->find($revision->revisionable_id);
    		// $models[]['revision'] = $revision;
    	}
    	
    	return view('log.index', compact('revisions', 'log'));
    }
}
