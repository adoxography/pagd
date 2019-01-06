<?php

namespace App\Models\Nominals;

use App\Models\Language;
use App\Models\Model;
use App\Models\ParadigmTablePresenter;
use App\Presenters\Nominals\ParadigmPresenter;
use App\Traits\Bookmarkable;
use App\Traits\Sourceable;

class Paradigm extends Model
{
    use Sourceable;
    use Bookmarkable;

    public $table = 'nom_paradigms';

    protected $fillable = ['name', 'language_id', 'paradigm_type_id'];

    public $uri = 'nominals/paradigms';

    public $with = ['type'];

    public $presenter = ParadigmPresenter::class;

    public function paradigmType()
    {
        return $this->belongsTo(ParadigmType::class, 'paradigm_type_id');
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

    public function getFormsAttribute()
    {
        $id = $this->id;

        return Form::with([
                'structure',
                'structure.nominalFeature',
                'structure.pronominalFeature',
                'structure.paradigm',
                'structure.paradigm.paradigmType',
                'morphemes',
                'morphemes.glosses',
                'morphemes.slot'
            ])->where('language_id', $this->language_id)
            ->whereHas('structure', function ($query) use ($id) {
                $query->where('paradigm_id', $id);
            })->get();
    }
}
