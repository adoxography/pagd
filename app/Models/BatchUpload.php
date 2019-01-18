<?php

namespace App\Models;

use App\Models\Batchable;
use App\Models\Users\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;

class BatchUpload extends Model
{
    protected $fillable = ['user_id', 'batch_type'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function rows()
    {
        return $this->hasManyThrough(
            $this->type,
            Batchable::class,
            'batch_upload_id',
            'id',
            'id',
            'batchable_id'
        );
    }

    public function getTypeAttribute()
    {
        return Relation::morphMap()[$this->batch_type];
    }
}
