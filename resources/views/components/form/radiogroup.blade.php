@foreach($list as $item)
	{{-- {{ dd($checked) }} --}}
	@component('components.form.radio', ['name' => $name, 'value' => $item['value'], 'label' => $item['label']])
		@if($checked == $item['value'])
			@slot('checked')
				true
			@endslot
		@endif
	@endcomponent
@endforeach