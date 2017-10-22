<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\Pivot;

class PAParentRelation extends Pivot
{
    public function language()
    {
        return $this->belongsTo(Language::class);
    }
}
