<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Example extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if ($this->relationLoaded('morphemes')) {
            $morphemes = $this->morphemeSequence();
            $morphemeList = implode('-', $morphemes->map(function ($morpheme) {
                return str_replace(['*', '-'], '', $morpheme->name);
            })->toArray());
        }

        return [
            'id' => $this->id,
            'shape' => str_replace('*', '', $this->name),
            'translation' => $this->translation,
            'reconstructed' => !!$this->language->reconstructed,
            'phonemic_form' => $this->phonemicForm,
            'notes' => $this->publicNotes,
            'complete' => !!$this->complete,
            'language' => new Language($this->language),
            'form' => new Form($this->whenLoaded('form')),
            'parent' => new Example($this->whenLoaded('parent')),
            $this->mergeWhen(isset($morphemes), [
                'morphemes' => $morphemeList ?? null,
                'morpheme_data' => isset($morphemes) ? new MorphemeCollection($morphemes) : null
            ])
        ];
    }

    public function with($request)
    {
        return ['status' => 'success'];
    }
}
