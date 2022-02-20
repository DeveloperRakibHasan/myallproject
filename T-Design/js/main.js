'use strict';

$(window).on('load', function() { 

   	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");


});



$(document).ready(function(){

   $(".menu-icon").on("click", function(){
      $("nav ul").toggleClass("showing");
   });

   	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});
	
	// Timer

	// Set the date we're counting down to
var countDownDate = new Date("nov 12, 2019 22:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "D " + hours + "H "
  + "</br>" + minutes + "M " + seconds + "S ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


$(".offer-timer").click(function(){
		$("#demo").fadeIn(1000);
		$("#demo").fadeOut(5000);
});

var $container = $('.isotope_items');
	$container.isotope();

	$('.work-image').magnificPopup({
		type: 'image',
		removalDelay: 400,
		zoom:{enabled: true, duration: 300}
	});


   	/*------------------
		Typed js
	--------------------*/
	if($('#typed-text').length > 0 ) {
		var typed2 = new Typed('#typed-text', {
		   	strings: ["I'm Devloper.", "I'm Creative", "I'm Freelancer."],
			typeSpeed: 10,
			loop:true,
         backDelay: 3000,
         backSpeed: 15
		});
   }
	
	
	$('.hover').hover(function(){
		$(this).addClass('flip');
	},function(){
		$(this).removeClass('flip');
	});

		$('#bar1').barfiller({
			barColor: "#000"
		});
		$('#bar2').barfiller({
			barColor: "#000"
		});
		$('#bar3').barfiller({
			barColor: "#000"
		});
		$('#bar4').barfiller({
			barColor: "#000"
		});

		$('.advanced-active').owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			autoplay:true,
			autoplayTimeout:4000,
			smartSpeed: 700,
			responsive: {
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

$(".hire-me").on("click",function(){
	$(".contact").removeClass("active");
	$(this).addClass("active");
	$(".d-n").fadeIn(function(){
		$(".con").hide();
	});
});
$(".contact").on("click",function(){
	$(".hire-me").removeClass("active");
	$(this).addClass("active");
	$(".con").fadeIn(function(){
		$(".d-n").hide();
	})
});
return false;

});

$(window).on("scroll", function(){
   if($(window).scrollTop()){
		$("nav").addClass('black');
   }
   else{
      $("nav").removeClass('black');
   }
});

// parallex js

