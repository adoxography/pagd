@extends('languages/show')

@section('content')
	<ul>
		@foreach($language->paradigms as $title => $paradigmSet)
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
@endsection