<li>
	<span class = 'short'>{{ $form->sources[$i]->short }}</span>
	{{ Form::text("extraInfo[$i]", $form->sources[$i]->pivot->extraInfo) }}
	{{ Form::hidden("source_id[$i]", $form->sources[$i]->id) }}
	{{ Form::button('Delete',['class' => 'remove-source-button']) }}
</li>