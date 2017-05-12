@extends('layout')

@section('title')
	Order the languages
@endsection

@section('content')
	<p>
		<em>Drag the groups and languages into the desired ordering</em>
	</p>
	<br />
	<alg-order list="{{ $groups }}"></alg-order>
@endsection