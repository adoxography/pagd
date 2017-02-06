@extends('layout', ['title' => 'Forms that need attention'])

@section('content')

<div class="heading">
	<h1 class="title">Forms that need attention</h1>
</div>
<br />

<div class="box">
	<p> The following forms have some kind of issue with their morphemes: either the morphemes supplied are ambiguous, or there are no matching records in the database.</p>
	<hr />
	@foreach($languages as $language => $forms)
	<h4 class="title is-4">{{ $language }}</h4>
	<ul>
		@foreach($forms as $form)
			<li><a href="/forms/{{ $form->id }}">{{ $form->uniqueName() }}</a></li>
		@endforeach
	</ul>
	<br />
	@endforeach
</div>

@endsection