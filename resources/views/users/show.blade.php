@extends('layout')

@section('title')
	<label>User profile:</label>
	{{ $user->name }}
@endsection

@section('panel')
	@include('users.partials.panel')
@endsection