$(document).ready(function() {

  // Imagination!
  $.ajax({
   url: 'https://bb-election-api.herokuapp.com/',
   method:'GET',
   dataType: 'json'


 }).done(function(data){
    $(data.candidates).each(function(candidate) {
      $('<li>').html('Candidate: ' + this.name + '  ' + ' Votes: ' + this.votes).appendTo('#candidates');
    });
  });
});
