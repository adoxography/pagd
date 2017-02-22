@if($text && strlen($text) > 0)
	@component('components.model.field', ['width' => $width, 'label' => (isset($label) ? $label : null)])
		<div class="box markdown">
			<vue-markdown>{{ $text }}</vue-markdown>
		</div>
	@endcomponent
@endif