<?php

namespace App\Traits\Phonology;

use App\Models\Phonology\Phoneme;
use App\Models\Phonology\VowelType;
use App\Models\Phonology\ClusterType;
use App\Models\Phonology\ConsonantType;

trait HasTypeTrait
{
    public static function bootHasTypeTrait()
    {
        static::saving(function ($model) {
            if (!$model->isNull()) {
                $model->assignType();
            }
        });
    }

    public function assignType()
    {
        $typeName = Phoneme::getActualClassNameForMorph($this->featureable_type);

        $rules = $this->parseTypeData(request()->all(), $typeName);

        $type = $typeName::where($rules)->first();

        if (!$type) {
            $type = $typeName::create(array_filter($rules, 'strlen'));
        }

        $this->featureable_id = $type->id;
    }

    protected function parseTypeData($data, string $type)
    {
        $rules = [];

        switch ($type) {
            case (VowelType::class):
                $rules = $this->parseVowelData($data);
                break;
            case (ConsonantType::class):
                $rules = $this->parseConsonantData($data);
                break;
            case (ClusterType::class):
                $rules = $this->parseClusterData($data);
                break;
            default:
                break;
        }

        return $rules;
    }

    protected function parseVowelData($data)
    {
        $rules = array_only($data, ['height_id', 'backness_id', 'length_id', 'isNasal', 'isRounded']);

        if (!array_key_exists('length_id', $rules)) {
            $rules['length_id'] = null;
        }

        return $rules;
    }

    protected function parseConsonantData($data)
    {
        $rules = array_only($data, ['place_id', 'manner_id', 'voicing_id', 'isRounded', 'isPalatalized', 'isGlottalized']);

        if (!array_key_exists('voicing_id', $rules)) {
            $rules['voicing_id'] = null;
        }

        return $rules;
    }

    protected function parseClusterData($data)
    {
        return array_only($data, ['firstSegment_id', 'secondSegment_id']);
    }
}
