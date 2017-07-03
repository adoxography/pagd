@extends('layout', ['title' => 'Site statistics'])

@section('title')
	Site statistics
@endsection

@section('content')
	<ul>
		<li>Number of languages: {{ $stats['languages'] }}</li>
		<li>Number of verb forms: {{ $stats['verbForms'] }}</li>
		<li>Number of nominal forms: {{ $stats['nominalForms'] }}</li>
		<li>Number of form examples: {{ $stats['examples'] }}</li>
		<li>Number of morphemes: {{ $stats['morphemes'] }}</li>
		<li>Number of phonemes and clusters: {{ $stats['phonemes'] }}</li>
	</ul>
@endsection