
   $(document).ready(function(){



      /*------------------
         Background set
      --------------------*/
      $('.set-bg').each(function() {
         var bg = $(this).data('setbg');
         $(this).css('background-image', 'url(' + bg + ')');
      });

      // Manu click Function

      $(".off-canvar-bar").on("click", function(){
         $(".off-canvar-menu, .off-canvar-overlay").addClass("active")
         return false;
      });


      $(".manu-close, .off-canvar-overlay").on("click", function(){
         $(".off-canvar-menu, .off-canvar-overlay").removeClass("active")

      });



         	/*------------------
		Typed js
	--------------------*/
	if($('#typed-text').length > 0 ) {
		var typed2 = new Typed('#typed-text', {
		   	strings: ["I'm Devloper.", "I'm Designer.", "I'm Freelancer."],
			typeSpeed: 10,
			loop:true,
         backDelay: 3000,
         backSpeed: 15
		});
   }
	
      
//   barfiller

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
                barColor: "#f00"
        });


        $('.about-service-section').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                autoplay:true,
                autoplayTimeout:6000,
                smartSpeed: 1000,
                responsive: {
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });



   /*------------------
		Isotope Filter
	--------------------*/
	var $container = $('.isotope_items');
	$container.isotope();

	$('.project-title li').on("click", function(){
		$(".project-title li").removeClass("active");
		$(this).addClass("active");				 
		var selector = $(this).attr('data-filter');
		$(".isotope_items").isotope({
				filter: selector,
				animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});



   
   
});
