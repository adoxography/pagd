<?php

namespace Algling\Phonology\Interfaces;

interface PhonemeTypeInterface {
	public function getNameAttribute();

	public function hasBooleans();

	public function convertBooleansToString();
}