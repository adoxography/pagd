<?php

namespace Algling\Nominals\Models;

use App\Language;
use App\SourceableTrait;
use App\BookmarkableTrait;
use Algling\Nominals\Models\Structure;
use Illuminate\Database\Eloquent\Model;
use Algling\Nominals\Models\ParadigmType;

class Paradigm extends Model
{
	use SourceableTrait;
	use BookmarkableTrait;

    public $table = 'Nom_Paradigms';

    protected $fillable = ['name', 'language_id', 'paradigmType_id'];

    public function paradigmType()
    {
    	return $this->belongsTo(ParadigmType::class, 'paradigmType_id');
    }

    public function type()
    {
    	return $this->paradigmType();
    }

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }

    public function structures()
    {
    	return $this->hasMany(Structure::class);
    }
}
