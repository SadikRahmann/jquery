$(document).ready(function(){

$("#draggable").draggable();


 $( "#draggable2" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

$( "#sortable" ).sortable();

 $( "#accordion" ).accordion({
      collapsible: true
    });

 $( "#menu" ).menu();

 $( document ).tooltip();

});

