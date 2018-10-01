@extends('layout', ['title' => "Edit {$phoneme->name}"]);

@section('title')
	<label>Editing</label>
	{{ $phoneme->name }}
@endsection

@section('content')
	@include('phonemes.partials.form', ['method' => 'PATCH', 'action' => "/phonemes/{$phoneme->id}"])
@endsection
