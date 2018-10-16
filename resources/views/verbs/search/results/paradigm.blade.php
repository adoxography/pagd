@extends('layout', ['title' => 'Verb paradigm search results'])

@section('title')
	Verb paradigm search results
@endsection

@section('content')
	<alg-paradigm-table morphemes-on="{{ $showMorphology }}" has-morphemes="{{ $hasMorphemes }}" inline-template v-cloak>
		<div class="paradigm-results">
			<nav class="level">
				<div class="level-left">
					<div class="level-item">
						<a class="button" @click="toggleShow" :disabled="!hasMorphemes">Show/Hide Morphology</a>
					</div>
					<div class="level-item">
						<form style="margin: 0;" method="GET" action="/verbs/search/paradigm">
							<input type="hidden" name="preset" value="{{ $params or '' }}">
							<button class="button" type="submit">Refine</button>
						</form>
					</div>
				</div>
			</nav>
			<div class="paradigm-container">
				<table class="table is-bordered">
					{!! $search->renderHeaders() !!}
                    {!! $search->renderBody() !!}
				</table>
			</div>

			<br>
			<p>
				Sources for forms in this paradigm:
                {!! $search->renderSources() !!}
			</p>
		</div>
	</alg-paradigm-table>

@endsection
