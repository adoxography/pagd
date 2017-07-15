@extends('layout')

@section('content')
	@component('components.form', ['method' => 'GET', 'action' => '/search/smart/results', 'visible' => true])
	    <div class="field">
	    	<label class="label">Search</label>
	    	<p class="control">
	    		<input type="text" class="input" name="lookup" />
	    	</p>
	    </div>
	@endcomponent
@endsection