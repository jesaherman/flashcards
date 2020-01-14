$(document).ready(function() {
  $(".btn").click(function(event) {
   // $("p").removeClass();
    $('.'+event.target.name).toggle();
    //$(this).remove();

  });
});