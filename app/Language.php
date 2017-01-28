<?php

namespace App;

use App\Morpheme;
use App\Events\Language\Saved;
use App\Events\Language\Deleting;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Language extends Model
{
    public $table = 'Languages';
    protected $fillable = ['name','group_id','parent_id','iso','algoCode'];
    protected $events = [
        'saved'    => Saved::class,
        'deleting' => Deleting::class
    ];
    
    public function group()
    {
        return $this->belongsTo(Group::class);
    }
    
    public function parent()
    {
        return $this->belongsTo(Language::class, 'parent_id');
    }
    
    public function children()
    {
        return $this->hasMany(Language::class, 'parent_id');
    }

    public function forms()
    {
        return $this->hasMany(Form::class, 'language_id');
    }

    public function morphemes()
    {
        return $this->hasMany(Morpheme::class);
    }
}
