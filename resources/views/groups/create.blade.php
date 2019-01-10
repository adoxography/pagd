@extends('layout', ['title' => "Add group"])

@section('title')
    <h1 class="title is-4">Add group</h1>
@endsection

@section('content')
	@include('groups.partials.form', ['method' => 'POST', 'action' => "/groups"])
@stop
