<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Morpheme extends JsonResource
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
            'reconstructed' => !!$this->language->reconstructed,
            'gloss' => $this->gloss,
            'reconstructed' => !!optional($this->language)->reconstructed,
            'notes' => [
                'historical' => $this->historicalNotes,
                'allomorphy' => $this->allomorphyNotes,
                'usage' => $this->usageNotes
            ],
            'disambiguator' => $this->disambiguator,
            'position' => optional($this->pivot)->position,
            'language' => new Language($this->language),
            'slot' => new Slot($this->whenLoaded('slot')),
            'parent' => new Morpheme($this->whenLoaded('parent'))
        ];
    }

    public function with($request)
    {
        return ['status' => 'success'];
    }
}
