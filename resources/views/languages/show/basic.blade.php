@extends('languages/show')

@section('content')
	<div class="columns">
		<div class="column">
			<div class="field">
			@if($language->alternateNames)
				<span class="is-one-line">
					<label class="label">Also known as:</label>
					{{ $language->alternateNames }}
				</span>
			@endif

			@if($language->parent)
				<span class="is-one-line">
					<label class="label">Parent:</label>
					{!! $language->parent->present('link') !!}
				</span>
			@endif

			<span class="is-one-line">
				<label class="label">Group:</label>
				{!! $language->group->present('link') !!}
			</span>

			<span class="is-one-line">
				<label class="label">Algonquianist code:</label>
				{{ $language->algoCode }}
			</span>

			<span class="is-one-line">
				<label class="label">ISO:</label>
				{{ $language->iso ?? 'none' }}
			</span>
			</div>

			@if($language->children->count() > 0)
			<div class="field">
				<span class="label">
					Children @include('components.model.add-icon', ['uri' => "/languages/{$language->id}/addChild"])
				</span>

				<ul>
					@foreach($language->children as $child)
						<li>{!! $child->present('link') !!}</li>
					@endforeach
				</ul>
			</div>
			@endif
		</div>

		<div class="column">
			@if($language->notes)
				<div class="field">
					<label class="label">Description</label>
					{!! replaceTags($language->notes, $language->id) !!}
				</div>
			@endif
		</div>
	</div>

	@if($language->location)
		<div class="field">
			<span class="label">Location</span>
			<em>(centre of the area in which the language has most recently been spoken)</em>
			<alg-map :markers="{{ $language->toJson() }}"></alg-map>
		</div>
	@endif
@endsection
