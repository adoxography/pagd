<tr>

<?php $first = array_first($list); ?>
@if($first === null)
{{ dd('hello') }}
@foreach($list as $key => $nulls)
	<td>{{ $key }}</td>
@endforeach
@else
@foreach($list as $key => $subData)
	<td colspan="{{ count($subData) }}">{{ $key }}</td>
@endforeach
	</tr><tr>
@endif

</tr>