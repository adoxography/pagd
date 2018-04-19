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
        <div class="field">
            <label class="label">Type</label>
            <div class="control">
                <div class="select">
                    <select name="ticketType_id">
                        @foreach ($types as $type)
                            <option value="{{ $type->id }}" @if($type->description) title="{{ $type->description }}" @endif>
                                {{ $type->name }}
                            </option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>

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
    		'name' => 'etc',
    		'label' => 'Add any additional comments here'
    	])
    	    @slot('value')
    	        @if (isset($ticket))
    	        	{{ $ticket->comments }}
    	        @endif
    	    @endslot
    	@endcomponent

        @include('components.form.checkbox', [
            'name' => 'isUrgent',
            'label' => 'This ticket is urgent',
            'checked' => false
        ])

    	@include('components.form.checkbox', [
    		'name' => 'notify',
    		'label' => 'Notify me when updates are made to this ticket',
    		'checked' => true
    	])

	@endcomponent
@endsection
