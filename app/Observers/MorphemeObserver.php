<?php

namespace App\Observers;

use App\Models\Words\Form;
use App\Models\Words\Example;
use App\Models\Morphology\Morpheme;

class MorphemeObserver
{
    public function created(Morpheme $morpheme)
    {
        $this->reconnectData($morpheme, true);
    }

    public function updated(Morpheme $morpheme)
    {
        $this->reconnectData($morpheme);
    }

    public function saved(Morpheme $morpheme)
    {
        $morpheme->connectGlosses();
    }

    public function deleting(Morpheme $morpheme)
    {
        $this->unlink($morpheme);
    }

    public function deleted(Morpheme $morpheme)
    {
        $this->reconnectData($morpheme);
    }

    protected function reconnectData(Morpheme $morpheme, bool $created = false)
    {
        $morphemeNames = $this->getNames($morpheme, $created);
        $language = $morpheme->language_id;

        $morphemeables = $this->queryMorphemeables($language, $morphemeNames);

        foreach ($morphemeables as $morphemeable) {
            if ($morphemeable->containsMorpheme($morphemeNames)) {
                $this->reconnect($morphemeable);
            }
        }
    }

    protected function unlink(Morpheme $morpheme)
    {
        $morpheme->load(['forms', 'examples']);
        $name = str_replace(['*', '-'], '', $morpheme->name);
        $id = $morpheme->id;

        $data = $morpheme->forms->concat($morpheme->examples);

        foreach ($data as $item) {
            $morphemes = explode('-', $item->morphemic_form);

            for ($i = 0; $i < count($morphemes); $i++) {
                preg_match('/(?<morpheme>[^.]+)(?:\.(?<ic>\d+))?/', $morphemes[$i], $matches);
                if ($matches['morpheme'] == $id) {
                    $morphemes[$i] = $name;

                    // All specified initial changes are now invalid, so just use the default one
                    if (isset($matches['ic'])) {
                        $morphemes[$i] .= '.' . 0;
                    }
                }
            }

            $item->morphemic_form = implode('-', $morphemes);
            $item->save();
        }
    }

    protected function reconnect($data)
    {
        if (is_array($data)) {
            foreach ($data as $item) {
                $item->connectMorphemes();
            }
        } else {
            $data->connectMorphemes();
        }
    }

    protected function getNames(Morpheme $morpheme, bool $created = false)
    {
        $output = [$morpheme->name];

        if ($morpheme->isDirty('name') && !$created) {
            $output[] = $morpheme->getOriginal('name');
        }

        return str_replace(['*', '-'], '', $output);
    }

    protected function queryMorphemeables(int $language, array $lookups)
    {
        return $this->queryForms($language, $lookups)->merge($this->queryExamples($language, $lookups));
    }

    protected function queryForms(int $language, array $lookups)
    {
        $query = Form::where('language_id', $language)
            ->where(function ($query) use ($lookups) {
                $this->constrainQuery($query, $lookups);
            });

        return $query->get();
    }

    protected function queryExamples(int $language, array $lookups)
    {
        $query = Example::whereHas('form', function ($query) use ($language) {
            $query->where('language_id', $language);
        })->where(function ($query) use ($lookups) {
            $this->constrainQuery($query, $lookups);
        });

        return $query->get();
    }

    protected function constrainQuery(&$query, array $lookups)
    {
        $firstTime = true;

        foreach ($lookups as $lookup) {
            if ($firstTime) {
                $firstTime = false;
                $query->where('morphemic_form', 'LIKE', "%$lookup%");
            } else {
                $query->orWhere('morphemic_form', 'LIKE', "%$lookup%");
            }
        }
    }
}
