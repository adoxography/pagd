<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Form extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $morphemes = $this->morphemeSequence();
        $morphemeList = implode('-', $morphemes->map(function ($morpheme) {
            return str_replace(['*', '-'], '', $morpheme->name);
        })->toArray());

        return [
            'id' => $this->id,
            'shape' => str_replace('*', '', $this->name),
            'phonemic_form' => str_replace('*', '', $this->phonemicForm),
            'morphemes' => $morphemeList,
            'reconstructed' => !!$this->language->reconstructed,
            'notes' => [
                'historical' => $this->historicalNotes,
                'allomorphy' => $this->allomorphyNotes,
                'usage' => $this->usageNotes,
            ],
            'complete' => !!$this->complete,
            'language' => new Language($this->language),
            'parent' => new Form($this->whenLoaded('parent')),
            'morpheme_data' => new MorphemeCollection($morphemes)
        ];
    }

    public function with($request)
    {
        return ['status' => 'success'];
    }
}
