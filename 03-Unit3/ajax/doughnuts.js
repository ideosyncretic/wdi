console.clear()

$(document).ready(function () {
  function reload() {
    $.get('http://api.doughnuts.ga/doughnuts')
      .done(function(data){
        data.forEach( function(datum) {
          $('#list').append('<li><strong>' + datum.flavor + '</strong></li>')
        })

      }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(errorThrown)
      });
  }


  $('#refresh').click(function(){
    reload();
  })

  $("#myForm").on( "submit", function( event ) {
    event.preventDefault();
    var data = $( this ).serialize()
    console.log( data );

    $.ajax({
      type: "POST",
      url: 'http://api.doughnuts.ga/doughnuts',
      data: data
    }).done(function(response){
      console.log(response)
        $("#list").append('<li><strong> ' + response.Flavour + ' ' + '</strong><em>(' + response.Type + ')</em></li>');
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log(errorThrown)
    });

  });
}); // end document ready
