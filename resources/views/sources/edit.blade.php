@extends('layout', ['title' => "Edit {$source->display}"])

@section('title')
    <h1 class="title is-4">Editing {!! $source->present() !!}</h1>
@endsection

@section('content')
	@include('sources.partials.form', ['method' => 'PATCH', 'action' => "/sources/{$source->id}"])
@endsection
