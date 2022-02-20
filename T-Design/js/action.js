$(document).on('click', 'a[href^="#"]', function (event){
   event.preventDefault();

   $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
   }, 600);
});

$(".menu li").on('click', function() {

   $(".menu li").removeClass("active");
   $(this).addClass("active");
});
