<?php

namespace App\Models;

use App\Models\Model;

class ChangeType extends Model
{
    protected static $template = ['name' => 'N/A', 'id' => 0];

    public function identifiableName()
    {
    	return $this->name;
    }

    public static function fieldTemplate($root = true)
    {
        return collect([
            'fields' => [
                'name' => 'N/A',
                'id' => 0
            ]
        ]);
    }
}
