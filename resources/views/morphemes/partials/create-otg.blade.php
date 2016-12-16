{{ Form::button('Validate', ['id' => 'morpheme-validate-button']) }}

<div id = 'create-morpheme-dialog'>
	<ul></ul>
</div>

<div id = 'alert-dialog'>
	<p></p>
</div>

<script>
	$(document).ready(function(){
		var alertDialog, morphemeDialog, morphemeEntry, language, morphemes,
		morphemeList = $('#create-morpheme-dialog').children('ul'),
		alertMessage = $('#alert-dialog').children('p');
		numMorphemes = 0;

		morphemeEntry = function(morpheme){
			var entry = $('<li>').append(
				$('<label>').text('Morpheme'),
				$('<input>').attr('type', 'text')
							.attr('name', 'morpheme-name')
							.attr('value', morpheme)
							.attr('required', 'required'),
				$('<label>').text('Gloss'),
				$('<input>').attr('type', 'text')
							.attr('class', 'gloss-input'),
				$('<input>').attr('type', 'hidden')
							.attr('name', 'morpheme-gloss')
							.attr('class', 'gloss-hidden'),
				$('<label>').text('Slot'),
				$('<input>').attr('type', 'text')
							.attr('class', 'slot-input'),
				$('<input>').attr('type', 'hidden')
							.attr('name', 'morpheme-slot')
							.attr('class', 'slot-hidden')
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
				datatype: 'html',
				data: {
					'_token': $('input[name=_token]').val(), //Include CSRF Token
					'names': names,
					'glosses': glosses,
					'slots': slots,
					'numMorphemes': numMorphemes,
					'language': language
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

		function hasV(){
			var morphemeSplit = morphemes.split("-");
			var found = false;

			for(i = 0; i < morphemeSplit.length && !found; i++){
				found = morphemeSplit[i].toLowerCase() === "v";
			}

			return found;
		}

		function validateMorphemesFromServer(){
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
				numMorphemes = 0;
				if(data.length > 0){
					$.each(data, function(i, morpheme){
						morphemeList.append(morphemeEntry(morpheme));
					});
					morphemeList.find('input.gloss-input').autocomplete({
						source: {!! $glosses->toJson() !!},
					    select: function(event, ui) {
					    	$(this).next().val(ui.item.id);
					    }
					});
					morphemeList.find('input.slot-input').autocomplete({
						source: {!! $slots->toJson() !!},
					    select: function(event, ui) {
					    	$(this).next().val(ui.item.id);
					    }
					});

					morphemeDialog.dialog('open');
				}
				else{
					alertMessage.html('All morphemes exist.');
					alertDialog.dialog('open');
				}
			});
		}

		$('#morpheme-validate-button').click(function(e){
			language = $('#language_id').val();
			morphemes = $('#morphemicForm').val();

			if(morphemes.length > 0){
				if(hasV()){
					validateMorphemesFromServer();
				}
				else{
					alertMessage.html("Please include a position from the Vstem.");
					alertDialog.dialog('open');
				}
			}
		});

		morphemeDialog = $('#create-morpheme-dialog').dialog({
			autoOpen: false,
			modal: true,
			buttons: {
				'Add Morphemes': addMorphemes
			}
		});

		alertDialog = $('#alert-dialog').dialog({
			autoOpen: false
		});

	});
</script>