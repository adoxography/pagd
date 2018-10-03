<?php

namespace App\Modules\SmartSearch; 

use App\Models\Verbs\Mode;
use App\Models\Verbs\Order;
use App\Models\Verbs\VerbClass;
use App\Group;
use App\Models\Language;

class VerbParadigmRouter implements RouterInterface
{
	protected $results;

	public function __construct(SmartSearch $results)
	{
		$this->results = $results;

		$this->fillInGaps();
	}

	public function getMessage()
	{
		$classes   = VerbClass::select('name')->whereIn('id', $this->results->classes)->get()->pluck('name');
		$orders    = Order::select('name')->whereIn('id', $this->results->orders)->get()->pluck('name');
		$modes     = Mode::select('name')->whereIn('id', $this->results->modes)->get()->pluck('name');

		if(count($this->results->languages) == Language::count()) {
			$languages = 'all languages';
		} else {
			$languages = array_toList(Language::select('name')->whereIn('id', $this->results->languages)->get()->pluck('name'));
		}

		return sprintf($this->getBaseMessage(),
			$this->getBooleanString(),
			array_toString($classes, '/'),
			array_toString($orders, '/'),
			array_toString($modes, '/'),
			$languages
		);
	}

	public function route()
	{
		return redirect()->route('verbForms::paradigmResults', [
			'languages' => $this->results->languages,
			'classes'   => $this->results->classes,
			'orders'    => $this->results->orders,
			'modes'     => $this->results->modes,
			'modeSelect' => 'selectModes',
			'negative'      => $this->results->negative,
			'affirmative'   => $this->results->affirmative,
			'diminutive'    => $this->results->diminutive,
			'nonDiminutive' => $this->results->nonDiminutive,
		]);
	}

	protected function fillInGaps()
	{
		if (count($this->results->languages) == 0) {
			if (count($this->results->groups) > 0) {
				$groups = Group::whereIn('id', $this->results->groups)->get();

				foreach($groups as $group) {
					$this->results->languages = array_merge($this->results->languages, $group->allLanguages()->pluck('id')->toArray());
				}
			} else {
				$this->results->languages = Language::select('id')->get()->pluck('id')->toArray();
			}
		}

		if(count($this->results->modes) == 0) {
			$this->results->modes = [1,17]; // Indicative and unmarked
		}

		if(count($this->results->orders) == 0) {
			$this->results->orders = [1,3]; // Conjunct and independant
		}

		if(!$this->results->negative && !$this->results->affirmative) {
			$this->results->affirmative = true;
		}

		if(!$this->results->nonDiminutive && !$this->results->diminutive) {
			$this->results->nonDiminutive = true;
		}
	}

	protected function getBaseMessage()
	{
		if($this->isMultipleParadigms()) {
			return 'Here are the %s%s %s %s paradigms of %s!';
		} else {
			return 'Here is the %s%s %s %s paradigm of %s!';
		}
	}

	protected function getBooleanString()
	{
		$output = '';

		if ($this->results->negative) {
			$output .= 'negative';

			if ($this->results->affirmative) {
				$output .= ' and affirmative';
			}

			$output .= ' ';
		}

		if ($this->results->diminutive) {
			if(strlen($output) > 0) {
				$output .= ', ';
			}

			$output .= 'diminutive';

			if ($this->results->nonDiminutive) {
				$output .= ' and non-diminutive';
			}

			$output .= ' ';
		}

		return $output;
	}

	protected function isMultipleParadigms()
	{
		return count($this->results->languages) > 1 || count($this->results->classes) > 1 || count($this->results->orders) > 1 || count($this->results->modes) > 1;
	}
}
