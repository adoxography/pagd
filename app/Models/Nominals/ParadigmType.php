<?php

namespace App\Models\Nominals;

use App\Models\Model;

class ParadigmType extends Model
{
    public $table = 'nom_paradigm_types';

    public static $template = [
        'id' => 0,
        'name' => '',
        'has_pronominal_feature' => false,
        'has_nominal_feature' => false
    ];
}
