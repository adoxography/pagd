<?php

namespace App\Http\Controllers;

use Venturecraft\Revisionable\Revision;
use Illuminate\Database\Eloquent\Relations\Relation;

class LogController extends Controller
{
    public function index()
    {
    	$revisions = Revision::latest()->whereNotNull('user_id')->simplePaginate(100);
    	$log = [];

    	foreach($revisions as $revision) {
    		$type  = $this->getType($revision->revisionable_type);
    		$model = (new $type)->find($revision->revisionable_id);

    		if($model) {
				$log[] = [
					'model' => $model,
					'revision' => $revision
				];
    		}
    	}
    	
    	return view('log.index', compact('revisions', 'log'));
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
