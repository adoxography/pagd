@extends('layout', ['title' => 'Opening a ticket'])

@section('title')
    <label>Open a ticket</label>
@endsection

@section('content')
	@component('components.form', [
		'method' => 'POST',
		'action' => '/tickets',
		'visible' => true
	])
    	@component('components.form.text', [
    		'name' => 'title',
    		'placeholder' => 'A brief description of the request',
    		'required' => true
    	])
    	    @slot('value')
    	        @if (isset($ticket))
    	        	{{ $ticket->title }}
    	        @endif
    	    @endslot
    	@endcomponent

    	@component('components.form.text', [
    		'name' => 'url',
    		'label' => 'URL',
    		'placeholder' => 'Where to find the issue, if applicable',
    	])
    	    @slot('value')
    	        @if (isset($ticket))
    	        	{{ $ticket->url }}
    	        @endif
    	    @endslot
    	@endcomponent

    	@component('components.form.textarea', [
    		'name' => 'current',
    		'label' => 'Describe the current functionality'
    	])
    	    @slot('value')
    	        @if (isset($ticket))
    	        	{{ $ticket->current }}
    	        @endif
    	    @endslot
    	@endcomponent

    	@component('components.form.textarea', [
    		'name' => 'desired',
    		'label' => 'Describe the desired functionality'
    	])
    	    @slot('value')
    	        @if (isset($ticket))
    	        	{{ $ticket->desired }}
    	        @endif
    	    @endslot
    	@endcomponent

    	@component('components.form.textarea', [
    		'name' => 'comments',
    		'label' => 'Add any additional comments here'
    	])
    	    @slot('value')
    	        @if (isset($ticket))
    	        	{{ $ticket->comments }}
    	        @endif
    	    @endslot
    	@endcomponent

    	@include('components.form.checkbox', [
    		'name' => 'notify',
    		'label' => 'Notify me when the status of this request changes',
    		'checked' => true
    	])

	@endcomponent
@endsection