/* -------------------------------------
    custom.js: Main JS File
    Author: Mohammed-Yassin HAMDAOUI
   ------------------------------------- */

$(function() {

    /* 
     - Trigger smooth scroll plugin
    */

    var scroll = new SmoothScroll('a[href*="#"]');

    /*
     - Fixed Top Menu
    */

    $(window).on("scroll", function(e) {
        var ww = $(window).scrollTop();
        if(ww > 0){
            $('.menu').addClass('sticky-menu');
            //$('.mobile-menu').addClass('mobile-menu--active');
        } else{
            $('.menu').removeClass('sticky-menu');
            //$('.mobile-menu').removeClass('mobile-menu--active');
        }
    });

    /*
     - Menu Icon Click Event Handler
    */

    $(".menu-icon").on("click", function() {
        $(".menu-mobile").slideToggle();
        $(this).children(".menu-bar").toggleClass("animate-menu-bar");
    });

    /*
     - Portfolio Hover effect
    */

    $(".devwork").filter(function(i) {
        if(i >= 4) {
            return true;
        }
    }).hide();

    $(".show-more").on("click", function() {
        $(".devwork").filter(function(i) {
            if(i >= 4) {
                return true;
            }
        }).show();
        $(this).hide();
    });

    /* POPUP Work */
    $(".devwork").on("click", function() {
        var className = $(this).data("popup");
        $(".work-popup." + className).fadeIn(400);
    });

    $(".popup-close").on("click", function() {
        $(".work-popup").fadeOut();
    });

    $(".work-popup").on("click", function(e) {
        if(!e.target.closest(".work-container")) {
            $(".work-popup").fadeOut();
        }
    });


    /* Trigger AOS */
    AOS.init({duration: 1000});

    /* Loading Animation */
    $(window).on("load", function(){
        $('.preloader').fadeOut(1000);
    });
});