<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

abstract class Presenter
{
	protected $model;

	protected $method;

	protected $arguments = [];

	protected $before = [];

	protected $then = [];

	protected $lastWasBefore = false;

	public function __construct(Model $model, string $method)
	{
		$this->model = $model;
		$this->method = $method;
	}

	public function with(string $relation, string $method = 'name', $before = false)
	{
		if($before) {
			return $this->before($relation, $method);
		} else {
			return $this->then($relation, $method);
		}
	}

	/**
	 * Add a relation's presenter before the current one
	 * 
	 * @param string The name of the relation
	 * @param string The presentation method to use with the relation
	 * @param array The arguments to pass in to the presentation method
	 * 
	 * @return App\Presenter
	 */
	public function before(string $relation, string $method = 'name', ...$arguments)
	{
		if(!method_exists($this->model, $relation)) {
			throw new \Exception(sprintf('%s does not respond to "%s".', $this->model, $relation));
		}

		$relation = $this->model->$relation;

		if(is_string($relation)) {
			$this->before[] = $relation;
		} else if(method_exists($relation, 'present')) {
			$this->before[] = $relation->present()->as($method)
							->setArguments($arguments);
		}

		$this->lastWasBefore = true;

		return $this;
	}

	/**
	 * Add a relation's presenter after the current one
	 * 
	 * @param string The name of the relation
	 * @param string The presentation method to use with the relation
	 * @param array The arguments to pass in to the presentation method
	 * 
	 * @return App\Presenter
	 */
	public function then(string $relation, string $method = 'name', ...$arguments)
	{
		if(!method_exists($this->model, $relation)) {
			throw new \Exception(sprintf('%s does not respond to "%s".', $this->model, $relation));
		}

		$relation = $this->model->$relation;

		if(is_string($relation)) {
			$this->then[] = $relation;
		} else if(method_exists($relation, 'present')) {
			$this->then[] = $relation->present()->as($method)
							->setArguments($arguments);
		}

		$this->lastWasBefore = false;

		return $this;
	}

	/**
	 * Set the presentation method of the last model added
	 * 
	 * @param string The name of the presentation method
	 * @param array The arguments to use with the presentation method
	 * 
	 * @return App\Presenter
	 */
	public function as(string $method, ...$arguments)
	{
		$with = $this->getLastArray();

		// If there are no subsequent presenters set, assume the method is to be used on this presenter
		if(count($with) == 0) {
			$this->method = $method;
			$this->setArguments($arguments);
		} else {
			// Otherwise, set the method on the last presenter entered
			array_last($with)->as($method)
				->setArguments($arguments);
		}

		return $this;
	}

	/**
	 * Set the arguments for this presenter
	 * 
	 * @param array|null The arguments
	 * 
	 * @return App\Presenter
	 */
	public function setArguments($arguments)
	{
		if(!is_array($arguments)) {
			$arguments = [$arguments];
		}

		$this->arguments = $arguments;

		return $this;
	}

	/**
	 * Allow for Laravel-style method calls
	 * 
	 * @param string The name of the property to access
	 * 
	 * @return void
	 */
	public function __get($property)
	{
		if(method_exists($this, $property)) {
			return call_user_func([$this, $property]);
		}

		throw new \Exception(sprintf('%s does not respond to the "%s" property.', static::class, $property));
	}

	/**
	 * Call the method on the model, then print the items in the before and then arrays
	 * 
	 * @return string
	 */
	public function __toString()
	{
		$output = '';

		foreach($this->before as $item) {
			$output .= $item . '&nbsp';
		}

		$output .= call_user_func_array([$this, $this->method], $this->arguments);

		foreach($this->then as $item) {
			$output .= sprintf('&nbsp(%s)', $item);
		}

		return $output;
	}

	protected function getLastArray()
	{
		if($this->lastWasBefore) {
			return $this->before;
		} else {
			return $this->then;
		}
	}
}