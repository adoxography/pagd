<?php

namespace App\Traits\Morphemes;

use DB;
use Auth;
use App\Models\Words\Form;
use App\Models\Words\Example;
use App\Models\Morphology\Morpheme;

/**
 * Assignable trait to classes that need to deal with morphemes.
 *
 * Requires that the model has a morphemicForm property and a pivot table to connect the model to the Morphemes table
 */
trait HasMorphemes
{
    public static function bootHasMorphemes()
    {
        static::saved(function ($model) {
            $model->connectMorphemes();
        });

        static::deleting(function ($model) {
            $model->morphemes()->detach();
        });
    }

    public function morphemes()
    {
        $type = $this->morphCode ? $this->morphCode : $this->getMorphClass();

        return $this->belongsToMany(
            Morpheme::class,
            'morph_morphemeables',
            'morphemeable_id'
        )->where('morphemeable_type', $type)->orderBy('position')->withPivot('position');
    }

    /**
     * Connects morphemes by looking at the morphemicForm
     *
     * Connects all unambiguous matches of each token in the morphemicForm to the name of a morpheme in the database
     *
     * @return void
     */
    public function connectMorphemes()
    {
        $morphemes = [];
        $this->detachMorphemes();
        $type = $this->getMorphType();

        if ($this->morphemicForm) {
            $morphemes = explode('-', $this->morphemicForm);

            foreach ($morphemes as $position => $morpheme) {
                $this->connectMorpheme($morpheme, $position, $type);
            }
        }

        // Update the complete status, if necessary
        $this->assessIsComplete(count($morphemes), $this->morphemes()->count());
    }

    protected function detachMorphemes()
    {
        $type = $this->getMorphType();
        $id = $this->id;

        DB::table('morph_morphemeables')
            ->where('morphemeable_type', $type)
            ->where('morphemeable_id', $id)
            ->delete();
    }

    protected function connectMorpheme(string $morpheme, int $position, string $type)
    {
        $identifier = explode('.', $morpheme)[0];

        $morpheme = $this->fetchMorpheme($identifier);
        if ($morpheme) {
            $this->morphemes()->attach($morpheme->id, [
                'position' => $position + 1,
                'morphemeable_type' => $type
            ]);
        }
    }

    protected function fetchMorpheme($identifier)
    {
        $morpheme = null;

        if (is_numeric($identifier)) {
            $morpheme = Morpheme::find($identifier);
        } else {
            $lookup = $this->queryMorpheme($identifier);

            if ($lookup->count() == 1) {
                $morpheme = $lookup->first();
            }
        }

        return $morpheme;
    }

    public function getMorphType()
    {
        return $this->morphCode ? $this->morphCode : $this->getMorphClass();
    }

    protected function queryMorpheme(string $name)
    {
        $query = Morpheme::whereIn('name', [
            $name,
            "-$name",
            "-$name-",
            "$name-",
        ])->where('language_id', $this->language_id);

        return $query;
    }

    /**
     * Determines whether or not a form has all of its morphemes, and updates the form if necessary
     *
     * @param int $numExpected
     * @param int $numActual
     * @return void
     */
    protected function assessIsComplete(int $numExpected, int $numActual)
    {
        $complete = $numExpected === $numActual;

        if (!$this->complete == $complete) {
            $this->complete = $complete;

            $this->revisionEnabled = false;

            $this->save();

            $this->revisionEnabled = true;
        }
    }

    /**
     * Generates a series of Morphemes used by this data structure.
     *
     * Tokens that do not have corresponding morphemes are loaded into dummy Morpheme objects.
     *
     * @return Collection
     */
    public function morphemeSequence()
    {
        if (!$this->morphemicForm) {
            return null;
        }

        $data = $this->morphemes;
        $tokens = collect(explode('-', str_replace('*', '', $this->morphemicForm)));

        return $tokens->map(function ($token) use ($data) {
            $morpheme = $data->first(function ($morpheme) use ($token) {
                return $morpheme->id == $token || str_replace(['*', '-'], '', $morpheme->name) == $token;
            });

            if ($morpheme) {
                return $morpheme;
            }

            return new Morpheme([
                'name' => "-$token-",
                'language_id' => $this->language_id
            ]);
        });
    }

