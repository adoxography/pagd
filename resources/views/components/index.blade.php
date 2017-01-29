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
					@if(Auth::user())
						<div class="level-right">
							<div class="level-item">
								<a class="button" href="/{{ $model }}/{{ $item->id }}/edit">
									<span class="icon" title="Edit">
										<i class="fa fa-pencil"></i>
									</span>
								</a>
							</div>
							
							<div class="level-item">
								@component('components.form', ['method' => 'DELETE', 'url' => "/$model/{$item->id}"])
									<a class="button" onclick="event.preventDefault(); var confirm = window.confirm('Are you sure?'); if(confirm) { this.parentNode.submit(); }">
										<span class="icon" title="Delete">
											<i class="fa fa-times"></i>
										</span>
									</a>
								@endcomponent
							</div>
							
						</div>
					@endif
				</li>
			</td>
		</tr>
	@endforeach
</table>