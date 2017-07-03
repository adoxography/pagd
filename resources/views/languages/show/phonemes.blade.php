@extends('languages/show')

@section('content')

	<div class="field">
		<span class="label">Vowel inventory</span>

		<table class="table is-narrow is-bordered" style="display: block;">
			@if($vowels->count() > 0)
				<thead>
					<tr>
						<th></th>
						@foreach($features['backnesses'] as $backness)
							<th>{{ $backness->name }}</th>
						@endforeach
					</tr>
				</thead>
				<tbody>
					@foreach($features['heights'] as $height)
						<tr>
							<th>{{ $height->name }}</th>

							@foreach($features['backnesses'] as $backness)
								@php
									$phonemes = $vowels->filter(function($value) use($backness, $height) {
										return $value->phonemeable->backness_id == $backness->id && $value->phonemeable->height_id == $height->id;
									})->sortBy(function($value) {
										return strlen($value->name);
									});
								@endphp

								<td>
									@foreach($phonemes as $phoneme)
										@php
											$link = $phoneme->present('link');

											if($phoneme->isMarginal) {
												$link = "($link)";
											}
										@endphp
										{!! $link !!}
									@endforeach
								</td>
							@endforeach
						</tr>
					@endforeach
				</tbody>
			@else
				<tbody><tr><td>No data</td></tr></tbody>
			@endif
			@if(Auth::user() && Auth::user()->permissions->canEdit)
				<tfoot>
					<tr>
						<td colspan="100%" style="border: none;">
							<a href="/languages/{{ $language->id }}/addPhoneme?type=vowel">Add another</a>
						</td>
					</tr>
				</tfoot>
			@endif
		</table>
	</div>

	<div class="field">
		<span class="label">Consonant inventory</span>

		<table class="table is-narrow is-bordered" style="display: block;">
			@if($consonants->count() > 0)
				<thead>
					<tr>
						<th></th>
						@foreach($features['places'] as $place)
							<th>{{ $place->name }}</th>
						@endforeach
					</tr>
				</thead>
				<tbody>
					@foreach($features['manners'] as $manner)
						@foreach($features['voicings'] as $voicing)
							@php
								$row = $consonants->filter(function($value) use ($manner, $voicing) {
									$rc = $value->phonemeable->manner_id == $manner->id;

									if($voicing) {
										$rc = $rc && $value->phonemeable->voicing_id == $voicing->id;
									} else {
										$rc = $rc && $value->phonemeable->voicing_id == null;
									}

									return $rc;
								});
							@endphp

							@if($row->count() > 0)
								<tr>
									<th>
										{{ $voicing ? $voicing->name : '' }}
										{{ $manner->name }}
									</th>

									@foreach($features['places'] as $place)
										@php
											$phonemes = $row->filter(function($value) use ($place) {
												return $value->phonemeable->place_id == $place->id;
											})->sortBy(function($value) {
												return strlen($value->name);
											});
										@endphp

										<td>
											@foreach($phonemes as $phoneme)
												@php
													$link = $phoneme->present('link');

													if($phoneme->isMarginal) {
														$link = "($link)";
													}
												@endphp
												{!! $link !!}
											@endforeach
										</td>
									@endforeach
								</tr>
							@endif
						@endforeach
					@endforeach
				</tbody>
			@else
				<tbody><tr><td>No data</td></tr></tbody>
			@endif
			@if(Auth::user() && Auth::user()->permissions->canEdit)
				<tfoot>
					<tr>
						<td colspan="100%" style="border: none;">
							<a href="/languages/{{ $language->id }}/addPhoneme?type=consonant">Add another</a>
						</td>
					</tr>
				</tfoot>
			@endif
		</table>
	</div>
@endsection