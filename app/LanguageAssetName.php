<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LanguageAssetName
{
	private $model;

	protected $method = 'name';

	private $with = [];

	public function __construct(Model $model)
	{
		$this->model = $model;
	}

	public function with(string $relation, string $method = 'name')
	{
		if(!method_exists($this->model, $relation)) {
			throw new \Exception(sprintf('%s does not respond to "%s".', $this->model, $relation));
		}

		$this->with[] = [
			'model' => call_user_func([$this->model, $relation]),
			'method' => $method
		];

		return $this;
	}

	public function as(string $method)
	{
		$this->with[count($this->with) - 1]['method'] = $method;

		return $this;
	}

	public function __toString()
	{
		$output = call_user_func([$this->present(), $this->method]);

		foreach($this->with as $item) {
			$output .= sprintf(' (%s)', call_user_func($item['model']->present(), $item['method']));
		}

		return $output;
	}
}