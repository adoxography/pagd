@extends('layout', ['title' => "Edit {$language->name}"])

@section('title')
    <h1 class="title is-4">Editing {!! $language->present() !!}</h1>
@endsection

@section('content')
	@include('languages.partials.form', ['method' => 'PATCH', 'action' => "/languages/{$language->id}"])
@stop
