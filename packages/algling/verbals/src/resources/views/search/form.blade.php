@extends('layout')

@section('title')
	Verb form search
@endsection

@section('content')
	@component('components.form', ['method' => 'GET', 'action' => '/verbs/search/form/results', 'class' => 'form-search-form'])
		<div class="columns">
			<div class="column is-one-quarter">
				<alg-radio-toggle :languages="{{ $languages }}"></alg-radio-toggle>
			</div>
			<div class="column">
				<alg-form-search
					:args="{{ $arguments }}"
					:classes="{{ $classes }}"
					:modes="{{ $modes }}"
					:orders="{{ $orders }}"
				></alg-form-search>
			</div>
		</div>
		<button type="submit" class="button is-success">Search</button>
	@endcomponent
@endsection