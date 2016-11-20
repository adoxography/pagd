@extends('layout')

@section('content')

	<div class = 'show'>
		<table>
			<tr>
				<td class = 'label'>{{ $itemName }}</td>
				<td class = 'value'>{{ $item->abv }}</td>
			</tr>
			<tr>
				<td class = 'label'>Full name</td>
				<td class = 'value'>{{ $item->name }}</td>
			</tr>
		</table>
		<form method = 'POST' action = '/{{ $itemLink }}/{{ $item->id }}' class = 'deleteButton'>
			{{ method_field('DELETE') }}
			{{ csrf_field() }}
			<button type='submit'>Delete</button>
		</form>
	</div>

@stop