    /**
     * Generate a list of morphemes using the morphemicForm to temporarily fill in any missing morphemes
     *
     * @return array
     * @deprecated
     */
    public function morphemeList()
    {
        $output = [];
        $savedMorphemes = $this->morphemes; // The morphemes that are already connected
        $curr = 0; // The number of pre-connected morphemes that have been addressed already
        $slots = $this->morphemicForm ? explode('-', $this->morphemicForm) : [];

        foreach ($slots as $index => $slot) {
            $tokens = explode('.', $slot);

            if ($curr < count($savedMorphemes) && $savedMorphemes[$curr]->pivot->position == $index + 1) {
                // If the position of the pre-connected morpheme matches the position we're currently looking for, add
                // it to the output
                $output[] = $savedMorphemes[$curr];
                $output[count($output) - 1]['name'] = $savedMorphemes[$curr]->name;
                $curr++;

                if (count($tokens) > 1) {
                    // Initial change is at play here
                    array_last($output)->initialChange($tokens[1]);
                }

                array_last($output)['assumed'] = !is_numeric($tokens[0]);
            } else {
                // Otherwise, we don't have the morpheme in the system; deal with the token directly
                $realSlot = array_first($tokens);
                $temp = ['name' => $realSlot];

                // The initial change table won't have a record for a morpheme that isn't in the database, so record
                // the initial change directly
                if (count($tokens) > 1) {
                    $temp['name'] = 'IC.'.$temp['name'];
                }

                $output[] = $temp;

                // Load in the possibilities
                $output[count($output) - 1]['possibilities'] = $this->getPossibleMorphemes($realSlot);
            }
        }

        return $output;
    }

    /**
     * Search the database for any possible matching morphemes to the one that was searched for
     *
     * @param string $name
     * @return \Illuminate\Support\Collection
     */
    protected function getPossibleMorphemes(string $name)
    {
        $output = [];

        // Look for all of the morphemes that have a name that matches what we're looking for (hyphens not included)
        if (Auth::user()) {
            $search = Morpheme::whereIn('name', [
                $name,
                '-'.$name, // There's gotta be a better way of doing this...
                '-'.$name.'-',
                $name.'-',
            ])->where('language_id', $this->language->id);

            $output = $search->get();
        }

        return $output;
    }

    /**
     * Create the tooltip for adding missing morphemes or modifying ambiguous morphemes
     *
     * @param mixed $morpheme
     * @param $index
     * @return string An HTML directive for creating the tooltip
     */
    protected function createMorphemeAlert($morpheme, $index)
    {
        $options = "";

        if (count($morpheme['possibilities']) > 0) {
            // The morphemes needs disambiguation

            $title = "Disambiguation required";
            $model = "";

            // Set the model name so the URI can be set correctly
            if ($this instanceof Form || is_subclass_of($this, Form::class)) {
                $model = "forms";
            } elseif ($this instanceof Example || is_subclass_of($this, Example::class)) {
                $model = "examples";
            }

            foreach ($morpheme['possibilities'] as $possibility) {
                // Determine what the gloss should be
                $gloss = $possibility->gloss;

                // Create a button (disguised as a link) that will instruct the website to disambiguate the morpheme
                $options .= "<li>".
                    "<form method='POST' action='/$model/{$this->id}/disambiguate'>".
                        "<input type='hidden' name='index' value='{$index}' />".
                        csrf_field().
                        method_field("PATCH").
                        "<input type='hidden' name='id' value='{$possibility->id}' />".
                        "<button class='button is-text'>".
                            "{$possibility->name}<sup>{$possibility->disambiguator}</sup> ($gloss)".
                        "</button>".
                    "</form>".
                "</li>";
            }

            // Wrap everything in an unordered list
            $options = "<ul>$options</ul>";
        } elseif ($morpheme instanceof Morpheme) {
            if ($this instanceof Form || is_subclass_of($this, Form::class)) {
                $model = "forms";
            } elseif ($this instanceof Example || is_subclass_of($this, Example::class)) {
                $model = "examples";
            }
            $title = 'Morpheme assumed';
            $options = "<form method='POST' action='/$model/{$this->id}/disambiguate'>".
                        "<input type='hidden' name='index' value='$index' />".
                        csrf_field().
                        method_field('PATCH').
                        "<input type='hidden' name='id' value='{$morpheme->id}' />".
                        "<button class='button is-text'>Confirm</button>".
                        "</form>";
        } else {
            // There is no matching morpheme in the database

            if (count($this->morphemicForm) > 0) {
                $title = "Morpheme missing";
                $options = "<a href='/morphemes/create?name={$morpheme['name']}&language={$this->language->name}'>Add (-){$morpheme['name']}(-)</a>";
            } else {
                $title = "Morphemic form undeclared";
                $options = "<a href='/".strtolower(isset($this->uri) ? $this->uri : $this->table)."/{$this->id}/edit'>Declare a morphemic form</a>";
            }
        }

        return "<alg-morpheme-alert title='$title'>$options</alg-morpheme-alert>";
    }

