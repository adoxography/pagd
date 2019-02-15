<?php

namespace App\Models\Words\Observers;

use App\Models\Words\Form;

class FormObserver
{
    public function created(Form $form)
    {
        if ((!$form->morphemic_form || $this->isStemless($form)) && request()->translation) {
            $this->createExample($form, request()->translation);
        }
    }

    public function updated(Form $form)
    {
        if ((!$form->morphemic_form || $this->isStemless($form)) && request()->translation) {
            if ($form->examples()->count() == 0) {
                $this->createExample($form, request()->translation);
            } else {
                $this->updateExample($form, request()->translation);
            }
        }
    }

    public function deleting(Form $form)
    {
        $this->destroyExamples($form);
    }

    protected function destroyExamples(Form $form)
    {
        $examples = $form->examples;

        if ($examples) {
            foreach ($examples as $example) {
                $example->delete();
            }
        }
    }

    protected function isStemless(Form $form)
    {
        return !preg_match('/N|V/', $form->morphemic_form);
    }

    protected function createExample(Form $form, string $translation)
    {
        $form->generateExample($translation);
    }

    protected function updateExample(Form $form, string $translation)
    {
        $example = $form->examples()->first();

        $example->name          = str_replace('*', '', $form->name);
        $example->morphemic_form = $form->morphemic_form;
        $example->translation   = $translation;

        if ($form->phonemicForm) {
            $example->phonemicForm = str_replace('*', '', $form->phonemicForm);
        } else {
            $example->phonemicForm = null;
        }

        if ($form->isDirty('parent_id')) {
            if (!$form->parent_id) {
                $example->parent_id = null;
            } elseif ($form->examples()->count() > 0) {
                $example->parent_id = $form->parent->examples()->first()->id;
            }
        }

        if ($example->isDirty()) {
            $example->save();
        }
    }
}
