<?php

namespace App\Traits;

use Algling\Words\Models\Form;
use Algling\Words\Models\Example;
use App\Models\Morphology\Morpheme;
use Auth;

/**
 * Assignable trait to classes that need to deal with morphemes.
 * 
 * Requires that the model has a morphemicForm property and a pivot table to connect the model to the Morphemes table
 */
trait HasMorphemesTrait {

    public static function bootHasMorphemesTrait() {
        static::saved(function($model) {
            $model->connectMorphemes();
        });

        static::deleting(function($model) {
            $model->morphemes()->detach();
        });
    }

    public function morphemes() {
        $type = $this->morphCode ? $this->morphCode : $this->getMorphClass();

        return $this->belongsToMany(
            Morpheme::class,
            'Morph_Morphemeables',
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
    	$morphemes = explode('-', $this->morphemicForm);

        $type = $this->morphCode ? $this->morphCode : $this->getMorphClass();

        // Unlink all of the existing morphemes
        $this->morphemes()->detach();

        // Check each morpheme against the database
        foreach ($morphemes as $index => $morpheme) {
            $chunks = $this->extractRealMorpheme($morpheme);

            $query = Morpheme::whereIn('name', [
                $chunks->get('morpheme'),
                "-{$chunks->get('morpheme')}",
                "-{$chunks->get('morpheme')}-",
                "{$chunks->get('morpheme')}-",
            ])->where('language_id', $this->language->id);

            if ($chunks->has('disambiguator')) {
                $query->where('disambiguator', $chunks->get('disambiguator'));
            }

            // Execute the query
            $lookup = $query->get();

            // Connect the morpheme if exactly one result was returned
            if ($lookup->count() == 1) {
                $this->morphemes()->attach($lookup->first()->id, [
                    'position' => $index + 1,
                    'morphemeable_type' => $type
                ]);
            }
        }

        // Update the complete status, if necessary
        $this->assessIsComplete(count($morphemes), $this->morphemes->count());
	}

    /**
     * Removes any initial change directives
     *
     * @param string $morpheme the string containing the morpheme to be extracted
     * @return string the morpheme
     */
    protected function extractRealMorpheme(string $morpheme)
    {
        $output = [];
        $withoutInitialChange = array_last(explode('|', $morpheme));
        $chunks = explode('.', $withoutInitialChange);

        $output['morpheme'] = $chunks[0];

        if(count($chunks) > 1) {
            $output['disambiguator'] = $chunks[1];
        }

        return collect($output);
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
        if($numExpected === $numActual) {
            if(!$this->complete) {
                $this->complete = true;
                $this->save();
            }
        } else {
            if($this->complete) {
                $this->complete = false;
                $this->save();
            }
        }
    }

    /**
     * Generate a list of morphemes using the morphemicForm to temporarily fill in any missing morphemes
     * 
     * @return array
     */
    public function morphemeList()
    {
        $output = [];
        $savedMorphemes = $this->morphemes; // The morphemes that are already connected
        $curr = 0; // The number of pre-connected morphemes that have been addressed already
        $slots = explode('-', $this->morphemicForm);

        foreach($slots as $index => $slot) {
            $initialChangePieces = explode('|', $slot);

            if($curr < count($savedMorphemes) && $savedMorphemes[$curr]->pivot->position == $index + 1) {
            // If the position of the pre-connected morpheme matches the position we're currently looking for, add it to the output
                $output[] = $savedMorphemes[$curr++];

                if(count($initialChangePieces) > 1) {
                // Initial change is at play here
                    array_last($output)->initialChange($initialChangePieces[0]);
                }
            }
            else {
            // Otherwise, we don't have the morpheme in the system; deal with the token directly
                $realSlot = array_last($initialChangePieces);

                // Pull off the disambiguator
                $temp = ['name' => explode('.', $realSlot)[0]];

                // The initial change table won't have a record for a morpheme that isn't in the database, so record the initial change directly
                if(count($initialChangePieces) > 1) {
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
        if(Auth::user()) {
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
     * Convert the morpheme list into HTML
     * 
     * @return string An HTML representation of the morpheme list
     */
    public function printMorphemes()
    {
    	$firstTime = true;
    	$html = '';
    	$index = 0;

    	foreach($this->morphemeList() as $morpheme) {
    		$morphemeHTML = '';
    		$glossHTML = '';

    		if($firstTime) {
    			$firstTime = false;
    		} else {
    			$html .= "<div class='column is-narrow hyphen'>-</div>";
    		}

    		if($morpheme instanceof Morpheme) {
    			// Morpheme unambiguously exists in the database

                if(!$morpheme->isHidden() || Auth::user()) {
    				$morphemeHTML .= str_replace(['-', '*'], '', $morpheme->name);
                    $colour = $morpheme->slot->colour;

        			// Everything except vStems need to be wrapped in hyperlinks
        			if(!$morpheme->isVStem()) {
                        if(strpos($morphemeHTML, '∅') === false) {
                            $morphemeHTML = "<i>$morphemeHTML</i>";
                        }
        				$morphemeHTML = "<a href='/morphemes/{$morpheme->id}' style='color: $colour;'>$morphemeHTML</a>";
        			}

                    if($morpheme->isHidden()) {
                        $morphemeHTML = "<span class='data-hidden'>$morphemeHTML</span>";
                    }

        			// Add the gloss below the morpheme
        			if($morpheme->initialChanged()) {
        				$glossHTML .= "IC.";
        			}

    				$glossHTML .= $morpheme->renderGloss();

        			$morphemeHTML .= "<p style='color: $colour;'>$glossHTML</p>";
                } else {
                    $morphemeHTML .= str_replace('-', '', $morpheme->name);
                }

    		} else {
    			// Morpheme either doesn't exist in the database or it's ambiguous
    			$morphemeHTML .= $morpheme['name'];

    			if(Auth::user()) {
    				// This is fairly database-intensive, so only bother with this when the user is logged in

    				$morphemeHTML .= $this->createMorphemeAlert($morpheme, $index);
    			}
    		}

    		// Wrap the morpheme up in a column
    		$html .= "<div class='column is-narrow'>$morphemeHTML</div>";

    		$index++;
    	}

    	return "<div class='columns morpheme-printout'>$html</div>";
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

		if(count($morpheme['possibilities']) > 0) {
        // The morphemes needs disambiguation

			$title = "Disambiguation required";
			$model = "";

            // Set the model name so the URI can be set correctly
			if($this instanceof Form || is_subclass_of($this, Form::class)) {
				$model = "forms";
			} else if($this instanceof Example || is_subclass_of($this, Example::class)) {
				$model = "examples";
			}

			foreach($morpheme['possibilities'] as $possibility) {

                // Determine what the gloss should be
                $gloss = $possibility->gloss;

                // Create a button (disguised as a link) that will instruct the website to disambiguate the morpheme
				$options .= "<li>".
					"<form method='POST' action='/$model/{$this->id}/disambiguate'>".
						"<input type='hidden' name='index' value='{$index}' />".
						csrf_field().
						method_field("PATCH").
						"<input type='hidden' name='disambiguator' value='{$possibility->disambiguator}' />".
						"<button class='button is-link'>".
							"{$possibility->name}<sup>{$possibility->disambiguator}</sup> ($gloss)".
						"</button>".
					"</form>".
				"</li>";
			}

            // Wrap everything in an unordered list
			$options = "<ul>$options</ul>";
		} else {
        // There is no matching morpheme in the database

            if(count($this->morphemicForm) > 0) {
                $title = "Morpheme missing";
                $options = "<a href='/morphemes/create?name={$morpheme['name']}&language={$this->language->name}'>Add (-){$morpheme['name']}(-)</a>";
            } else {
                $title = "Morphemic form undeclared";
                $options = "<a href='".strtolower(isset($this->uri) ? $this->uri : $this->table)."/{$this->id}/edit'>Declare a morphemic form</a>";
            }
		}

		return "<alg-morpheme-alert title='$title'>$options</alg-morpheme-alert>";
    }

    /**
     * Disambiguate a morpheme by adding a disambiguator to the appropriate segment of the morphemicForm
     *
     * @param $index
     * @param $disambiguator
     * @return void
     */
    public function disambiguate($index, $disambiguator)
    {
        $morphemes = explode('-', $this->morphemicForm);

        if(count($morphemes) > $index && count(explode('.', $morphemes[$index]) == 1)) {

            // Add the disambiguator at the end of the morpheme at the given index
            $morphemes[$index] = $morphemes[$index].'.'.$disambiguator;
        }

        // Put the morphemicForm back together and save it
        $this->morphemicForm = implode('-', $morphemes);
        $this->save();
    }

    public function containsMorpheme($morpheme)
    {
        $found = false;

        if(is_array($morpheme)) {
            for($i = 0; $i < count($morpheme) && !$found; $i++) {
                $found = $this->containsMorphemeHelper($morpheme[$i]);
            }
        } else {
            $found = $this->containsMorphemeHelper($morpheme);
        }

        return $found;
    }

    protected function containsMorphemeHelper($morpheme)
    {
        if(is_string($morpheme)) {
            $lookup = $morpheme;
        } else {
            $lookup = $morpheme->name;
        }

        return preg_match("/$lookup/", $this->morphemicForm);
    }
}