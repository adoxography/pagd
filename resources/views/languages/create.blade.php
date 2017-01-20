@extends('layout')

@section('content')

	<div class="heading">
		<h1 class="title">Add a Language</h1>
	</div>
	<br />
	
	<div id="root">
		<alg-message>
			<template slot="header">Hi Will!</template>
			I finally got tired of the datalist component I had been using for things like language selection, because a) I'm trying to get away from jQuery as much as I can and b) it didn't behave exactly as I wanted it to. The group and parent selectors below use a datalist component I wrote myself, with the chief advantage being that clicking on the arrow on the right will bring up ALL of the options, regardless of whether there's text in the input field. It's also much cleaner on the scripting end. The last thing I have left to tidy up is getting it to close when you click outside of it - because it has to react to an event that's outside of it, it takes a bit more complex scripting. It'll get there, though. :)
		</alg-message>
		{{ Form::open(['url' => '/languages', 'class' => 'box']) }}
			@include('languages.partials.form')
		{{ Form::close() }}
	</div>

	@include('errors.list')

@stop