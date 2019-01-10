@extends('layout', ['title' => "Edit {$group->name}"])

@section('title')
    <h1 class="title is-4">Editing {!! $group->present() !!}</h1>
@endsection

@section('content')
	@include('groups.partials.form', ['method' => 'PATCH', 'action' => "/groups/{$group->id}"])
@stop
