@if(session()->has('flashMessage'))
	<alg-notification level="{{ session()->get('flashLevel') }}">
		{{ session()->get('flashMessage') }}
	</alg-notification>
@endif