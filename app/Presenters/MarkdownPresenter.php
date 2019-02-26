<?php

namespace App\Presenters;

use App\Presenters\Presenter;
use App\Presenters\PresenterInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class MarkdownPresenter extends Presenter implements PresenterInterface
{
	public function __construct(Model $model, string $method = 'name')
	{
		parent::__construct($model, $method);
	}

	public function name(string $format = '')
	{
		$output = $this->model->name;

		if(strlen($format) > 0) {
			$output = $this->format($output, $format);
		}

		return $output;
	}

	public function link(string $addon = '', string $format = '')
	{
		if (strlen($addon) > 0) {
			$addon = '/' . $addon;
		}

		return sprintf(
			'[%s](%s/%s/%d%s)',
			$this->model->name,
			'http://www.alglang.net',
			$this->getURI(),
			$this->model->id,
			$addon
		);
	}

	/**
	 * Get the URI for accessing the model.
	 * 
	 * @return string
	 */
	protected function getURI()
	{
		if(isset($this->uri)) {
			return $this->uri;
		}

		return $this->generateURIFromModel();
	}

	/**
	 * Guess the URI based on the model's table
	 * 
	 * @return string
	 */
	protected function generateURIFromModel()
	{
		$table = $this->model->getTable();

		$tableName = Arr::last(explode('_', $table));

		return strtolower($tableName);		
	}
}
