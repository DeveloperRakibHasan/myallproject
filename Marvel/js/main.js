(function (s) {
    "use strict";

    /*------------------
        Preloder
    --------------------*/
    
    $(".loader").fadeOut(); 
    $("#preloder").delay(400).fadeOut("slow");
    


    jQuery(document).ready(function($){




		$(".project-title li").on('click', function() {

			$(".project-title li").removeClass("active");
			$(this).addClass("active");

			var selector = $(this).attr('data-filter');
			$(".project-list").isotope({
				filter: selector
			})
		});




		$('.slider-area').owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			autoplay:false,
			autoplayTimeout:3500,
			smartSpeed: 900,
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
		})	
    
    });


    jQuery(window).load(function(){

		jQuery(".project-list").isotope();
    });



}(jQuery));