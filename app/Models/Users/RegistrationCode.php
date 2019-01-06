<?php

namespace App\Models\Users;

use App\Models\Model;
use App\Models\Users\User;

class RegistrationCode extends Model
{
    protected $fillable = ['code'];

    protected $casts = ['valid' => 'boolean'];

    public function users() {
        return $this->hasMany(User::class, 'verification_code', 'code');
    }
}
