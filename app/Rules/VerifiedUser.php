<?php

namespace App\Rules;

use Config;
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
        $this->codes = Config::get('constants.verification');
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
        return array_search($value, $this->codes) !== false;
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
