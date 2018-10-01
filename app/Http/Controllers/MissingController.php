<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

class MissingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function editPageNumbers()
    {
        $sourceGroups = collect();
        $classes = [
            \App\Models\Morphology\Morpheme::class => 'morpheme',
            \App\Models\Verbs\Form::class => 'verb form',
            \Algling\Nominals\Models\Form::class => 'nominal form',
            \App\Models\Verbs\Example::class => 'verb example',
            \Algling\Nominals\Models\Example::class => 'nominal example',
            \App\Rule::class => 'rule'
        ];

        foreach ($classes as $class => $keyword) {
            $lookup = $class::with('sources', 'language')->get();
            foreach ($lookup as $item) {
                if ($item->language) {
                    foreach ($item->sources as $source) {
                        if (!$source->pivot->extraInfo) {
                            if (!isset($sourceGroups[$source->id])) {
                                $sourceGroups[$source->id] = collect();
                            }
                            $sourceGroups[$source->id]->push([
                                'id' => $source->pivot->id,
                                'name' => $item->present('link')->__toString(),
                                'language' => $item->language,
                                'type' => $classes[get_class($item)],
                                'source' => $source
                            ]);
                        }
                    }
                }
            }
        }

        $sourceGroups = $sourceGroups->sortBy(function ($group) {
            return $group->first()['source']->name;
        });

        foreach ($sourceGroups as $key => $row) {
            $sourceGroups[$key] = $sourceGroups[$key]->sortBy(function($row) {
                return $row['language']->name . $row['type'] . $row['name'];
            });
        }

        return view('missing.page-numbers', compact('sourceGroups'));
    }

    public function updatePageNumbers()
    {
        $ids = request()->ids;
        $pages = request()->pages;

        for ($i = 0; $i < count($ids); $i++) {
            if (strlen($pages[$i]) > 0) {
                DB::table('Sourceables')->where('id', $ids[$i])->update(['extraInfo' => $pages[$i]]);
            }
        }

        flash('Pages updated.');

        return redirect('/missing/page-numbers');
    }
}
