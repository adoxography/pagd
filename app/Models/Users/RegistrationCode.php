<?php

namespace App\Models\Users;

use App\Models\Users\User;
use Illuminate\Database\Eloquent\Model;

class RegistrationCode extends Model
{
    public $table = 'RegistrationCodes';
    protected $fillable = ['code'];

    protected $casts = ['valid' => 'boolean'];

    public function users() {
        return $this->hasMany(User::class, 'verificationCode', 'code');
    }
}
