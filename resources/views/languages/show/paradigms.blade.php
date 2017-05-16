@extends('languages/show')

@section('content')
	<div class="columns">
		<div class="column">
			<div class="field">
				<span class="label">Verb paradigms</span>
				<ul>
					@foreach($language->verbParadigms as $title => $paradigmSet)
						<li>
							{{ $title }}
							@foreach($paradigmSet as $paradigm)
								<a href="/verbs/search/paradigm/results?classes%5B%5D={{ $paradigm['class']->id }}&orders%5B%5D={{ $paradigm['order']->id }}&modeSelect=selectModes&modes%5B%5D={{ $paradigm['mode']->id }}&languages%5B%5D={{ $language->name }}&languages%5B%5D_id={{ $language->id }}">
									{{ $paradigm['class']->name }}
								</a>
							@endforeach
						</li>
					@endforeach
				</ul>
			</div>
		</div>
		<div class="column">
			<div class="field">
				<span class="label">Nominal paradigms</span>
				<ul>
					@foreach($language->nominalParadigms as $paradigm)
						<li>
							<a href="/nominals/paradigms/{{ $paradigm->id }}">{{ $paradigm->name }}</a>
						</li>
					@endforeach
				</ul>
			</div>
		</div>
	</div>
@endsection