<div id='source-form'>
	{{ Form::label('short','Short form:') }}
	{{ Form::text('short') }}
	{{ Form::label('long','Full source:') }}
	{{ Form::textarea('long',null,['rows' => 3]) }}

	{{ Form::submit(null,['tabindex' => -1, 'style' => 'position:absolute; top:-1000px'])}}
</div>

<fieldset id='old_source'>
	<p>Select a source</p>
	{{ Form::text('source') }}
	{{ Form::hidden('source') }}
</fieldset>
<fieldset id='new_source'>
	<p>Enter a new source</p>
	{{ Form::button('New Source',['id' => 'add-source']) }}
</fieldset>

<fieldset>
	<p>List of sources</p>
	<ol id = 'source-list'>
		@if(isset($form))
			@for($i = 0; $i < count($form->sources); $i++)
				@include('sources.partials.source_field')
			@endfor
		@endif
	</ol>
</fieldset>

<script>
	$(document).ready(function(){

		var sourceDialog, form, sourceField,
		short = $('#short'),
		long  = $('#long'),
		numSources = {{ isset($form) ? count($form->sources) : 0 }};

		sourceField = function(text, id){
			var source = $('<li>').append(
				$('<span>').html(text),
				$('<input>').attr('name', 'extraInfo['+numSources+']')
							.attr('type', 'text'),
				$('<input>').attr('name', 'source_id['+numSources+']')
							.attr('type', 'hidden')
							.val(id),
				$('<button>').attr('class', 'remove-source-button')
							 .html('Remove')
							 .click(function(){
							 	$(this).parent().remove();
							 })
			);

			numSources++;

			return source;
		};

		function storeSource(){
			var valid = true;

			if(valid){
				$.ajax({
					method: 'POST',
					data: {
						'_token': $('input[name=_token]').val(), //Include CSRF Token
						'short': short.val(),
						'long' : long.val()
					},
					dataType: 'json',
					success: function(data){
						$('#source-list').append(sourceField(data.short, data.id));
					},
					error: function(jqXHR, textStatus, errorThrown){
						alert('jqXHR: '+jqXHR+'\ntextStatus: '+textStatus+'\nerrorThrown: '+errorThrown);
					},
					url: '/sources'
				});
				sourceDialog.dialog('close');
			}

			return valid;
		}

		sourceDialog = $('#source-form').dialog({
			autoOpen: false,
			height: 300,
			width: 350,
			modal: true,
			buttons: {
				'Add Source': storeSource
			}
		});

		form = sourceDialog.find('form').on('submit', function(event){
			event.preventDefault();
			storeSource();
		});

		$('#add-source').click(function(){
			sourceDialog.dialog('open');
		});
	});
</script>