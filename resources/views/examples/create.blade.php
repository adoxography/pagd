@extends('layout')

@section('content')

	{{ Form::open(['url' => '/examples', 'method' => 'post', 'class' => 'inputForm']) }}
		<fieldset>
			{{ Form::label('form','Form') }}
			{{ Form::text('form', $form->surfaceForm) }}
			{{ Form::hidden('form_id', $form->id) }}
			{{ Form::label('name','Example') }}
			{{ Form::text('name') }}
			{{ Form::label('translation', 'Translation') }}
			{{ Form::text('translation') }}
		</fieldset>
		<fieldset>
			{{ Form::label('comments','Comments') }}
			{{ Form::textarea('comments') }}
		</fieldset>
		<fieldset>
			{{ Form::submit('Submit') }}
		</fieldset>
	{{ Form::close() }}

@stop