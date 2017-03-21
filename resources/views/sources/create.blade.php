@extends('layout', ['title' => 'Add a source'])

@section('content')

<div class="heading">
	<h1 class="title">Add a Source</h1>
</div>
<br />

<alg-source-form method="POST" action="/sources"></alg-source-form>

@stop