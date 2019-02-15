@extends('layout', ['title' => "Edit {$example->name}"])

@section('title')
    <h1 class="title is-4">Editing {!! $example->present() !!}</h1>
@endsection

@section('content')
	@include('words.examples.partials.form', ['method' => 'PATCH', 'action' => "/examples/{$example->id}"])
@stop
