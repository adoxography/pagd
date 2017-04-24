@if(session()->has('flashMessage'))
	<div class="notification {{ session()->get('flashLevel') }}" v-show="showFlash">
		<button class="delete" @click="showFlash = false"></button>
		{!! session()->get('flashMessage') !!}
	</div>
@endif