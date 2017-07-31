<table class="table">
	@foreach($items as $item)
		<tr>
			<td>
				<li class="level">
					<div class="level-left">
						<div class="level-item">
							<a href="/{{ $model }}/{{ $item->id }}">{{ $item->abv or $item->name }}</a>
						</div>
					</div>
					@can('add content')
						<div class="level-right">
							@if($item->isHideable)
								<div class="level-item">
									@component('components.form', ['method' => 'PATCH', 'action' => "/$model/{$item->id}/hide"])
										<a class="button" onclick="event.preventDefault(); this.parentNode.submit();">
											<span class="icon" title="Toggle visibility">
												@if($item->isHidden())
													<i class="fa fa-eye-slash"></i>
												@else
													<i class="fa fa-eye"></i>
												@endif
											</span>
										</a>
									@endcomponent
								</div>
							@endif
							<div class="level-item">
								<a class="button" href="/{{ $model }}/{{ $item->id }}/edit">
									<span class="icon" title="Edit">
										<i class="fa fa-pencil"></i>
									</span>
								</a>
							</div>
							
							<div class="level-item">
								@component('components.form', ['method' => 'DELETE', 'action' => "/$model/{$item->id}"])
									<a class="button" onclick="event.preventDefault(); var confirm = window.confirm('Are you sure?'); if(confirm) { this.parentNode.submit(); }">
										<span class="icon" title="Delete">
											<i class="fa fa-times"></i>
										</span>
									</a>
								@endcomponent
							</div>
							
						</div>
					@endcan
				</li>
			</td>
		</tr>
	@endforeach
</table>