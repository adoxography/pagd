@extends('layout', ['title' => 'Nominal paradigm search results'])

@section('title')
	Nominal paradigm search results
@endsection

@section('content')
	<ul>
		@foreach ($forms as $form)
			<li>{!! $form->present()->as('unique', 'link')->then('language') !!}</li>
		@endforeach
	</ul>
@endsection