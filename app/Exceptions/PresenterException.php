<?php

namespace App\Exceptions;

use App\Presenter;
use Exception;
use Throwable;

class PresenterException extends Exception
{
    protected $presenter;

    public function __construct(string $message, Presenter $presenter, int $code = 0, Throwable $previous = null)
    {
        $this->presenter = $presenter;

        parent::__construct($message, $code, $previous);
    }
}
