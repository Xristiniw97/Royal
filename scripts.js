const nextIcon = '<img src="img/right-arrow.svg" alt="right" >';
const prevIcon = '<img src="img/left-arrow.svg" alt="left" >';


(function($){

    var isMobile = window.matchMedia("only screen and (max-width: 767px)");
    if (!isMobile.matches) {
        var $item = $("#bgCarouselSlider .carousel-item");
        var $wHeight = $(window).height();
        $item.eq(0).addClass("active");
        $item.height($wHeight);
        $item.addClass("full-screen");
        $(window).on("resize", function () {
            $wHeight = $(window).height();
            $item.height($wHeight);
        });
    }

    $("#bgCarouselSlider").carousel({
        interval: 10000,
        pause: false
    });

    /*Scroll to top*/
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
        } else {
        $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
    });   

    //AWARDS OWL
    $('.awards-owl').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1200:{
                items:5
            },
            1400:{
                items:6
            }
        }
    });

    //REVIEWS OWL
    $('.reviews-owl').owlCarousel({
        loop:false,
        margin:30,
        nav: true,
        navText: [prevIcon,nextIcon],
        dots: false,
        items:3,
        responsive:{
            0:{
                items:1
            },
            
            800:{
                items:2
            },
            1300: {
                items:3
            }

        }
    });

    //EXPERIENCES OWL
    $('.experiences-owl').owlCarousel({
        loop:false,
        margin:30,
        nav: true,
        navText: [prevIcon,nextIcon],
        dots: false,
        items:3,
        responsive:{
            0:{
                items:1
            },
            
            1200:{
                items:2
            }
        }
    });

    //ROOMS OWL
    $('.rooms-owl').owlCarousel({
        loop:false,
        margin:30,
        nav: true,
        navText: [prevIcon,nextIcon],
        dots: false,
        items:3,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1400:{
                items:3
            }
        }
    });

})(jQuery);

$(document).ready(function() {

    // add all to same gallery
    $(".roomTypeGallery a").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
    $(".roomTypeGallery a").each(function(){
      $(this).attr("data-caption", $(this).find("img").attr("alt"));
      $(this).attr("title", $(this).find("img").attr("alt"));
    });
    // start fancybox:
      $(".roomTypeGallery a").fancybox();

      
$(function() {
    owlInitialize(); 
});
   
$(window).resize(function() {
  owlInitialize();
});

function owlInitialize() {

  if ($(window).width() < 1199) {
       $(".tasteCarousel").removeClass("d-md-flex");
       $(".tasteCarousel").owlCarousel({
           loop: false,
           margin: 10,
           nav: true,
           navText: [prevIcon,nextIcon],
           dots: false,
           responsive:{
               0:{
                   items: 1
               },
               575:{
                   items: 2
               },
               991: {
                   items: 3 
               }
               
           }
       });
  }else{
     $(".tasteCarousel").addClass("d-md-flex"); 
     $(".tasteCarousel").owlCarousel('destroy');
  }
}

});


