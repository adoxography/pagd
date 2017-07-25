	@php
if(!isset($uri)) {
	$uri = '/'.strtolower(array_last(explode('_', $model->table))).'/';
}
@endphp

@if(Auth::user() && Auth::user()->permissions->canEdit)
	@section('icons')
		@if(method_exists($model, 'isHidden'))
			<alg-hidden-icon uri="{{ $uri }}{{ $model->id }}" hidden="{{ $model->isHidden() }}"></alg-hidden-icon>
		@endif
		<alg-bookmark uri="{{ $uri }}{{ $model->id }}" bookmarked="{{ $model->isBookmarkedBy() }}"></alg-bookmark>
	    <a href="{{ $uri }}{{ $model->id }}/edit" class="card-header-icon" title="Edit">
	      	<span class="icon">
	        	<i class="fa fa-pencil"></i>
	      	</span>
	    </a>
	    @if(Auth::user()->permissions->canHardDelete)
	    	<alg-button action="{{ $uri }}{{ $model->id }}" method="DELETE" class="card-header-icon" title="Delete">
	    		<span class="icon">
	    			<i class="fa fa-trash"></i>
	    		</span>
	    	</alg-button>
	    @endif
    @endsection
@endif