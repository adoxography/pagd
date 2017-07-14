@extends('layout', ['title' => 'Audio index'])

@section('title')
	Audio index
@endsection

@section('content')
	<table class="table">
		<thead>
			<tr>
				<th>Language</th>
				<th>Clip name</th>
				<th>Clip</th>
			</tr>
		</thead>
		<tbody>
			@foreach ($audios as $audio)
				<tr>
					<td>
						{!! $audio->language->present('link') !!}
					</td>
					<td>
						{!! $audio->present('link') !!}
					</td>
					<td>
						{!! $audio->present('player') !!}
					</td>
				</tr>
			@endforeach
		</tbody>
	</table>
@endsection