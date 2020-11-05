$(document).ready(
  function() {
      //Definisco la funzione che si attivera con hover
    $(".parent-dropdown").hover(function() {
      $(this).find('ul').slideToggle();
    });

    $(".parent-dropdown").hover(

      function() {
        $(this).find("i").removeClass("fa-chevron-down");
        $(this).find("i").addClass("fa-chevron-up");
      },
      
      function() {
        $(this).find("i").removeClass("fa-chevron-down");
        $(this).find("i").addClass("fa-chevron-up");
        $(this).find("i").removeClass("fa-chevron-up");
        $(this).find("i").addClass("fa-chevron-down");
      },
    );
  }
);
