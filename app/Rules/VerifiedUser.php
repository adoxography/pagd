<?php

namespace App\Rules;

use App\Models\Users\RegistrationCode;
use Illuminate\Contracts\Validation\Rule;

class VerifiedUser implements Rule
{
    protected $codes;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->codes = RegistrationCode::select(['code', 'valid'])
                                       ->where('valid', 1)
                                       ->get()
                                       ->pluck('code');
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return $this->codes->contains($value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'You have supplied an invalid verification code.';
    }
}
