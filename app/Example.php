<?php

namespace App;

use App\Morpheme;
use Illuminate\Database\Eloquent\Model;

class Example extends Model
{
    public $table = 'Examples';
    protected $fillable = ['name','translation','vStem_id','form_id','comments'];

    public function form()
    {
        return $this->belongsTo(Form::class, 'form_id');
    }

    public function sources()
    {
        return $this->belongsToMany(Source::class, 'Sources_Examples');
    }

    public function vStem()
    {
        return $this->belongsto(Morpheme::class, 'morpheme_id');
    }
}
