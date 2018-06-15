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
        if ($this->relationLoaded('morphemes')) {
            $morphemes = $this->morphemeSequence();
            $morphemeList = implode('-', $morphemes->map(function ($morpheme) {
                return str_replace(['*', '-'], '', $morpheme->name);
            })->toArray());
        }

        // return $this->resource->toArray();
        return [
            'id' => $this->id,
            'shape' => str_replace('*', '', $this->name),
            'type' => $this->structure_type == 'verbStructures' ? 'verb' : 'nominal',
            'phonemic_form' => str_replace('*', '', $this->phonemicForm),
            'reconstructed' => !!$this->language->reconstructed,
            'complete' => !!$this->complete,
            'notes' => [
                'historical' => $this->historicalNotes,
                'allomorphy' => $this->allomorphyNotes,
                'usage' => $this->usageNotes,
            ],
            'language' => new Language($this->language),
            'parent' => new Form($this->whenLoaded('parent')),
            'structure' => new Structure($this->structure),
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
