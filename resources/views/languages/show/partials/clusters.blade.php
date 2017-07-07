@php
	if(!isset($localInventory)) {
		$localInventory = $inventory;
	}
@endphp

<table class="table is-narrow is-bordered phonemes-table" style="display: block;">
	@if($localInventory->hasClusters())
		<thead>
			<tr>
				<th></th>
				@foreach($localInventory->getFeatures('secondSegments') as $segment)
					<th>{{ $segment->name }}</th>
				@endforeach
			</tr>
		</thead>
		<tbody>
			@foreach ($localInventory->getFeatures('firstSegments') as $firstSegment)
				<tr>
					<th>{{ $firstSegment->name }}</th>

					@foreach ($localInventory->getFeatures('secondSegments') as $secondSegment)
						<td>
							<table class="phoneme-table">
								<tr>
									@foreach($localInventory->getClusters($firstSegment, $secondSegment) as $phoneme)
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