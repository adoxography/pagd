@extends('layout')

@section('content')

	<div class = 'show'>
		<h1>
			{{ $language->name }}
			@if(Auth::user())
				<a href='/languages/{{ $language->id }}/edit'>(Edit)</a>
			@endif
		</h1>
		<table>
			<tr>
				<td class = 'label'>Group</td>
				<td class = 'value'><a href = "/groups/{{ $language->group->id }}">{{ $language->group->name }}</a></td>
			</tr>
			<tr>
				<td class = 'label'>Parent</td>
				<td class = 'value'>
					@if($language->parent)
						<a href = "/languages/{{ $language->parent->id }}">{{ $language->parent->name }}</a>
					@else
						None
					@endif
				</td>
			</tr>
			<tr>
				<td class = 'label'>
					Children 
					@if(Auth::user())
						(<a href = '/languages/{{ $language->id }}/addChild' class = 'newItem'>Add another</a>)
					@endif
				</td>
				@if(count($language->children) > 0)
					<td class = 'itemList'>
						<ul>
						@foreach($language->children as $child)
							<li><a href = "/languages/{{ $child->id }}">{{ $child->name }}</a></li>
						@endforeach
						</ul>
					</td>
				@else
					<td class = 'value'>
						None
					</td>
				@endif
			</tr>
			<tr>
				<td class = 'label'>
					Forms 
					@if(Auth::user())
						(<a href = '/languages/{{ $language->id }}/addForm' class = 'newItem'>Add another</a>)
					@endif
				</td>
				@if($language->forms && count($language->forms) > 0)
					<td class = 'itemList'>
						<ul>
							@foreach($language->forms as $form)
								<li><a href = '/forms/{{ $form->id }}'>{{ $form->surfaceForm }}</a></li>
							@endforeach
						</ul>
					</td>
				@else
					<td class = 'value'>None</td>
				@endif
			</tr>
			<tr>
				<td class = 'label'>
					Morphemes 
					@if(Auth::user())
						(<a href = '/languages/{{ $language->id }}/addMorpheme' class = 'newItem'>Add another</a>)
					@endif
				</td>
				@if($language->morphemes && count($language->morphemes) > 0)
					<td class = 'itemList'>
						<ul>
							@foreach($language->morphemes as $morpheme)
								<li><a href = "/morphemes/{{ $morpheme->id }}">{{ $morpheme->name }}</a></li>
							@endforeach
						</ul>
					</td>
				@else
					<td class = 'value'>None</td>
				@endif
			</tr>
		</table>
		@if(!$language->verified && Auth::user())
			{{ Form::open(['url' => '/languages/'.$language->id, 'method' => 'delete', 'class' => 'deleteButton']) }}
			{{ Form::submit('Delete') }}
			{{ Form::close() }}
		@endif
	</div>
@stop