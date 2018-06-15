<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Paradigm extends JsonResource
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
            'name' => $this->name,
            'language' => new Language($this->whenLoaded('language')),
            'type' => new ParadigmType($this->type)
        ];
    }

    public function with($request)
    {
        return ['status' => 'success'];
    }
}
