@if(session()->has('flashMessage'))
	<div class = 'alert--{{ session()->get('flashLevel') }}'>
		{{ session()->get('flashMessage') }}
	</div>
@endif