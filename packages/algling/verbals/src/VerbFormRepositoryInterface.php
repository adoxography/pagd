<?php

namespace Algling\Verbals;

interface VerbFormRepositoryInterface {
	public function getVerbFormsAttribute();

	public function loadVerbForms($with = []);

	public function verbForms();

	public function prepareFormRepoOptions();
}