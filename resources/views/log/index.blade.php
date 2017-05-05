@extends('layout', ['title' => 'Activity log'])

@section('title')
<p class="card-header-title">
	Activity log
</p>
@endsection

@section('content')

	<div class="card-content">
		<ul>
			@foreach($log as $entry)
				<li>
					{{ $entry['revision']->userResponsible() ? $entry['revision']->userResponsible()->name : 'Anonymous' }}

					@if($entry['revision']->key == 'created_at')
						@if($entry['model'] instanceof \App\Language)
							created <a href="/languages/{{ $entry['model']->id }}">{{ $entry['model']->name }}</a>
						@elseif($entry['model'] instanceof Algling\Verbals\Models\Form)
							added <a href="/forms/{{ $entry['model']->id }}">{!! $entry['model']->uniqueName() !!}</a> to {{ $entry['model']->language->name }}
						@elseif($entry['model'] instanceof Algling\Morphemes\Models\Morpheme)
							added <a href="/morphemes/{{ $entry['model']->id }}">{!! $entry['model']->uniqueName() !!}</a> to {{ $entry['model']->language->name }}			
						@elseif($entry['model'] instanceof Algling\Words\Models\Example)
							added <a href="/examples/{{ $entry['model']->id }}">{{ $entry['model']->uniqueName() }}</a> to {{ $entry['model']->language->name }}
						@endif

						at {{ $entry['revision']->newValue() }}
					@else
						updated the {{ $entry['revision']->fieldName() }} field of 

						@if($entry['model'] instanceof App\Language)
							<a href="/languages/{{ $entry['model']->id }}">{{ $entry['model']->name }}</a>
						@elseif($entry['model'] instanceof Algling\Verbals\Models\Form)
							<a href="/forms/{{ $entry['model']->id }}">{!! $entry['model']->uniqueNameWithLanguage() !!}</a>
						@elseif($entry['model'] instanceof Algling\Morphemes\Models\Morpheme)
							<a href="/morphemes/{{ $entry['model']->id }}">{{ $entry['model']->uniqueNameWithLanguage() }}</a>
						@elseif($entry['model'] instanceof Algling\Words\Models\Example)
							<a href="/examples/{{ $entry['model']->id }}">{{ $entry['model']->uniqueNameWithLanguage() }}</a>
						@endif

						{{-- from <strong>{{ $entry['revision']->oldValue() }}</strong> to <strong>{{ $entry['revision']->newValue() }}</strong> --}}

						at {{ $entry['revision']->updated_at }}
					@endif
				</li>
			@endforeach
		</ul>
	</div>
@endsection