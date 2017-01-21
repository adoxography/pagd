@extends('layout')

@section('header')
	<script src = '/js/formUtil.js'></script>
@stop

@section('content')
	<div id="root">
		<div class="heading">
			<h1 class="title">Search</h1>
		</div>
		<br />

		<div class="box">
			<alg-tabs>
				<alg-tab name="For a paradigm" selected="true">
					<alg-message>
						<template slot="header">Note</template>
						Not selecting anything in a category runs a search for all of that category, which is what I want for being able to check on the whole database quickly. In the future, I'll restrict it so that the form cannot be submitted without at least one of each category checked.
					</alg-message>
					<form method="GET" action="/search/paradigm">
						<div class="columns">
							<div class="column box" style="margin-bottom: 0;">
								<h5 class="title is-5">Languages</h5>
								<alg-multi-datalist name="languages[]" list="{{ $languages->toJson() }}"></alg-multi-datalist>
							</div>
							<div class="column box" style="margin-bottom: 0;">
								<h5 class="title is-5">Classes</h5>
								@foreach($classes as $class)
									<p class="control">
										<label class="checkbox">
											<input type="checkbox" name="classes[]" id="{{ $class->name }}" value="{{ $class->id }}" />
											{{ $class->name }}
										</label>
									</p>
								@endforeach
							</div>				
							<div class="column box" style="margin-bottom: 0;">
								<h5 class="title is-5">Inflection Types</h5>
								@foreach($orders as $order)
									<p class="control">
										<label class="checkbox">
											<input type="checkbox" name="orders[]" id="{{ $order->name }}" value="{{ $order->id }}" />
											{{ $order->name }} Order
										</label>
									</p>
								@endforeach
								<hr>
								<p class="control">
									<label class="checkbox">
										<input type="checkbox" name="includeNegative" id="includeNegative" value="true" />
										Include negative forms
									</label>
								</p>					
								<p class="control">
									<label class="checkbox">
										<input type="checkbox" name="includeDiminutive" id="includeDiminutive" value="true" />
										Include diminutive forms
									</label>
								</p>
							</div>			
							<div class="column box" style="margin-bottom: 0;">
								<h5 class="title is-5">Modes</h5>
								<p class="control">
									<label class="radio">
										<input type="radio" name="modeSelect" id="indicative-only" value="indicativeOnly" selected="selected" />
										Indicative only
									</label>
								</p>					
								<p class="control">
									<label class="radio">
										<input type="radio" name="modeSelect" id="all-modes" value="allModes" />
										All available modes
									</label>
								</p>					
								<p class="control">
									<label class="radio">
										<input type="radio" name="modeSelect" id="mode-select" value="modeSelect" />
										The following modes...
									</label>
								</p>
								<div class="box" style="max-height: 10em; overflow: scroll; overflow-x: auto; padding-top: 0;">
									@foreach($modes as $mode)
										<p class="control">
											<label class="checkbox">
												<input type="checkbox" name="modes[]" id="{{ $mode->name }}" value="{{ $mode->id }}">
												{{ $mode->name }}
											</label>
										</p>
									@endforeach
								</div>
							</div>
						</div>
						<button type="submit" class="button is-success">Search</button>
					</form>
				</alg-tab>				
				<alg-tab name="For a form">
					<form-search-form classes="{{ $classes }}" arguments="{{ $arguments }}" orders="{{ $orders }}" modes="{{ $modes }}" languages="{{ $languages }}"></form-search-form>
				</alg-tab>
			</alg-tabs>
		</div>
		
	</div>

@stop

@section('footer')

<script>
	$(document).ready(function(){
		formUtil.initDatalists();
	});
</script>

@stop