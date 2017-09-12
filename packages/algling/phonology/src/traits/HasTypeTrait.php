<?php

namespace Algling\Phonology\Traits;

use Algling\Phonology\Models\Phoneme;
use Algling\Phonology\Models\VowelType;
use Algling\Phonology\Models\ClusterType;
use Algling\Phonology\Models\ConsonantType;

trait HasTypeTrait
{
    public static function bootHasTypeTrait()
    {
        static::saving(function ($model) {
            $model->assignType();
        });
    }

    public function assignType()
    {
        $typeName = Phoneme::getActualClassNameForMorph($this->featurable_type);

        $rules = $this->parseTypeData(request()->all(), $typeName);

        $type = $typeName::where($rules)->first();

        if (!$type) {
            $type = $typeName::create(array_filter($rules, 'strlen'));
        }

        $this->featurable_id = $type->id;
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
