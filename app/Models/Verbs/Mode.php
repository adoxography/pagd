<?php

namespace App\Models\Verbs;

use App\Models\Model;
use App\Presenters\AlgPresenter;

class Mode extends Model
{
    public $table = 'verb_modes';
    protected $fillable = ['name', 'description'];

    public function structures()
    {
        return $this->hasMany(Structure::class, 'mode_id');
    }

    public static function fieldTemplate($root = true)
    {
        return collect([
            'fields' => [
                'name' => '',
                'id' => 0
            ]
        ]);
    }
}
