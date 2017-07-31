@extends('layout', ['title' => 'Nominal paradigm search'])

@section('title')
	Nominal paradigm search
@endsection

@section('content')
	@component('components.form', [
		'method' => 'GET',
		'action' => '/nominals/search/paradigm/results',
		'visible' => true
	])
		<alg-nominal-paradigm-search
			inline-template
			v-cloak

			@if (isset($preset['languages']))
				:old-languages="{{ json_encode($preset['languages']) }}"
			@endif
		>
			<div class="columns">
				<div class="column">
					<label class="label">Show me...</label>
					@foreach ($types as $type)
						@include('components.form.checkbox', [
							'name' => 'types[]',
							'label' => $type->name . 's',
							'value' => $type->id,
							'checked' => isset($preset['types']) && in_array($type->id, $preset['types'])
						])
					@endforeach
				</div>
				<div class="column">
					<label class="label">In...</label>
					<alg-multi-datalist
						:list="{{ $languages }}"
						v-model="languages"
						name="languages[]"
					></alg-multi-datalist>
				</div>
			</div>
		</alg-nominal-paradigm-search>
	@endcomponent
@endsection