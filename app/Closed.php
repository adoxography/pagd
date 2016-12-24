<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Validator;

class Closed extends Model
{
    protected $fillable;
    protected $rules;
    public $errors;

    public function __construct()
    {
        $this->fillable = [
            'name',
            'description'
        ];

        $this->rules = [
            'name' => ['required',"unique:{$this->table},name"],
            'description' => ['required']
        ];
    }

    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            return $model->validate();
        });
    }

    public function validate()
    {
        $rc = true;
        $v  = Validator::make($this->getAttributes(), $this->rules);

        if ($v->fails()) {
            $this->errors = $v->messages();
            $rc = false;
        }

        return $rc;
    }
}
