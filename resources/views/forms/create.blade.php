@extends('layout', ['title' => 'Add a form'])

@section('content')
	<div class="heading">
		<h1 class="title">Add a form</h1>
	</div>
	<br />

	<div id="root">
		<alg-message>
			<template slot="header">Hi Will</template>
			<p>Eventually, I'm going to set the controller so that it doesn't even let you see this page if you aren't logged in (as it is, it just doesn't show you the link to it), but that's a pain for situations like this where I do want you to look at this. I've been messing around with the form input so that it roughly imitates the layout of the details screen. I'm sure you have some thoughts as to how you'd like it to be laid out, so here's your opportunity. Also, since the database can be backed up and all that jazz, feel free to play around.</p>
			<br />
			<p>A few things I've been thinking about, though:</p>
			<br />
			<ol style="list-style-position: inside;">
				<li>Is there really a point to having a default language here? If you've gotten to this page by clicking the plus icon on a language's form list, that language will automatically be the default, but if you've just come from the "add" menu, I think any guess of what language you're planning on using will be wrong.</li>
				<br />
				<li>What do you think about putting comments on a separate tab? It really comes down to how much comments will be used - if they're only every once in a while, hiding them like that will make the form less imposing. But if they're going to be used often, hiding them will make it a little more work every time.</li>
				<br />
				<li>I don't have a field for parents right now because I want to modify the datalist field (that's the field that classes uses, for example) to be able to make AJAX calls in that instance. Basically, there's a relatively small list of possibilities for a class, but the list of potential parents of a form could be enormous.</li>
			</ol>
		</alg-message>
		@component('components.form', ['url' => '/forms', 'class' => 'box'])
			@include('forms.partials.form')
		@endcomponent
	</div>

	@include('errors.list')
@stop