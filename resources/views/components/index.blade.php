<table class="table">
	@foreach($items as $item)
		<tr>
			<td>
				<a href="/{{ $model }}/{{ $item->id }}">{{ $item->abv or $item->name }}</a>
			</td>
			@if ($item->name)
				<td>
					{{ $item->name }}
				</td>
			@endif
			<td>
				@can('add content')
					<div class="level-right">
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
			</td>
		</tr>
	@endforeach
</table>
