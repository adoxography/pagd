@extends('layout', ['title' => 'Glossary'])

@section('content')
	<div class="heading">
		<h1 class="title">Glossary</h1>
	</div>
	<br />

	<div class="box">
		<ul>
			<li><a href="/glosses">Glosses</a></li>
			<li><a href="/slots">Slots</a></li>
			<li><a href="/sources">Sources</a></li>
			<li><a href="/variables">Variables</a></li>
		</ul>

		<br />

		<h4 class="title is-4">Pages</h4>
		<ul>
			@foreach($pages as $page)
			<li>
				<a href="{{ $page['uri'] }}">{{ $page['label'] }}</a>
			</li>
			@endforeach
		</ul>
	</div>

@stop