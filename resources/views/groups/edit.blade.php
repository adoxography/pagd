@extends('layout', ['title' => "Edit {$group->name}"])

@section('title')
	<label>Editing </label>
	{{ $group->name }}
@endsection

@section('content')
	@include('groups.partials.form', ['method' => 'PATCH', 'action' => "/groups/{$group->id}"])
@stop