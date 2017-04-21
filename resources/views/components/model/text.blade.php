@if($text && strlen($text) > 0)
	@component('components.model.field', ['width' => $width, 'label' => (isset($label) ? $label : null)])
		<div class="box markdown">
			@if(isset($language_id))
				{!! replaceTags($text, $language_id) !!}
			@else
				{!! $text !!}
			@endif
		</div>
	@endcomponent
@endif