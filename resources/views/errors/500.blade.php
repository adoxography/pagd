@extends('layout')

@section('title')
    Something went wrong
@endsection

@section('content')
    <p>Sorry, an error occurred while trying to process your request.</p>

    @can('add content')
        <br />
        <p>To help speed up the process of fixing this error, please <a href="/tickets/create">open a ticket</a>. Include what you were doing when the error occurred. If the error occurred while trying to fill out a form, include the information you entered. You can also email the developer directly at <a href="mailto:{{ App\User::first()->email }}">{{ App\User::first()->email }}</a>.</p>
    @endcan
@endsection
