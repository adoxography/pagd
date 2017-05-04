<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;
use Illuminate\Database\Eloquent\Relations\Relation;

class LogController extends Controller
{
    public function index()
    {
    	$revisions = Revision::latest()->take(30)->get();
    	$log = [];

    	foreach($revisions as $revision) {
    		$type  = $this->getType($revision->revisionable_type);
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

    protected function getType($type)
    {
        $map = Relation::morphMap();

        if(isset($map[$type])) {
            return $map[$type];
        } else {
            return $type;
        }
    }
}
