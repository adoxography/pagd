<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Language extends JsonResource
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
            'iso' => $this->iso,
            'algo_code' => $this->algo_code,
            'reconstructed' => !!$this->reconstructed,
            'group' => new Group($this->whenLoaded('group')),
            'parent' => new Language($this->whenLoaded('parent'))
        ];
        return parent::toArray($request);
    }

    public function with($request)
    {
        return ['status' => 'success'];
    }
}
