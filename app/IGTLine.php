<?php

namespace App;

use App\IGTLineType;
use Illuminate\Database\Eloquent\Model;

class IGTLine extends Model
{
    public $table = 'IGTLines';
    protected $fillable = ['type_id', 'igt_id', 'text'];

    public function type()
    {
        return $this->belongsTo(IGTLineType::class, 'type_id');
    }
}
