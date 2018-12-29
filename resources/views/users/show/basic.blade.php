@extends('users.show')

@section('details')
	<div class="field">
		<span class="is-one-line">
			<span class="label">User type:</span>
			{{ ucfirst($user->roles()->first()->name) }}
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

		<span class="is-one-line">
			Phonemes created:
			{{ $user->creations()->ofType('phonemes')->count() }}
		</span>
	</div>
@endsection
