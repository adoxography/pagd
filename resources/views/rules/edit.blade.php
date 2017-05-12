@extends('layout', ['title' => "Edit {$rule->abv}"])

@section('title')
	<label>Editing </label>
	{{ $rule->abv }}
@endsection

@section('content')
	@include('rules.partials.form', ['method' => 'PATCH', 'action' => "/rules/{$rule->id}"])
@endsection