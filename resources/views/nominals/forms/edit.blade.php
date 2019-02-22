@extends('layout', ['title' => "Edit {$form->name}"])

@section('title')
    <h1 class="title is-4">Editing {!! $form->present() !!}</h1>
@endsection

@section('content')
	@include('nominals.forms.partials.form', ['method' => 'PATCH', 'action' => "/nominals/forms/{$form->id}"])
@endsection
