@extends('layout', ['title' => 'Bookmarks'])

@section('title')
	Bookmarks
@endsection

@section('content')
	@if(count($user->bookmarks(App\Models\Language::class)) > 0)
		<h4 class="subtitle is-4">Languages</h4>
		<ul>
			@foreach($user->bookmarks(App\Models\Language::class) as $language)
				<li>
					{!! $language->present('link') !!}
					@if($language->pivot->comment)
						<div style="margin-left: 2rem">{!! $language->pivot->comment !!}</div>
					@endif
				</li>
			@endforeach
		</ul>
		<br />
	@endif

	@if(count($user->bookmarks(App\Models\Verbs\Form::class)) > 0)
		<h4 class="subtitle is-4">Forms</h4>
		<ul>
			@foreach($user->bookmarks(App\Models\Verbs\Form::class) as $form)
				<li>
					{!! $form->present()->as('unique', 'link')->then('language') !!}
					@if($form->pivot->comment)
						<div style="margin-left: 2rem">{!! $form->pivot->comment !!}</div>
					@endif
				</li>
			@endforeach
		</ul>
		<br />
	@endif

	@if(count($user->bookmarks(App\Models\Words\Example::class)) > 0)
		<h4 class="subtitle is-4">Examples</h4>
		<ul>
			@foreach($user->bookmarks(App\Models\Words\Example::class) as $example)
				<li>
					{!! $example->present()->as('unique', 'link')->then('language') !!}
					@if($example->pivot->comment)
						<div style="margin-left: 2rem">{!! $example->pivot->comment !!}</div>
					@endif
				</li>
			@endforeach
		</ul>
		<br />
	@endif

	@if(count($user->bookmarks(App\Models\Morphology\Morpheme::class)) > 0)
		<h4 class="subtitle is-4">Morphemes</h4>
		<ul>
			@foreach($user->bookmarks(App\Models\Morphology\Morpheme::class) as $morpheme)
				<li>
					{!! $morpheme->present()->as('unique', 'link')->then('language') !!}
					@if($morpheme->pivot->comment)
						<div style="margin-left: 2rem">{!! $morpheme->pivot->comment !!}</div>
					@endif
				</li>
			@endforeach
		</ul>
		<br />
	@endif

	@if(count($user->bookmarks(App\Models\Source::class)) > 0)
		<h4 class="subtitle is-4">Sources</h4>
		<ul>
			@foreach($user->bookmarks(App\Models\Source::class) as $source)
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

	@if(count($user->bookmarks(App\Models\Rules\Rule::class)) > 0)
		<h4 class="subtitle is-4">Rules</h4>
		<ul>
			@foreach($user->bookmarks(App\Models\Rules\Rule::class) as $rule)
				<li>
					<a href="/sources/{{ $rule->id }}">{{ $rule->name }}</a>
					@if($rule->pivot->comment)
						<div style="margin-left: 2rem">{!! $rule->pivot->comment !!}</div>
					@endif
				</li>
			@endforeach
		</ul>
		<br />
	@endif

	@if(count($user->bookmarks(App\Models\Morphology\Slot::class)) > 0)
		<h4 class="subtitle is-4">Slots</h4>
		<ul>
			@foreach($user->bookmarks(App\Models\Morphology\Slot::class) as $slot)
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

	@if(count($user->bookmarks(App\Models\Morphology\Gloss::class)) > 0)
		<h4 class="subtitle is-4">Glosses</h4>
		<ul>
			@foreach($user->bookmarks(App\Models\Morphology\Gloss::class) as $gloss)
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
@endsection
