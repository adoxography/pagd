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
					<a href="/languages/{{ $language->parent_id }}">{{ $language->parent->name }}</a>
				</span>
			@endif

			<span class="is-one-line">
				<label class="label">Group:</label>
				<a href="/groups/{{ $language->group_id }}">{{ $language->group->name }}</a>
			</span>

			<span class="is-one-line">
				<label class="label">Algonquianist code:</label>
				{{ $language->algoCode }}
			</span>

			<span class="is-one-line">
				<label class="label">ISO:</label>
				{{ $language->iso or 'none' }}
			</span>
			</div>

			@if($language->children->count() > 0)
			<div class="field">
				<span class="label">
					Children @include('components.model.add-icon', ['uri' => "/languages/{$language->id}/addChild"])
				</span>

				<ul>
					@foreach($language->children as $child)
						<li>{!! $child->renderHTML() !!}</li>
					@endforeach
				</ul>
			</div>
			@endif
		</div>

	@if($language->description)
		<br />
		<label class="label">Description</label>
		{!! replaceTags($language->description, $language->id) !!}
	@endif
@endsection