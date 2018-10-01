<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Verbs\Structure as VerbStructure;
use Algling\Nominals\Models\Structure as NominalStructure;

class Structure extends JsonResource
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

            $this->mergeWhen($this->resource instanceof VerbStructure, [
                'is_negative' => !!$this->isNegative,
                'is_diminutive' => !!$this->isDiminutive,
                'abs_obj' => $this->isAbsolute == null ? null : !!$this->isAbsolute,
                'class' => $this->formClass,
                'subclass' => $this->subclass,
                'subject' => new Feature($this->subject),
                'primary_object' => new Feature($this->primaryObject),
                'secondary_object' => new Feature($this->secondaryObject),
                'order' => new Order($this->order),
                'mode' => new Mode($this->mode)
            ]),

            $this->mergeWhen($this->resource instanceof NominalStructure, [
                'nominal_feature' => new Feature($this->nominalFeature),
                'pronominal_feature' => new Feature($this->pronominalFeature),
                'paradigm' => new Paradigm($this->paradigm)
            ])
        ];
    }

    public function with($request)
    {
        return ['status' => 'success'];
    }
}
