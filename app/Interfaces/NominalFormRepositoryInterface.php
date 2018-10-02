<?php

namespace App\Interfaces;

interface NominalFormRepositoryInterface {
	public function getNominalFormsAttribute();

	public function loadNominalForms($with = []);

	public function nominalForms();

	public function prepareFormRepoOptions();
}
