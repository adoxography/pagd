@if(Auth::user() && Auth::user()->permissions->canEdit)
	<a class="icon add-icon" href="{{ $uri }}">
		<span class="icon" title="Add another">
			<i class="fa fa-plus-square"></i>
		</span>
	</a>
@endif