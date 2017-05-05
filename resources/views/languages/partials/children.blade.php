@extends('languages/show')

@section('model-content')

@if(count($language->children) > 0)
<ul>
@foreach($language->children as $child)
	<li>{{ $child->name }}</li>
@endforeach
</ul>
@else
None
@endif

@endsection