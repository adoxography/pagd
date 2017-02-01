@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Log</h1>
	</div>
	<br />

	<div class="box">
		<ul>
			@foreach($log as $entry)
				@if(!($entry['type'] == 'App\Morpheme' && $entry['model']->name == 'V' ))
					<li>
						{{ $entry['revision']->userResponsible()->name }}

						@if($entry['revision']->key == 'created_at')
							@if($entry['type'] == 'App\Language')
								created <a href="/languages/{{ $entry['model']->id }}">{{ $entry['model']->name }}</a>
							@elseif($entry['type'] == 'App\Form')
								added <a href="/forms/{{ $entry['model']->id }}">{{ $entry['model']->uniqueName() }}</a> to {{ $entry['model']->language->name }}
							@elseif($entry['type'] == 'App\Morpheme')
								added <a href="/morphemes/{{ $entry['model']->id }}">{{ $entry['model']->uniqueName() }}</a> to {{ $entry['model']->language->name }}
							@endif

							at {{ $entry['revision']->newValue() }}
						@else
							updated the {{ $entry['revision']->key }} field of 

							@if($entry['type'] == 'App\Language')
								<a href="/languages/{{ $entry['model']->id }}">{{ $entry['model']->name }}</a>
							@elseif($entry['type'] == 'App\Form' || $entry['type'] == 'App\Morpheme')
								<a href="/forms/{{ $entry['model']->id }}">{{ $entry['model']->uniqueNameWithLanguage() }}</a>
							@endif

							from {{ $entry['revision']->old_value }} to {{ $entry['revision']->new_value }} at {{ $entry['revision']->updated_at }}
						@endif
					</li>
				@endif
			@endforeach
		</ul>
	</div>
@endsection