$(document).ready(function(){

    $(window).on('load', function() { 
		/*------------------
			Preloder
		--------------------*/
		$(".loader").fadeOut(); 
		$("#preloder").delay(400).fadeOut("slow");

    });
    
    /*------------------
         Background set
      --------------------*/
      $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
     });

     $(".lang").click(function(){
      $(".language").toggle(".active");
    });


    $(document).ready(function(){
      $(window).bind('scroll', function() {
      var navHeight = $( window ).height() - 70;
        if ($(window).scrollTop() > navHeight) {
          $('.manu-section').addClass('fixed');
        }
        else {
          $('.manu-section').removeClass('fixed');
        }
     });
   });



   $(".responsive-switch").click(function(){
     $("#nav").toggleClass('active')
   })


  //  /*------------------
	// 	Navigation
	// --------------------*/
	// $('.responsive-switch').on('click', function(e) {
	// 	$('.manu-area').toggleClass('active');	
	// 	e.preventDefault();
	// });

	// $('.manu-area>li>a, .sm-close').on('click', function() {
	// 	$('.manu-area').removeClass('active');
	// });

	// $('.menu-list').onePageNav({
	// 	easing: 'swing'
  // });
  

//   $(document).ready(function() {
	   
//     // JQUERY NAV TOGGLE
//     $('#menu').bind('click',function(event){
//         $('#mainnav ul').slideToggle();
//     });

//     $(window).resize(function(){  
//         var w = $(window).width();  
//         if(w > 768) {  
//             $('#mainnav ul').removeAttr('style');  
//         }  
//     });
  
// });




     /*---------
     Calender
     ---------*/
     $("input").on("change", function() {
      this.setAttribute(
          "data-date",
          moment(this.value, "YYYY-MM-DD")
          .format( this.getAttribute("data-date-format") )
      )
  }).trigger("change")



  $(".current").click(function(){
    $(".list--ln").toggle();
  });
  

    $('#datetimepicker4').datepicker();
    $('#datetimepicker5').datepicker();

 

    $('.testimonials_slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>" ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });

  $('.gallery-area-slide').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
});


$('.rooms-slide-active').owlCarousel({
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  items:1,
  // nav:true,
  // navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>" ],
});


$('.rooms-active-slide').owlCarousel({
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  items:1,
});
  
$('.room-service-slider-active').owlCarousel({
  center: true,
  items:3,
  loop:true,
  margin:10,
  responsive:{
    600:{
        items:2
    },
    1000:{
      items:4
    }
}

});

jQuery(window).load(function(){

  jQuery(".deateals-isotop").isotope();
  
  });

  // new GMaps({
  //   div: '.map',
  //   lat: -12.043333,
  //   lng: -77.028333
  // });

});



