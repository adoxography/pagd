@extends('layout', ['title' => "Edit {$source->display}"])

@section('title')
	Editing {{ $source->display }}
@endsection

@section('content')
	@include('sources.partials.form', ['method' => 'PATCH', 'action' => "/sources/{$source->id}"])
@endsection