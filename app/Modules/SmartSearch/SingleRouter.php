<?php

namespace App\Modules\SmartSearch;

use App\Models\Group;
use App\Models\Language;

class SingleRouter implements RouterInterface
{
	protected $modelName;
	protected $id;

	public function __construct(string $modelName, int $id)
	{
		$this->modelName = $modelName;
		$this->id = $id;
	}

	public function getMessage()
	{
		if($this->modelName == 'languages') {
			$name = Language::find($this->id)->name;
		} else {
			$name = Group::find($this->id)->name;
		}
		return 'Here are the details on ' . $name . '!';
	}

	public function route()
	{
		if($this->modelName == 'languages') {
			return redirect("/{$this->modelName}/{$this->id}/basic");
		} else {
			return redirect("/{$this->modelName}/{$this->id}");
		}
	}
}
