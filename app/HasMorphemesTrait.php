<?php

namespace App;

use App\Form;
use App\Example;
use App\Morpheme;
use Illuminate\Support\Facades\Auth;

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

    protected function getMorphemeTable()
    {
        return $this->morphemeTable;
    }

    public function morphemes()
    {
        return $this->belongsToMany(Morpheme::class, $this->getMorphemeTable())->orderBy('position')->withPivot('position');
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

        $chunk;  // Will hold an array, where index 0 is the morpheme name, and index 1 is the disambiguator
        $query;
        $lookup;

        // Unlink all of the existing morphemes
        $this->morphemes()->detach();

        // Check each morpheme against the database
        foreach ($morphemes as $index => $morpheme) {
            $chunk = explode('.', $this->extractRealMorpheme($morpheme));

            if (count($chunk) > 0) {
                $query = Morpheme::whereIn('name', [
                    $chunk[0],
                    '-'.$chunk[0],
                    '-'.$chunk[0].'-',
                    $chunk[0].'-',
                ])->where('language_id', $this->language->id);

                if (count($chunk) > 1) { // Chunk has a disambiguator
                    $query->where('disambiguator', $chunk[1]);
                }

                // Execute the query
                $lookup = $query->get();

                // Connect the morpheme if exactly one result was returned
                if (count($lookup) == 1) {
                    $this->morphemes()->attach($lookup[0]->id, ['position' => $index + 1]);
                }
            }
        }

        // Update the complete status, if necessary
        $this->assessIsComplete(count($morphemes), count($this->morphemes));
	}

    /**
     * Removes any initial change directives
     * 
     * @param string The string containing the morpheme to be extracted
     * @return string The morpheme
     */
    protected function extractRealMorpheme($morpheme)
    {
        $pieces = explode('|', $morpheme);
        return $pieces[count($pieces) - 1];        
    }

    /**
     * Determines whether or not a form has all of its morphemes, and updates the form if necessary
     * 
     * @return void
     */
    protected function assessIsComplete($numExpected, $numActual)
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
        $initialChangePieces;

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
                    $temp = "IC.$temp";
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
     * @return Illuminate\Support\Collection
     */
    protected function getPossibleMorphemes($name)
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
    	$morphemeHTML;
    	$glossHTML;
    	$index = 0;
        $colour = '';

    	foreach($this->morphemeList() as $morpheme) {
    		$morphemeHTML = '';
    		$iconHTML = '';
    		$glossHTML = '';
    		$iconText = '';

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
        				$morphemeHTML = "<a href='/morphemes/{$morpheme->id}' style='color: $colour;'>$morphemeHTML</a>";
        			}

                    if($morpheme->isHidden()) {
                        $morphemeHTML = "<span class='data-hidden'>$morphemeHTML</span>";
                    }

        			// Add the gloss below the morpheme
        			if($morpheme->initialChanged()) {
        				$glossHTML .= "IC.";
        			}
        			if($morpheme->translation) {
        				$glossHTML .= str_replace(" ", ".", $morpheme->translation);
        			} else {
        				$glossHTML .= "<a href='/glosses/{$morpheme->gloss_id}' style='color: inherit;'><span class='gloss'>{$morpheme->gloss->abv}</span></a>";
        			}

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
     * @return string An HTML directive for creating the tooltip
     */
    protected function createMorphemeAlert($morpheme, $index)
    {
    	$title = "";
    	$options = "";
    	$gloss = "";

		if(count($morpheme['possibilities']) > 0) {
        // The morphemes needs disambiguation

			$title = "Disambiguation required";
			$gloss = "";
			$model = "";

            // Set the model name so the URI can be set correctly
			if($this instanceof Form) {
				$model = "forms";
			} else if($this instanceof Example) {
				$model = "examples";
			}

			foreach($morpheme['possibilities'] as $possibility) {

                // Determine what the gloss should be
				if($possibility->translation) {
					$gloss = '<p>'.str_replace(' ', '.', $possibility->translation).'</p>';
				} else {
					$gloss = "<p class='gloss'>{$possibility->gloss->abv}</p>";
				}

                // Create a button (disguised as a link) that will instruct the website to disambiguate the morpheme
				$options .= "<li>".
					"<form method='POST' action='/$model/{$this->id}/disambiguate'>".
						"<input type='hidden' name='index' value='{$index}' />".
						csrf_field().
						method_field("PATCH").
						"<input type='hidden' name='disambiguator' value='{$possibility->disambiguator}' />".
						"<button type='submit' class='button is-link'>".
							"{$possibility->name}<sup>{$possibility->disambiguator}</sup>$gloss".
						"</button>".
					"</form>".
				"</li>";
			}

            // Wrap everything in an unordered list
			$options = "<ul>$options</ul>";
		} else {
        // There is no matching morpheme in the database

			$title = "Morpheme missing";
			$options = "<a href='/morphemes/create?name={$morpheme['name']}&language={$this->language->name}&languageID={$this->language->id}'>Add (-){$morpheme['name']}(-)</a>";
		}

		return "<alg-morpheme-alert title='$title'>$options</alg-morpheme-alert>";
    }

    /**
     * Disambiguate a morphememe by adding a disambiguator to the appropriate segment of the morphemicForm
     * 
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
}