@extends('layout', ['title' => 'Data that need attention'])

@section('title')
    Data that need attention
@endsection

@section('content')
<alg-tabs class="box">
	@foreach($languages as $language)
		@if(count($language->verbForms) > 0 || count($language->examples) > 0)
			<alg-tab name="{{ $language->name }}" {{ $loop->first ? "selected='true'" : '' }}>
				<div class="columns">
					<div class="column is-half">
						@if(count($language->verbForms) > 0)
							<h4 class="title is-4">Forms</h4>
						@endif
						@foreach($language->verbForms as $form)
							{!! $form->present('stub') !!}
						@endforeach
					</div>

					<div class="column is-half">
						@if(count($language->examples) > 0)
							<h4 class="title is-4">Examples</h4>
						@endif
						@foreach($language->examples as $example)
							{!! $example->present('stub') !!}
						@endforeach
					</div>
				</div>
			</alg-tab>
		@endif
	@endforeach
</alg-tabs>

@endsection
