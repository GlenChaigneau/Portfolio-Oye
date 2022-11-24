$(document).ready(function() {

  // NAVBAR
  $('.dropdown-trigger').dropdown({
      hover: true,
      coverTrigger: false
  });

  // SIDENAV
  (function($) {
      $(function() {

          $('.sidenav').sidenav();

      });
  })

  // HEADER CAROUSEL
  $('.carousel').carousel({
      dist: 0,
      padding: 0,
      fullWidth: true,
      indicators: true,
      duration: 100,
  });

  setInterval(function() {
      $('.carousel').carousel('next');
  }, 4000);

  $('.modal').modal();
  $('.datepicker').datepicker({disableWeekends: true});
  
});

function closeSideNav(){
    $('.sidenav').sidenav("close");
}