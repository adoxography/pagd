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
						<a class="button" @click="toggleShow" :disabled="!hasMorphemes">
                            <span v-if="show">
                                Hide Morphology
                            </span>
                            <span v-else>
                                Show Morphology
                            </span>
                        </a>
					</div>
					<div class="level-item">
						<form style="margin: 0;" method="GET" action="/verbs/search/paradigm">
							<input type="hidden" name="preset" value="{{ $params ?: '' }}">
							<button class="button" type="submit">Refine</button>
						</form>
					</div>
				</div>
			</nav>

            <div v-bar>
			<div class="paradigm-container">
				<table class="paradigm table" ref="table">
					{!! $search->renderHeaders() !!}
                    {!! $search->renderBody() !!}
				</table>
			</div>
            </div>

			<br>
			<p>
				Sources for forms in this paradigm:
                {!! $search->renderSources() !!}
			</p>
		</div>
	</alg-paradigm-table>
@endsection

