@extends('layout', ['title' => 'Search the database'])

@section('content')
	<div id="root">
		<div class="heading">
			<h1 class="title">Search</h1>
		</div>
		<br />

		<div class="box">
			<alg-tabs>
				<alg-tab name="General" {{ (isset($searchType) && $searchType != 'general') ? '' : "selected='true'" }}>
					<form method="GET" action="/search/general">
						<div class="field is-grouped">
							<p class="control">
								<span class="select">
									<select name="type">
										<option>Source</option>
										<option>Language</option>
										<option>Form</option>
										<option>Example</option>
										<option>Morpheme</option>
									</select>
								</span>
							</p>
							<p class="control is-expanded">
								<input class="input" type="text" name="lookup" />
							</p>
							<p class="control">
								<button class="button" type="submit">Search</button>
							</p>
						</div>
					</form>
				</alg-tab>
				<alg-tab name="For a paradigm" {{ (isset($searchType) && $searchType == 'paradigm') ? "selected='true'" : '' }}>
					<alg-paradigm-search orders="{{ $orders }}"
										 modes="{{ $modes }}"
										 languages="{{ $languages }}"
										 {{ isset($preset) ? "active=Advanced " : '' }}
										 {{ isset($preset) ? "preset=$preset" : '' }}>
					</alg-paradigm-search>
				</alg-tab>				
				<alg-tab name="For a form">
					@component('components.form', ['method' => 'GET', 'url' => '/search/form', 'class' => 'form-search-form'])
						<div class="columns">
							<div class="column is-one-quarter">
								<alg-radio-toggle languages="{{ $languages }}"></alg-radio-toggle>
							</div>
							<div class="column">
								<alg-form-search arguments="{{ $arguments }}"
												 classes="{{ $classes }}"
												 modes="{{ $modes }}"
												 orders="{{ $orders }}">
								</alg-form-search>
							</div>
						</div>
						<button type="submit" class="button is-success">Search</button>
					@endcomponent
				</alg-tab>
			</alg-tabs>
		</div>
		
	</div>

@stop