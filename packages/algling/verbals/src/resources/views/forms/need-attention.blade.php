@extends('layout', ['title' => 'Data that need attention'])

@section('content')

<div class="heading">
	<h1 class="title">Data that need attention</h1>
</div>
<br />

<alg-tabs class="box">
	@foreach($languages as $language)
		@if(count($language->forms) > 0 || count($language->examples) > 0)
			<alg-tab name="{{ $language->name }}" {{ $loop->first ? "selected='true'" : '' }}>
				<div class="columns">
					<div class="column is-half">
						@if(count($language->forms) > 0)
							<h4 class="title is-4">Forms</h4>
						@endif
						@foreach($language->forms as $form)
							{!! $form->renderInNotes() !!}
						@endforeach
					</div>

					<div class="column is-half">
						@if(count($language->examples) > 0)
							<h4 class="title is-4">Examples</h4>
						@endif
						@foreach($language->examples as $example)
							{!! $example->renderInNotes() !!}
						@endforeach
					</div>
				</div>
			</alg-tab>
		@endif
	@endforeach
</alg-tabs>

@endsection