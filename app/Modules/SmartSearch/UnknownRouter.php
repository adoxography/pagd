<?php

namespace App\Modules\SmartSearch;

class UnknownRouter implements RouterInterface
{
	protected $lookup;

	public function __construct(string $lookup)
	{
		$this->lookup = trim($lookup);
	}

	public function getMessage()
	{
		return sprintf('Sorry, we don\'t know what to do with "%s". Please try again.', $this->lookup);
	}

	public function route()
	{
		return back();
	}
}