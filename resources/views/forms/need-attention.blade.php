@extends('layout', ['title' => 'Data that needs attention'])

@section('content')

<div class="heading">
	<h1 class="title">Data that needs attention</h1>
</div>
<br />

<alg-tabs class="box">
	<alg-tab name="Forms" selected="true">
		@foreach($formLanguages as $language => $forms)
			<h4 class="title is-4">{{ $language }}</h4>
			<ul>
				@foreach($forms as $form)
					<li><a href="/forms/{{ $form->id }}">{!! $form->uniqueName() !!}</a></li>
				@endforeach
			</ul>
			<br />
		@endforeach
	</alg-tab>

	<alg-tab name="Examples">
		@foreach($exampleLanguages as $language => $examples)
			<h4 class="title is-4">{{ $language }}</h4>
			<ul>
				@foreach($examples as $example)
					<li><a href="/examples/{{ $example->id }}">{!! $example->uniqueName() !!}</a></li>
				@endforeach
			</ul>
			<br />
		@endforeach
	</alg-tab>
</alg-tabs>

@endsection