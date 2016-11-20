function datalist(name){
	$('#' + name).on('input', function(e){
		var input       = $(e.target);
		var options     = $('#' + input.attr('list') + ' option');
		var hiddenInput = $('#' + input.attr('id') + '_id');
		var label       = input.val();
		var found       = false;

		hiddenInput.val(label);
		for(var i = 0; i < options.length && !found; i++){
			var option = options.eq(i);

			if(option.text() === label){
				hiddenInput.val(option.attr('data-value'));
				found = true;
			}//if
		}//for
	});
}