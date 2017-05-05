@extends('languages/show')

@section('model-content')

@if($language->alternateNames)
<span class="is-one-line">
	<label class="label">Also known as:</label>
	{{ $language->alternateNames }}
</span>
@endif

@if($language->parent)
<span class="is-one-line">
	<label class="label">Parent:</label>
	<a href="{{ $language->parent_id }}">{{ $language->parent->name }}</a>
</span>
@endif

<span class="is-one-line">
	<label class="label">Group:</label>
	<a href="{{ $language->group_id }}">{{ $language->group->name }}</a>
</span>

<span class="is-one-line">
	<label class="label">Algonquianist code:</label>
	{{ $language->algoCode }}
</span>

<span class="is-one-line">
	<label class="label">ISO:</label>
	{{ $language->iso or 'none' }}
</span>

@if($language->description)
<br />
<label class="label">Description</label>
<p>{{ $language->description }}</p>
@endif

@endsection