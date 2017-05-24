<?php

namespace Algling\Nominals;

interface NominalFormRepositoryInterface {
	public function getNominalFormsAttribute();

	public function loadNominalForms($with = []);

	public function nominalForms();

	public function prepareFormRepoOptions();
}