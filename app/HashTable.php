<?php

namespace App;

use App\Form;
use App\Argument;

class HashTable {

	private $hashArray;
	private $size;
	private $a;

	public function __construct()
	{
		$this->hashArray = [];
		$this->size = 997;
		$this->a = 31;
	}

	public function insert(Form $form)
	{
		$formType = $form->formType;
		$hash = $this->hash([$form->language_id, $formType->order_id, $formType->mode_id, $formType->class_id, $formType->subject->getPersonCode(), $formType->subject->getNumberCode()]);

		if(!isset($this->hashArray[$hash])) {
			$this->hashArray[$hash] = new Node($form);
		}
		else {
			$this->hashArray[$hash] = new Node($form, $this->hashArray[$hash]);
		}
	}

	public function search($language, $order, $mode, $class, $subjectPerson, $subjectNumber)
	{
		// var_dump($subjectPerson);
		$data = [$language, $order, $mode, $class, $subjectPerson, $subjectNumber];
		$curr = null;
		$output = [];

		$form = null;
		$formType = null;

		$hash = $this->hash([$language, $order, $mode, $class, $subjectPerson, $subjectNumber]);

		if(isset($this->hashArray[$hash])) {
			$curr = $this->hashArray[$hash];
			while($curr != null) {
				$form = $curr->getData();
				$formType = $form->formType;

				if($form->language_id === $language
						&& $formType->order_id === $order
						&& $formType->mode_id === $mode
						&& $formType->class_id === $class
						&& $formType->subject->getPersonCode() == $subjectPerson
						&& $formType->subject->getNumberCode() == $subjectNumber) {
					$output[] = $form;
				}
				
				$curr = $curr->getNext();
			}
		}

		return $output;
	}

	public function getArray()
	{
		return $this->hashArray;
	}

	protected function hash($data)
	{
		$string = $this->stringify($data);
		$hash = 0;

		for($i = 0; $i < strlen($string); $i++) {
			$hash = $this->a * $hash + intval($string{$i});
			$hash %= $this->size;
		}

		return $hash;
	}

	protected function stringify($data)
	{
		$output = '';

		foreach($data as $item) {
			$output .= $this->elongate($item);
		}

		return $output;
	}

	protected function elongate($code)
	{
		$output = $code;
		$length = strlen($code);

		for($i = $length; $i < 2; $i++) {
			$output = '0'.$output;
		}

		return $output;
	}
}

class Node {
	private $data;
	private $next;

	public function __construct(Form $form, Node $next = null)
	{
		$this->next = $next;
		$this->data = $form;
	}

	public function getNext()
	{
		return $this->next;
	}

	public function getData()
	{
		return $this->data;
	}

	public function setNext(Node $next = null)
	{
		$this->next = $next;
	}
}