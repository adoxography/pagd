@if(session()->has('flashMessage'))
	<div class="notification {{ session()->get('flashLevel') }}" v-show="showFlash" style="margin-bottom: 0;">
		<button class="delete" @click="showFlash = false"></button>
		{!! session()->get('flashMessage') !!}
	</div>
@endif