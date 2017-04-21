@extends('layout', ['title' => 'Edit a variable'])

@section('content')

<div class="heading">
	<h1 class="title">Edit a Variable</h1>
</div>
<br />

<alg-variable-form
	method="PATCH"
	action="/variables/{{ $variable->id }}"
	types="{{ $types }}"
	values="{{ $values }}"
	variable="{{ $variable or '' }}">
</alg-variable-form>

@endsection