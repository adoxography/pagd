@if(session()->has('flashMessage'))
	<div class="notification {{ session()->get('flashLevel') }}">
		<button class="delete"></button>
		{!! session()->get('flashMessage') !!}
	</div>
@endif