<?php

namespace App\Search;

class ColHeader{
	private $language;
	private $order;
	private $mood;
	private $tense;

	public function __construct($language,$order,$mood,$tense,$isNegative,$isDiminutive,$isAbsolute){
		$this->language = $language;
		$this->order    = $order;
		$this->mood     = $mood;
		$this->tense    = $tense;
		$this->isNegative   = $isNegative;
		$this->isDiminutive = $isDiminutive;
		$this->isAbsolute   = $isAbsolute;
	}

	public function toHTML(){
		return "<td><a href='/languages/" . $this->language->id . "'>" . $this->language->name . "</td>";
	}

	public function compareTo(ColHeader $other){
		$output = 0;

		if($this->language->group->id < $other->language->group->id){
			$output = -1;
		}
		else if($this->language->group->id > $other->language->group->id){
			$output = 1;
		}
		else{
			$output = strcmp($this->language->name,$other->language->name);
		}

		return $output;
	}
	
	
}

?>