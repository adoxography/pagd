@extends('layout')

@section('title')
	<label>User profile:</label>
	{{ $user->name }}
@endsection

@section('content')
	<div class="field">
		<span class="is-one-line">
			<span class="label">User type:</span>
			{{ $user->type->name }}
		</span>

		<span class="is-one-line">
			<span class="label">Last login:</span>
			{{ $user->lastLogin }}
		</span>
	</div>

	<div class="field">
		<span class="label">Contributions</span>
		<span class="is-one-line">
			Forms created:
			{{ $user->creations()->ofType('verbForms')->count() + $user->creations()->ofType('nominalForms')->count() }}
		</span>

		<span class="is-one-line">
			Examples created:
			{{ $user->creations()->ofType('examples')->count() }}
		</span>

		<span class="is-one-line">
			Morphemes created:
			{{ $user->creations()->ofType('morphemes')->count() }}
		</span>
	</div>
@endsection