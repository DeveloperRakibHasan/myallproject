(function ($) {
    "use strict";

    /*------------------
        Preloder
    --------------------*/
    $(".loader").fadeOut(); 
    $("#preloder").delay(400).fadeOut("slow");
    

    jQuery(document).ready(function ($) {

        $(".video-play-btn").magnificPopup({


            type:'video',
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




         $('.client-active').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay:true,
            autoplayTimeout:3500,
            smartSpeed: 800,
            responsive: {
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })

      


    });

    jQuery(window).load(function() {

    });


}(jQuery));

