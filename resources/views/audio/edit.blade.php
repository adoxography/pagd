@extends('layout', ['title' => "Edit {$audio->name}"])

@section('title')
	<label>Editing</label>
	{{ $audio->name }}
@endsection

@section('content')
	@include('audio.partials.form', ['method' => 'PATCH', 'action' => "/audio/{$audio->id}"])
@endsection