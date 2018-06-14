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
        return [
            'id' => $this->id,
            'shape' => str_replace('*', '', $this->name),
            'translation' => $this->translation,
            'reconstructed' => !!$this->language->reconstructed,
            'morphemes' => explode('-', $this->morphemicForm),
            'phonemic_form' => $this->phonemicForm,
            'notes' => $this->publicNotes,
            'complete' => !!$this->complete,
            'language' => new Language($this->language),
            'form' => new Form($this->whenLoaded('form')),
            'parent' => new Example($this->whenLoaded('parent')),
            'morpheme_data' => new MorphemeCollection($this->whenLoaded('morphemes'))
        ];
    }

    public function with($request)
    {
        return ['status' => 'success'];
    }
}
