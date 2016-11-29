@extends('layout')

@section('content')
	<div class = 'show'>
		<h1>{{ $form->surfaceForm }} (<a href = '/languages/{{ $form->language->id }}'>{{ $form->language->name }}</a>) (<a href = '/forms/{{ $form->id }}/edit'>Edit</a>)</h1>
		<table>
			<tr>
				<td class = 'label'>Phonetic Form</td>
				<td class = 'value'>
					@if($form->phoneticForm)
						{{ $form->phoneticForm }}
					@else
						Unknown
					@endif
				</td>
			</tr>
			<tr>
				<td class = 'label'>Morphemes</td>
				<td class = 'value'>
					@foreach($form->morphemes as $morpheme)
						@if($morpheme->name !== 'V')
							<a href = '/morphemes/{{ $morpheme->id }}'>
						@endif
						{{ $morpheme->name }}
						@if($morpheme->name !== 'V')
							</a>
						@endif
					@endforeach
				</td>
			</tr>
			<tr>
				<td class = 'label'>Argument Structure</td>
				<td class = 'value'>
					{{ $form->formType->subject->name }}
					@if($form->formType->primaryObject)
						- {{ $form->formType->primaryObject->name }}
					@endif
					@if($form->formType->secondaryObject)
						+ {{ $form->formType->secondaryObject->name }}
					@endif
				</td>
			</tr>
			<tr>
				<td class = 'label'>Parent</td>
				<td class = 'value'>
					@if($form->parent)
						<a href = '/forms/{{ $form->parent->id }}'>{{ $form->parent->surfaceForm }}</a> (<a href = '/languages/{{ $form->parent->language->id }}'>{{ $form->parent->language->name }}</a>)
					@else
						Unknown
					@endif
				</td>
			<tr>
				<td class = 'label'>Class</td>
				<td class = 'value'>{{ $form->formType->formClass->name }}</td>
			</tr>
			<tr>
				<td class = 'label'>Order</td>
				<td class = 'value'>{{ $form->formType->order->name }}</td>
			</tr>
			<tr>
				<td class = 'label'>Mode</td>
				<td class = 'value'>{{ $form->formType->mode->name }}</td>
			</tr>
			<tr>
				<td class = 'label'>Duplicates</td>
				<td class = 'itemList'>
					@if(count($form->duplicates) > 0)
						@foreach($form->duplicates as $duplicate)
							<ul>
								<li><a href = '/forms/{{ $duplicate->id }}'>{{ $duplicate->formType->subject->name }}</a></li>
							</ul>
						@endforeach
					@else
						None
					@endif
				</td>
			</tr>
			<tr>
				<td class = 'label'>Examples (<a href = '/forms/addExampleTo/{{ $form->id }}'>Add another</a>)</td>
				@if(count($form->examples) > 0)
					<td class = 'itemList'>
						<ul>
							@foreach($form->examples as $example)
								<li><a href = '/examples/{{ $example->id }}'>{{ $example->name }}</a></li>
							@endforeach
						</ul>
					</td>
				@else
					<td class = 'value'>None</td>
				@endif
		</table>
		<form method = 'POST' action = '/forms/{{ $form->id }}' class = 'deleteButton'>
			{{ method_field('DELETE') }}
			{{ csrf_field() }}
			<button type='submit'>Delete</button>
		</form>
	</div>

@stop