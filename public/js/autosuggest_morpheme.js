$(document).ready(function(){
  $('#parent').autocomplete({
    source: function(request, response){
      $.ajax({
        url: '/morphemes/autofill',
        dataType: 'json',
        data: {
          term: request.term,
          language: $('#language_id').val()
        },
        success: function(data){
          response(data);
        }
      });
    },
    select: function(event, ui) {
        $('#parent').val(ui.item.value);
        $('#parent_id').val(ui.item.id);
      }
  });
});