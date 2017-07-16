<?php

namespace App\Modules\SmartSearch;

use Algling\Verbals\Models\Mode;
use Algling\Verbals\Models\Order;
use Algling\Verbals\Models\VerbClass;
use Algling\Words\Models\Feature;
use App\Group;
use App\Language;
use App\Modules\SmartSearch\RouterInterface;
use App\Modules\SmartSearch\SmartSearch;

class VerbFormRouter implements RouterInterface
{
	protected $results;

	public function __construct(SmartSearch $results)
	{
		$this->results = $results;

		$this->fillInGaps();
	}

	public function getMessage()
	{
		$class = VerbClass::find($this->results->classes[0]);
		$order = Order::find($this->results->orders[0]);
		$mode  = Mode::find($this->results->modes[0]);

		if(count($this->results->languages) == Language::count()) {
			$languages = 'all languages';
		} else {
			$languages = array_toList(Language::select('name')->whereIn('id', $this->results->languages)->get()->pluck('name'));
		}

		return sprintf('Here are the %s %s %s %s verb forms in %s!',
			$this->assembleArguments(),
			$class->name,
			$order->name,
			$mode->name,
			$languages
		);
	}

	public function route()
	{
		return redirect()->route('verbForms::formResults', [
			'languages' => $this->results->languages,
			'classes'   => $this->results->classes,
			'orders'    => $this->results->orders,
			'modes'     => $this->results->modes,

			'subjects[]'         => $this->results->firstFeature,
			'primaryObjects[]'   => $this->results->secondFeature,
			'secondaryObjects[]' => $this->results->secondaryObject,

			'negatives[]'      => $this->results->negative,
			'affirmatives[]'   => $this->results->affirmative,
			'diminutives[]'    => $this->results->diminutive,
			'nonDiminutives[]' => $this->results->nonDiminutive,
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
			$this->results->modes = [1]; // Indicative
		}

		if(count($this->results->orders) == 0) {
			$this->results->orders = [1]; // Conjunct
		}
	}

	protected function assembleArguments()
	{
		$args = Feature::find($this->results->firstFeature)->name;

		if($this->results->secondFeature) {
			$args .= '—' . Feature::find($this->results->secondFeature)->name;
		}

		if($this->results->secondaryObject) {
			$args .= '+' . Feature::find($this->results->secondaryObject)->name;
		}

		return $args;
	}
}