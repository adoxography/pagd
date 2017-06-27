@extends('languages/show')

@php
$backnesses = $vowels->pluck('phonemeable')->pluck('backness')->unique()->sortByDesc('id');
$heights    = $vowels->pluck('phonemeable')->pluck('height')->unique()->sortBy('id');

foreach($consonants as $consonant) {

}
@endphp

@section('content')

	<div class="field">
		<span class="label">Vowel inventory</span>
		<table class="table is-narrow is-bordered" style="display: block;">
			<thead>
				<tr>
					<th></th>
					@foreach($backnesses as $backness)
						<th>{{ $backness->name }}</th>
					@endforeach
				</tr>
			</thead>
			<tbody>
				@foreach($heights as $height)
					<tr>
						<th>{{ $height->name }}</th>

						@foreach($backnesses as $backness)
							@php
								$phonemes = $vowels->filter(function($value) use($backness, $height) {
									return $value->phonemeable->backness_id == $backness->id && $value->phonemeable->height_id == $height->id;
								});
							@endphp

							<td>
								@foreach($phonemes as $phoneme)
									{!! $phoneme->renderLink() !!}
								@endforeach
							</td>
						@endforeach
					</tr>
				@endforeach
			</tbody>
		</table>
	</div>
@endsection