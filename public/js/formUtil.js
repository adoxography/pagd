var formUtil = (function(){

	/****
	 * Private methods
	 */
	function findDefault(datalist)
	{
		var result = null;

		for(var i = 0; i < datalist.children().length && !result; i++)
		{
			if(datalist.children().eq(i).data('default'))
			{
				result = datalist.children().eq(i);
			}
		}

		return result;
	}

	function defaultDatalists()
	{
		$('input[list]').each(function(i,e){ // Select all the textboxes that have associated datalists
			var textField = $(this);         // and iterate over them
			var dataList, hiddenField, defaultOption;

			if(textField.val() == ''){ // If it's empty, try to fill it in{
				datalist      = $('#'+textField.attr('list'));
				hiddenField   = $('#'+textField.attr('id')+'_id');
				defaultOption = findDefault(datalist);

				if(defaultOption){ // Only try to fill in a default if there is one to begin with
					textField.val(defaultOption.val());
					hiddenField.val(defaultOption.data('value'));
				}
			}
		});
	}

	function filter(array) {
		var result = [];
		$.each(array, function(i, e){
			if($.inArray(e,result) == -1){
				result.push(e);
			}
		});
		return result;
	}

	function defaultRadios()
	{
		var all = $('input:radio').map(function(i,e) {
			return $(e).attr('name');
		}).get();

		var radios = filter(all);

		$.each(radios,function(i, e){
			if(!$('input:radio[name="'+e+'"]:checked').val()){
				$('input:radio[name="'+e+'"]:first').attr('checked','checked');
			}
		});
	}

	function initDatalist(inputField){
		inputField.on('input', function(e){
			var input       = $(this);
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

	/****
	 * Public methods
	 */
	return {
		initDatalists: function(){
			$('input[list]').each(function(i, e) {
				initDatalist($(this));
			});
			defaultDatalists();
		},

		initRadios: function(){
			defaultRadios();
		}
	};
}());