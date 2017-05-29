<?php

namespace Algling\Words\Models\Observers;

use Algling\Words\Models\Form;

class FormObserver {

    public function created(Form $form)
    {
        if($this->isStemless($form) && request()->translation) {
            $this->createExample($form, request()->translation);
        }
    }

    public function updated(Form $form)
    {
        if($this->isStemless($form) && request()->translation) {
            $this->updateExample($form, request()->translation);
        }
    }

	public function deleting(Form $form)
	{
		$this->destroyExamples($form);
	}

    protected function destroyExamples(Form $form)
    {
        $examples = $form->examples;

        if($examples) {
            foreach ($examples as $example) {
                $example->delete();
            }
        }	
    }

    protected function isStemless(Form $form)
    {
        return !preg_match('/N|V/', $form->morphemicForm);
    }

    protected function createExample(Form $form, string $translation)
    {
        $exampleData = [
            'form_id'       => $form->id,
            'name'          => str_replace('*', '', $form->name),
            'phonemicForm'  => str_replace('*', '', $form->phonemicForm),
            'morphemicForm' => $form->morphemicForm,
            'translation'   => $translation
        ];

        if($form->parent_id && $form->parent->examples()->count() > 0) {
            $exampleData['parent_id'] = $form->parent->examples()->first()->id;
        }

        $form->examples()->create($exampleData);
    }

    protected function updateExample(Form $form, string $translation)
    {
        $example = $form->examples()->first();

        $example->name          = str_replace('*', '', $form->name);
        $example->morphemicForm = $form->morphemicForm;
        $example->translation   = $translation;

        if($form->phonemicForm) {
            $example->phonemicForm = str_replace('*', '', $form->phonemicForm);
        } else {
            $examples->phonemicForm = null;
        }

        if($form->isDirty('parent_id')) {
            if(!$form->parent_id) {
                $example->parent_id = null;
            } else if($form->examples()->count() > 0) {
                $example->parent_id = $form->parent->examples()->first()->id;
            }
        }

        if($example->isDirty()) {
            $example->save();
        }
    }
}