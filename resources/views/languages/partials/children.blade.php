@extends('languages/new-show')

@section('model-content')
	
<ul>
@foreach($language->children as $child)
	<li>{{ $child->name }}</li>
@endforeach
</ul>

@endsection