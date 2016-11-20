var attachAutocomplete = function(selector, itemList){
	$('#'+selector).autocomplete({
		source: JSON.parse(itemList),
		select: function(event, ui) {
			$('#'+selector).val(ui.item.value);
			$('#'+selector+'_id').val(ui.item.id);
		}
	});
};