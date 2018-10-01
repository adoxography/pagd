<?php

namespace App\Interfaces;

interface VerbFormRepositoryInterface {
	public function getVerbFormsAttribute();

	public function loadVerbForms($with = []);

	public function verbForms();

	public function prepareFormRepoOptions();
}
