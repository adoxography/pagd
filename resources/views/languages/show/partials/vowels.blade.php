@php
	if(!isset($localInventory)) {
		$localInventory = $inventory;
	}
@endphp

<table class="table is-narrow is-bordered phonemes-table" style="display: block;">
	@if($localInventory->hasVowels())
		<thead>
			<tr>
				<th></th>
				@foreach($localInventory->getFeatures('backnesses') as $backness)
					<th>{{ $backness->name }}</th>
				@endforeach
			</tr>
		</thead>
		<tbody>
			@foreach($localInventory->getFeatures('heights') as $height)
				<tr>
					<th>{{ $height->name }}</th>

					@foreach($localInventory->getFeatures('backnesses') as $backness)
						<td>
							<table class="phoneme-table">
								<tr>
									@foreach($localInventory->getVowels($height, $backness) as $phoneme)
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
			@endforeach
		</tbody>
	@else
		<tbody><tr><td>No data</td></tr></tbody>
	@endif
</table>