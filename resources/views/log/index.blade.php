@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Log</h1>
	</div>
	<br />

	<div class="box">
		<ul>
			@foreach($log as $entry)
				<li>
					{{ $entry['revision']->userResponsible() ? $entry['revision']->userResponsible()->name : 'Anonymous' }}

					@if($entry['revision']->key == 'created_at')
						@if($entry['model'] instanceof \App\Language)
							created <a href="/languages/{{ $entry['model']->id }}">{{ $entry['model']->name }}</a>
						@elseif($entry['model'] instanceof \App\Form)
							added <a href="/forms/{{ $entry['model']->id }}">{{ $entry['model']->uniqueName() }}</a> to {{ $entry['model']->language->name }}
						@elseif($entry['model'] instanceof \App\Morpheme)
							added <a href="/morphemes/{{ $entry['model']->id }}">{{ $entry['model']->uniqueName() }}</a> to {{ $entry['model']->language->name }}
						@endif

						at {{ $entry['revision']->newValue() }}
					@else
						updated the {{ $entry['revision']->fieldName() }} field of 

						@if($entry['model'] instanceof App\Language)
							<a href="/languages/{{ $entry['model']->id }}">{{ $entry['model']->name }}</a>
						@elseif($entry['model'] instanceof \App\Form)
							<a href="/forms/{{ $entry['model']->id }}">{{ $entry['model']->uniqueNameWithLanguage() }}</a>
						@elseif($entry['model'] instanceof App\Morpheme)
							<a href="/morphemes/{{ $entry['model']->id }}">{{ $entry['model']->uniqueNameWithLanguage() }}</a>
						@endif

						at {{ $entry['revision']->updated_at }}
					@endif
				</li>
			@endforeach
		</ul>
	</div>
@endsection