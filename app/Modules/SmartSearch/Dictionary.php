<?php

namespace App\Modules\SmartSearch;

use Illuminate\Support\Collection;

class Dictionary
{
	protected $dictionary;

	public static function build(Collection $collection, array $alternates = [])
	{
		$dictionary = new Dictionary;

		if($collection->first()->getAttribute('aliases')) {
			$alternates[] = 'aliases';
		}

        foreach($collection as $item) {
        	$value = [
            	'id' => $item->id,
            	'class' => get_class($item)
            ];

            $dictionary->record($item->name, $value);

            foreach($alternates as $alternate) {
                if($item->$alternate) {
                    $alt = preg_split('`[,/]`', $item->$alternate);
    
                    foreach($alt as $name) {
                    	$dictionary->record($name, $value);
                    }
                }
            }
        }

    	return $dictionary;
	}

	public function record($key, $value)
	{
		$key = strtolower((string)$key);

		if (!isset($this->dictionary[$key])) {
			$this->dictionary[$key] = [];
		}

		$this->dictionary[$key][] = $value;
	}

	public function search($lookup)
	{
		return $this->lookup($lookup);
	}

	public function lookup($lookup, string $class = '')
	{
		$lookup = strtolower((string)($lookup));
		$values = null;

		if(isset($this->dictionary[$lookup])) {
			$stored = $this->dictionary[$lookup];

			if (strlen($class) > 0) {
				$stored = array_where($stored, function($val) use ($class) {
					return $val['class'] == $class;
				});
			}

			$values = array_pluck($stored, 'id');
		}

		return $values;
	}
}