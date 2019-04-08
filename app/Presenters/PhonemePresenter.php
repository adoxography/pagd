<?php

namespace App\Presenters;

use App\Models\Phonology\Phoneme;
use App\Presenters\AlgPresenter;
use Illuminate\Support\Arr;

class PhonemePresenter extends AlgPresenter
{
    public function name(string $format = '') : string
    {
        if ($this->model->isNull()) {
            return $this->model->algo_name;
        }

        $name = parent::name($format);

        $name = sprintf('<i>%s</i>', $name);

        if ($this->model->is_marginal) {
            $name = "($name)";
        }

        return $name;
    }

    public function link(string $addon = '', string $format = '') : string
    {
        if ($this->model->isNull()) {
            return $this->name;
        }

        $link = parent::link($addon, $format);

        if ($this->model->is_marginal) {
            $link = preg_replace(
                '`^(<a href=".*">)(\()(.*)(\))(</a>)`',
                '$2$1$3$5$4',
                $link
            );
        }

        return $link;
    }

    public function transcription($attribute = '')
    {
        if (strlen($attribute) == 0) {
            $name = $this->model->ipa_name ?: $this->model->algo_name;
        } else {
            $name = $this->model->$attribute;
        }

        return preg_replace('`^(/?)(\*?)(/?)([^/\[\]]+)(/?)`', '$2/$4/', $name);
    }

    public function parentReflexes()
    {
        $output = '';

        // Make sure all of the relevant parents have been loaded
        $this->model->load('allParents');

        $lines = $this->generateParentLines($this->model);

        foreach ($lines as $parents) {
            $output .= $this->printParentReflexLine($parents);
        }

        return sprintf('<ul>%s</ul>', $output);
    }

    public function childReflexes()
    {
        $output = '';

        $this->model->load('allChildren');

        $lines = $this->generateChildrenLines($this->model);

        foreach ($lines as $children) {
            $output .= $this->printChildReflexLine($children);
        }

        return sprintf('<ul>%s</ul>', $output);
    }

    public function environment()
    {
        $output = '';

        if ($this->model->pivot && $this->model->pivot->environment) {
            $output = '&nbsp/&nbsp' . $this->model->pivot->environment;
        }

        return $output;
    }

    protected function generateParentLines(Phoneme $phoneme)
    {
        $lines = [];

        if ($phoneme->parents->count() > 0) {
            foreach ($phoneme->parents as $parent) {
                $parentLines = $this->generateParentLines($parent);

                if (count($parentLines) > 0) {
                    foreach ($parentLines as $line) {
                        $lines[] = array_merge($line, [$parent]);
                    }
                } else {
                    $lines[] = [$parent];
                }
            }
        }

        return $lines;
    }

    protected function generateChildrenLines(Phoneme $phoneme)
    {
        $lines = [];

        if ($phoneme->reflexes->count() > 0) {
            foreach ($phoneme->reflexes as $reflex) {
                $childrenLines = $this->generateChildrenLines($reflex);

                if (count($childrenLines) > 0) {
                    foreach ($childrenLines as $line) {
                        $lines[] = array_merge([$reflex], $line);
                    }
                } else {
                    $lines[] = [$reflex];
                }
            }
        }

        return $lines;
    }

    protected function printParentReflexLine(array $parents)
    {
        $output = '';

        for ($i = 0; $i < count($parents); $i++) {
            $parent = $parents[$i];

            $output .= $parent->present()->as('link', 'reflexes')
                        ->before('language');

            if ($i > 0) {
                $output .= $parents[$i - 1]->present()->environment;
            }

            $output .= '&nbsp<a href="/reflexes/' . $parents[$i]->pivot->id . '">></a>&nbsp';
        }

        $output .= $this->model->present()->as('name', 'bold')
                    ->before('language');

        $output .= Arr::last($parents)->present('environment');

        return sprintf('<li>%s</li>', $output);
    }

    protected function printChildReflexLine(array $children)
    {
        $output = $this->model->present()->as('name', 'bold')
                    ->before('language');

        foreach ($children as $child) {
            $output .= '&nbsp<a href="/reflexes/' . $child->pivot->id . '">></a>&nbsp' . $child->present()->as('link', 'reflexes')
                        ->before('language');

            $output .= $child->present('environment');
        }

        return sprintf('<li>%s</li>', $output);
    }

    protected function getURI() : string
    {
        $this->model->load('features');

        if ($this->model->type == 'Cluster') {
            return 'clusters';
        } else {
            return 'phonemes';
        }
    }
}
