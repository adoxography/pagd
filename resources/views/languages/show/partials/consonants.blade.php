@php
	if(!isset($localInventory)) {
		$localInventory = $inventory;
	}
@endphp

<table class="table is-narrow is-bordered phonemes-table" style="display: block;">
	@if($localInventory->hasConsonants())
		<thead>
			<tr>
				<th></th>
				@foreach($localInventory->getFeatures('places') as $place)
					<th>{{ $place->name }}</th>
				@endforeach
			</tr>
		</thead>
		<tbody>
			@foreach($localInventory->getFeatures('manners') as $manner)
				@foreach($localInventory->getFeatures('voicings') as $voicing)
					@if($localInventory->getConsonants(null, $manner, $voicing)->count() > 0)
						<tr>
							<th>
								{{ $voicing ? $voicing->name : '' }}
								{{ $manner->name }}
							</th>

							@foreach($localInventory->getFeatures('places') as $place)
								<td>
									<table class="phoneme-table">
										<tr>
											@foreach($localInventory->getConsonants($place, $manner, $voicing) as $phoneme)
												<td>
													@if(isset($callback))
														{!! $callback($phoneme) !!}
													@else
														{!! $phoneme->present('link') !!}
													@endif
												</td>
											@endforeach
										</tr>
									</table>
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
</table>