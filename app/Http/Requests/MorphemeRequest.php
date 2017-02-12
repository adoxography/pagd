<?php

namespace App\Http\Requests;

use App\Gloss;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Http\FormRequest;

class MorphemeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user();
    }

    public function all()
    {
        $attributes = parent::all();

        if(!isset($attributes['modified'])) {
            foreach(parent::all() as $key => $value) {
                if(is_array($value)) {
                    foreach($value as $subKey => $subValue) {
                        $attributes["{$key}_{$subKey}"] = $subValue;
                    }
                }
            }

            $text = $attributes['gloss_text'];
            $id   = $attributes['gloss_id'];
            $components;
            $gloss;
            $abv;
            $name;

            if (!$id && $text && preg_match("/.+\(.+\)/", $text)) {
                $components = explode('(', $text);

                $abv  = trim($components[0]);
                $name = trim(substr($components[1], 0, strlen($components[1]) - 1));

                if ($abv == 'V') {
                    $gloss = Gloss::select('id')
                                  ->where('abv', 'V')
                                  ->first();
                    $attributes['gloss_id'] = $attributes['gloss']['id'] = $gloss->id;
                    $attributes['gloss']['text']  = $abv;
                    $attributes['translation'] = $name;
                } else {
                    $gloss = Gloss::select('id', 'name')
                                                ->where('abv', $abv)
                                  ->first();

                    if ($gloss && $gloss->name == $name) {
                        $attributes['gloss_id'] = $attributes['gloss']['id'] = $gloss->id;
                        $attributes['gloss']['text']  = $abv;
                    } else {
                        try {
                            $gloss = Gloss::create(['name' => $name, 'abv' => $abv]);

                            $attributes['gloss_id'] = $attributes['gloss']['id'] = $gloss->id;
                            $attributes['gloss']['text']  = $abv;
                        } catch (QueryException $e) {
                        }
                    }
                }
            }

            $attributes['modified'] = true;

            $this->replace($attributes);
        }

        return parent::all();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'            => ['required','isMorpheme'],
            'alternateName'   => ['nullable','isMorpheme'],
            'gloss.text'      => ['required'],
            'gloss.id'        => ['required','integer','exists:Glosses,id'],
            'slot.text'       => ['required'],
            'slot.id'         => ['required','integer','exists:Slots,id'],
            'language.text'   => ['required'],
            'language.id'     => ['required','integer','exists:Languages,id'],
            'parent.id'       => ['nullable','integer'],
            'allomorphyNotes' => ['nullable'],
            'historicalNotes' => ['nullable'],
            'comments'        => ['nullable']
        ];
    }

    public function messages(){
        return [
            'gloss.text.required'    => 'Please enter a gloss.',
            'gloss.id.required'      => 'Please enter a valid gloss.',
            'slot.text.required'     => 'Please enter a slot.',
            'slot.id.required'       => 'There is no slot by that name in the database.',            
            'language.text.required' => 'Please enter a language.',
            'language.id.required'   => 'There is no language by that name in the database.',
        ];
    }
}
