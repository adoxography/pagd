<?php

namespace App\Models\IGT;

use App\Models\IGT\IGTLineType;
use Illuminate\Database\Eloquent\Model;

class IGTLine extends Model
{
    public $table = 'IGTLines';
    protected $fillable = ['type_id', 'igt_id', 'text'];

    public function type()
    {
        return $this->belongsTo(IGTLineType::class, 'type_id');
    }

    public function isAligning()
    {
        return $this->type->align;
    }

    public function tokens()
    {
        if ($this->isAligning()) {
            return preg_split('/\s+/', $this->text);
        }

        return [$this->text];
    }
}
