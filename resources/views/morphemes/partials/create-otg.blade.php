{{ Form::button('Validate', ['id' => 'morpheme-validate-button']) }}

<div id = 'create-morpheme-dialog'>
	<ul></ul>
</div>

<script>
	$(document).ready(function(){
		var morphemeDialog, morphemeEntry,
		morphemeList = $('#create-morpheme-dialog').children('ul'),
		numMorphemes = 0;

		morphemeEntry = function(morpheme){
			var entry = $('<li>').append(
				$('<label>').text('Morpheme'),
				$('<input>').attr('type', 'text')
							.attr('name', 'morpheme-name')
							.attr('value', morpheme),
				$('<label>').text('Gloss'),
				$('<input>').attr('type', 'text')
							.attr('name', 'morpheme-gloss')
							.attr('class', 'gloss-input'),
				$('<label>').text('Slot'),
				$('<input>').attr('type', 'text')
							.attr('name', 'morpheme-slot')
							.attr('class', 'slot-input')
			);

			numMorphemes++;

			return entry;
		};

		function packageData(name){
			return $('input[name='+name+']').map(function(){
				return $(this).val();
			}).get();
		}

		function addMorphemes(){
			var names = packageData('morpheme-name');
			var glosses = packageData('morpheme-gloss');
			var slots = packageData('morpheme-slot');

			$.ajax({
				method: 'POST',
				url: '/morphemes/createOTG',
				data: {
					'_token': $('input[name=_token]').val(), //Include CSRF Token
					'names': names,
					'glosses': glosses,
					'slots': slots,
					'numMorphemes': numMorphemes
				}
			})
			.done(function(data){
				alert(data);
			})
			.fail(function(jqXHR, textStatus, errorThrown){
				alert(errorThrown);
			});

			morphemeDialog.dialog('close');

			return true;
		}

		$('#morpheme-validate-button').click(function(e){
			language = $('#language_id').val();
			morphemes = $('#morphemicForm').val();

			$.ajax({
				url: '/morphemes/exists',
				data: {
					language: language,
					morphemes: morphemes
				},
				type: 'GET',
				dataType: 'json'
			})
			.done(function(data){
				morphemeList.empty();
				if(data.length > 0){
					$.each(data, function(i, morpheme){
						morphemeList.append(morphemeEntry(morpheme));
					});
					morphemeList.find('input.gloss-input').autocomplete({
						source: {!! $glosses->toJson() !!}
					});
					morphemeList.find('input.slot-input').autocomplete({
						source: {!! $slots->toJson() !!}
					});
				}
				else{
					morphemeList.append('All morphemes exist.');
				}
				morphemeDialog.dialog('open');
			});
		});

		morphemeDialog = $('#create-morpheme-dialog').dialog({
			autoOpen: false,
			modal: true,
			buttons: {
				'Add Morphemes': addMorphemes
			}
		});

	});
</script>