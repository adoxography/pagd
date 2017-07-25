@extends('layout', ['title' => $ticket->title])

@section('title')
	<label>Respond to</label>
	{{ $ticket->title }}
@endsection

@section('content')
	@component('components.form', [
		'method' => 'POST',
		'action' => "/tickets/{$ticket->id}/respond",
		'visible' => true
	])
	    @include('components.form.textarea', [
	    	'name' => 'response'
	    ])
	@endcomponent
@endsection