    /**
     * Disambiguate a morpheme by replacing the appropriate segment of the morphemicForm with an ID
     *
     * @param $index
     * @param $id
     * @return void
     */
    public function disambiguate(int $index, int $id)
    {
        $morphemes = explode('-', $this->morphemicForm);

        if (count($morphemes) > $index && !$this->morphemeIsDisambiguated($morphemes[$index])) {

            // Replace the identifier with the ID
            $morpheme = $morphemes[$index];
            $tokens = explode('.', $morpheme);
            $tokens[0] = $id;

            $morphemes[$index] = implode('.', $tokens);

            // Put the morphemicForm back together and save it
            $this->morphemicForm = implode('-', $morphemes);
            $this->save();
        }
    }

    protected function morphemeIsDisambiguated(string $morpheme)
    {
        return is_numeric(explode('.', $morpheme)[0]);
    }

    public function containsMorpheme($morpheme)
    {
        $found = false;

        if (is_array($morpheme)) {
            for ($i = 0; $i < count($morpheme) && !$found; $i++) {
                $found = $this->containsMorphemeHelper($morpheme[$i]);
            }
        } else {
            $found = $this->containsMorphemeHelper($morpheme);
        }

        return $found;
    }

    protected function containsMorphemeHelper($morpheme)
    {
        if (is_string($morpheme)) {
            $lookup = $morpheme;
        } else {
            $lookup = $morpheme->name;
        }

        return preg_match("/$lookup/", $this->morphemicForm);
    }

    public function morphemesToJson()
    {
        $arr = [];

        if ($this->morphemicForm) {
            $this->morphemes;

            foreach (explode('-', $this->morphemicForm) as $morpheme) {
                $morph = null;

                $tokens = explode('.', $morpheme);
                $identifier = $tokens[0];
                $ic = isset($tokens[1]) ? $tokens[1] : null;

                $arr[] = $this->assembleMorphemeForJson($identifier, $ic);
            }
        }

        return json_encode($arr);
    }

    protected function assembleMorphemeForJson($identifier, $ic)
    {
        if (is_numeric($identifier)) {
            $morpheme = $this->morphemes->where('id', $identifier)->first();
            $morpheme['ic'] = $ic;

            if ($ic) {
                $change = $morpheme->initialChanges->where('id', $ic)->first();

                if ($change) {
                    $morpheme['tempName'] = $change->change;
                }
            }
        } else {
            $morpheme = [
                'name' => $identifier,
                'ic' => $ic,
                'id' => 0
            ];
        }

        if ($ic === '0') {
            $morpheme['tempName'] = 'IC.' . $morpheme['name'];
        }

        return $morpheme;
    }
}
