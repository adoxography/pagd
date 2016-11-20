@extends('layout')

@section('content')

	<div class = 'show'>
		<h1>{{ $morpheme->name }} (<a href='/languages/{{ $morpheme->language->id }}'>{{ $morpheme->language->name}}</a>) (<a href = '/morphemes/{{ $morpheme->id }}/edit'>Edit</a>)</h1>
		<table>
			<tr>
				<td class = 'label'>Gloss</td>
				<td class = 'value'><a href = '/glosses/{{ $morpheme->gloss->id }}'>{{ $morpheme->gloss->abv }}</a></td>
			</tr>
			<tr>
				<td class = 'label'>Slot</td>
				<td class = 'value'><a href = '/slots/{{ $morpheme->slot->id }}'>{{ $morpheme->slot->abv }}</a></td>
			</tr>
			<tr>
				<td class = 'label'>Parent</td>
				<td class = 'value'>
					@if($morpheme->parent)
						<a href = '/morphemes/{{ $morpheme->parent->id }}'>{{ $morpheme->parent->name }}</a>
					@else
						Unknown
					@endif
				</td>
			</tr>
			<tr>
				<td class = 'label'>Found in</td>
				@if(count($morpheme->forms) > 0)
					<td class = 'itemList'>
						<ul>
							@foreach($morpheme->forms as $form)
								<li><a href = '/forms/{{ $form->id }}'>{{ $form->surfaceForm }}</a></li>
							@endforeach
						</ul>
					</td>
				@else
					<td class = 'value'>None</td>
				@endif
			</tr>
		</table>
		<form method = 'POST' action = '/morphemes/{{ $morpheme->id }}' class = 'deleteButton'>
			{{ method_field('DELETE') }}
			{{ csrf_field() }}
			<button type='submit'>Delete</button>
		</form>
	</div>

@stop