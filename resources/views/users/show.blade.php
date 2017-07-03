@extends('layout')

@section('title')
	<label>User profile:</label>
	{{ $user->name }}
@endsection

@section('icons')
	@if(Auth::user() && $user->id == Auth::user()->id)
	    <a href="/users/{{ $user->id }}/edit" class="card-header-icon">
	      	<span class="icon">
	        	<i class="fa fa-pencil"></i>
	      	</span>
	    </a>
    @endif
@endsection

@section('panel')
	@include('users.partials.panel')
@endsection