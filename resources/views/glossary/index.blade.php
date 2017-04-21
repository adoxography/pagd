@extends('layout', ['title' => 'Glossary'])

@section('content')
	<div class="heading">
		<h1 class="title">Glossary</h1>
	</div>
	<br />

	<div class="box">
		<ul>
			<li><a href="/glosses">Glosses</a></li>
			<li><a href="/slots">Slots</a></li>
			<li><a href="/sources">Sources</a></li>
			<li><a href="/variables">Variables</a></li>
			{{-- <li><a href = '/glossary/groups'>Groups</a></li> --}}
			{{-- <li><a href = '/glossary/classes'>Classes</a></li> --}}
			{{-- <li><a href = '/glossary/glosses'>Glosses</a></li> --}}
			{{-- <li><a href = '/glossary/modes'>Modes</a></li> --}}
			{{-- <li><a href = '/glossary/orders'>Orders</a></li> --}}
			{{-- <li><a href = '/glossary/tenses'>Tenses</a></li> --}}
			{{-- <li><a href = '/glossary/slots'>Slots</a></li> --}}
		</ul>
	</div>

@stop