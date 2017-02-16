<?php

namespace App;

use App\Morpheme;
use Illuminate\Support\Facades\Auth;

trait HasMorphemesTrait {

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
            $chunk = explode('.', $morpheme);

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

        if(count($morphemes) == count($this->morphemes)) {
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

        return count($morphemes);
	}

    public function morphemeList()
    {
        $output = [];
        $savedMorphemes = $this->morphemes;
        $curr = 0;
        $slots = explode('-', $this->morphemicForm);


        foreach($slots as $index => $slot) {
            if($curr < count($savedMorphemes) && $savedMorphemes[$curr]->pivot->position == $index + 1) {
                $output[] = $savedMorphemes[$curr++];
            }
            else {
                $output[] = ['name' => explode('.', $slot)[0]]; // Pull off the disambiguator

                if(Auth::user()) {
                    $search = Morpheme::whereIn('name', [
                                            $slot,
                                            '-'.$slot,
                                            '-'.$slot.'-',
                                            $slot.'-',
                                        ])
                                      ->where('language_id', $this->language->id)
                                      ->get();
                    if(count($search) > 0) {
                        $output[count($output) - 1] += ['exists' => true];
                    }
                    else {
                        $output[count($output) - 1] += ['exists' => false];
                    }
                }
            }
        }

        return $output;
    }

    public function printMorphemes()
    {
    	$initialChangeFound = false;
    	$firstTime = true;
    	$html = '';
    	$morphemeHTML;
    	$iconHTML;
    	$glossHTML;

    	foreach($this->morphemeList() as $morpheme) {
    		$morphemeHTML = '';
    		$iconHTML = '';
    		$glossHTML = '';

    		if($firstTime) {
    			$firstTime = false;
    		} else {
    			$html .= "<div class='column is-narrow hyphen'>-</div>";
    		}

    		if($morpheme instanceof Morpheme) {
    			// Morpheme unambiguously exists in the database

    			// Add either the name or the alternate name of the morpheme
    			if($this->initialChange && $morpheme->isAffectedByInitialChange() && !$initialChangeFound) {
    				$morphemeHTML .= str_replace(['-', '*'], '', $morpheme->alternateName);
    				// wait to mark initial change as found until the gloss
    			} else {
    				$morphemeHTML .= str_replace(['-', '*'], '', $morpheme->name);
    			}

    			// Everything except vStems need to be wrapped in hyperlinks
    			if(!$morpheme->isVStem()) {
    				$morphemeHTML = "<a href='/morphemes/{$morpheme->id}'>$morphemeHTML</a>";
    			}

    			// Add the gloss below the morpheme
    			if($this->initialchange && $morpheme->isAffectedByInitialChange() && !$initialChangeFound) {
    				$glossHTML .= "IC.";
    				$initialChangeFound = true;
    			}
    			if($morpheme->translation) {
    				$glossHTML .= str_replace(" ", ".", $morpheme->translation);
    			} else {
    				$glossHTML .= "<a href='/glosses/{$morpheme->gloss_id}'><span class='gloss'>{$morpheme->gloss->abv}</span></a>";
    			}

    			$morphemeHTML .= "<p>$glossHTML</p>";

    		} else {
    			// Morpheme either doesn't exist in the database or it's ambiguous
    			$morphemeHTML .= $morpheme['name'];

    			if(Auth::user()) {
    				// This is fairly database-intensive, so only bother with this when the user is logged in

    				// Set the icon
    				if($morpheme['exists']) {
    					$iconHTML .= "<span class='icon is-small' title='Disambiguation required'><i class='fa fa-exclamation-triangle'></i></span>";
    				} else {
    					$iconHTML .= "<span class='icon is-small' title='No such morpheme in the database'><i class='fa fa-exclamation-triangle'></i></span>";
    				}

    				// Wrap the icon in an anchor tag and add it to the morpheme
    				$morphemeHTML .= "<a class='icon is-danger'>$iconHTML</a>";
    			}
    		}

    		// Wrap the morpheme up in a column
    		$html .= "<div class='column is-narrow'>$morphemeHTML</div>";
    	}

    	return "<div class='columns morpheme-printout'>$html</div>";
    }
}