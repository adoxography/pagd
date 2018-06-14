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
        return [
            'id' => $this->id,
            'shape' => str_replace('*', '', $this->name),
            'phonemic_form' => $this->phonemicForm,
            'reconstructed' => !!$this->language->reconstructed,
            'notes' => [
                'historical' => $this->historicalNotes,
                'allomorphy' => $this->allomorphyNotes,
                'usage' => $this->usageNotes,
            ],
            'complete' => !!$this->complete,
            'language' => new Language($this->language),
            'parent' => new Form($this->whenLoaded('parent')),
            'morphemes' => new MorphemeCollection($this->whenLoaded('morphemes'))
        ];
    }

    public function with($request)
    {
        return ['status' => 'success'];
    }
}
