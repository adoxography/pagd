@extends('layout', ['title' => 'Add a variable'])

@section('content')

<div class="heading">
	<h1 class="title">Add a Variable</h1>
</div>
<br />

<alg-variable-form method="POST" action="/variables" types="{{ $types }}" values="{{ $values }}"></alg-variable-form>

@endsection