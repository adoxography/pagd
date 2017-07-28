<?php

namespace App;

interface PresenterInterface
{
	public function name(string $format = '');
	public function link(string $addon = '', string $format = '');
}