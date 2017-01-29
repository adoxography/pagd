@extends('layout', ['title' => 'Search the database'])

@section('content')
	<div id="root">
		<div class="heading">
			<h1 class="title">Search</h1>
		</div>
		<br />

		<div class="box">
			<alg-tabs>
				<alg-tab name="For a paradigm" selected="true">
					<form method="GET" action="/search/paradigm" class="paradigm-search-form">
						<div class="columns">

							<div class="column box is-1" style="margin-bottom: 0;">
								<h5 class="title is-5">Class</h5>
								@foreach($classes as $class)
									<p class="control">
										<label class="checkbox">
											<input type="checkbox" name="classes[]" id="{{ $class->name }}" value="{{ $class->id }}" />
											{{ $class->name }}
										</label>
									</p>
								@endforeach
							</div>

							<div class="column box is-2" style="margin-bottom: 0;">
								<h5 class="title is-5">Order</h5>
								@foreach($orders as $order)
									<p class="control">
										<label class="checkbox">
											<input type="checkbox" name="orders[]" id="{{ $order->name }}" value="{{ $order->id }}" />
											{{ $order->name }}
										</label>
									</p>
								@endforeach
							</div>

							<div class="column box is-3" style="margin-bottom: 0;">
								<h5 class="title is-5">Mode</h5>
								<p class="control">
									<label class="radio">
										<input type="radio" name="modeSelect" id="indicative-only" value="indicativeOnly" checked="checked" />
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

							<div class="column box is-2" style="margin-bottom: 0;">
								<h5 class="title is-5">Other features</h5>
								<p class="control">
									<label class="affirmative">
										<input type="checkbox" name="affirmative" id="affirmative" value="true" checked="checked" />
										Affirmative
									</label>
								</p>
								<p class="control">
									<label class="checkbox">
										<input type="checkbox" name="negative" id="negative" value="true" />
										Negative
									</label>
								</p>					
								<p class="control">
									<label class="checkbox">
										<input type="checkbox" name="diminutive" id="diminutive" value="true" />
										Diminutive
									</label>
								</p>
							</div>

							<div class="column box" style="margin-bottom: 0;">
								<h5 class="title is-5">Language</h5>
								<alg-multi-datalist name="languages[]" list="{{ $languages->toJson() }}"></alg-multi-datalist>
							</div>

						</div>
						<button type="submit" class="button is-success">Search</button>
					</form>
				</alg-tab>				
				<alg-tab name="For a form">
					@component('components.form', ['method' => 'GET', 'url' => '/search/form', 'class' => 'form-search-form'])
						<div class="columns">
							<div class="column is-one-quarter">
								<alg-radio-toggle languages="{{ $languages }}"></alg-radio-toggle>
							</div>
							<div class="column">
								<alg-form-search arguments="{{ $arguments }}" classes="{{ $classes }}" modes="{{ $modes }}" orders="{{ $orders }}"></alg-form-search>
							</div>
						</div>
						<div class="level">
							<div class="level-left">
								<div class="level-item">
									<button type="submit" class="button is-success">Search</button>
								</div>
							</div>
						</div>
					@endcomponent
				</alg-tab>
			</alg-tabs>
		</div>
		
		</div>

@stop