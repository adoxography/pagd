@extends('layout', ['title' => 'Add a rule'])

@section('content')
<div class="heading">
	<h1 class="title">Add a Rule</h1>
</div>
<br />

<alg-rule-form method="POST"
			   action="/rules"
			   languages="{{ $languages }}"
			   language="{{ $presetLanguage or '' }}">
</alg-rule-form>
@endsection