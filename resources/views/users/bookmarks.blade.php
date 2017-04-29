@extends('layout', ['title' => 'Bookmarks'])

@section('content')

<div class="heading">
	<h1 class="title">Bookmarks</h1>
</div>
<br />

<div class="box">
	@if(count($user->bookmarks(App\Language::class)) > 0)
		<h4 class="subtitle is-4">Languages</h4>
		<ul>
			@foreach($user->bookmarks(App\Language::class) as $language)
				<li>
					<a href="/languages/{{ $language->id }}">{{ $language->name }}</a>
					@if($language->pivot->comment)
						<div style="margin-left: 2rem">{!! $language->pivot->comment !!}</div>
					@endif
				</li>
			@endforeach
		</ul>
		<br />
	@endif

	@if(count($user->bookmarks(Algling\Verbals\Models\Form::class)) > 0)
		<h4 class="subtitle is-4">Forms</h4>
		<ul>
			@foreach($user->bookmarks(Algling\Verbals\Models\Form::class) as $form)
				<li>
					<a href="/forms/{{ $form->id }}">{!! $form->uniqueNameWithLanguage !!}</a>
					@if($form->pivot->comment)
						<div style="margin-left: 2rem">{!! $form->pivot->comment !!}</div>
					@endif
				</li>
			@endforeach
		</ul>
		<br />
	@endif

	@if(count($user->bookmarks(Algling\Words\Models\Example::class)) > 0)
		<h4 class="subtitle is-4">Examples</h4>
		<ul>
			@foreach($user->bookmarks(Algling\Words\Models\Example::class) as $example)
				<li>
					<a href="/examples/{{ $example->id }}">{{ $example->uniqueNameWithLanguage }}</a>
					@if($example->pivot->comment)
						<div style="margin-left: 2rem">{!! $example->pivot->comment !!}</div>
					@endif
				</li>
			@endforeach
		</ul>
		<br />
	@endif

	@if(count($user->bookmarks(Algling\Morphemes\Models\Morpheme::class)) > 0)
		<h4 class="subtitle is-4">Morphemes</h4>
		<ul>
			@foreach($user->bookmarks(Algling\Morphemes\Models\Morpheme::class) as $morpheme)
				<li>
					<a href="/morphemes/{{ $morpheme->id }}">{{ $morpheme->uniqueNameWithLanguage }}</a>
					@if($morpheme->pivot->comment)
						<div style="margin-left: 2rem">{!! $morpheme->pivot->comment !!}</div>
					@endif
				</li>
			@endforeach
		</ul>
		<br />
	@endif

	@if(count($user->bookmarks(App\Source::class)) > 0)
		<h4 class="subtitle is-4">Sources</h4>
		<ul>
			@foreach($user->bookmarks(App\Source::class) as $source)
				<li>
					<a href="/sources/{{ $source->id }}">{{ $source->short }}</a>
					@if($source->pivot->comment)
						<div style="margin-left: 2rem">{!! $source->pivot->comment !!}</div>
					@endif
				</li>
			@endforeach
		</ul>
		<br />
	@endif

	@if(count($user->bookmarks(Algling\Morphemes\Models\Slot::class)) > 0)
		<h4 class="subtitle is-4">Slots</h4>
		<ul>
			@foreach($user->bookmarks(Algling\Morphemes\Models\Slot::class) as $slot)
				<li>
					<a href="/slots/{{ $slot->id }}">{{ $slot->abv }}</a>
					@if($slot->pivot->comment)
						<div style="margin-left: 2rem">{!! $slot->pivot->comment !!}</div>
					@endif
				</li>
			@endforeach
		</ul>
		<br />
	@endif

	@if(count($user->bookmarks(Algling\Morphemes\Models\Gloss::class)) > 0)
		<h4 class="subtitle is-4">Glosses</h4>
		<ul>
			@foreach($user->bookmarks(Algling\Morphemes\Models\Gloss::class) as $gloss)
				<li>
					<a href="/glosses/{{ $gloss->id }}">{{ $gloss->abv }}</a>
					@if($gloss->pivot->comment)
						<div style="margin-left: 2rem">{!! $gloss->pivot->comment !!}</div>
					@endif
				</li>
			@endforeach
		</ul>
		<br />
	@endif
</div>

@endsection