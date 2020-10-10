/*============================
   js index
==============================

==========================================*/

(function($) {
    "use strict";

    /*================================
    Preloader
    ==================================*/
    var preloader = $('#preloader');
    $(window).on('load', function() {
        preloader.fadeOut('slow', function() { $(this).remove(); });
    });


    /*================================
    stickey Header
    ==================================*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop(),
            mainHeader = $('#sticky-header');
        if (scroll > 1) {
            $("#sticky-header").addClass("sticky-menu");
        } else {
            $("#sticky-header").removeClass("sticky-menu");
        }
    });

    /*================================
    Smoth Scroll
    ==================================*/
    function smoothScrolling($links, $topGap) {
        var links = $links;
        var topGap = $topGap;

        links.on("click", function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - topGap
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }

    $(window).on("load", function() {
        smoothScrolling($("a.scrollup-btn[href^='#']"), 0);
    });

    /*================================
    Owl Carousel
    ==================================*/
    // download-carousel
    $('.download-carousel').owlCarousel({
        margin: 0,
        items: 1,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        nav: true,
        mouseDrag: false,
        smartSpeed: 800,
        navText: ['<img src="assets/images/icon/arrow-pointing-to-left.png"></img>', '<img src="assets/images/icon/arrow-pointing-to-right.png"></img>'],
    });

    // testimonial-carousel
    $('.testimonial-carousel').owlCarousel({
        margin: 0,
        items: 1,
        dots: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        nav: false,
        smartSpeed: 300,
    });

    $('.client-carousel').owlCarousel({
        margin: 50,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: false,
        dots: false,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 2
            },
            450: {
                items: 2
            },
            768: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });

    $('.expand-video').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: false
        }
    });

    /*================================
    counter up
    ==================================*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*================================
    slicknav
    ==================================*/
    $('ul#navigation').slicknav({
        prependTo: ".mobile_menu"
    });

})(jQuery);

// google map activation
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('google_map'), {
        center: { lat: 40.674, lng: -73.945 },
        scrollwheel: false,
        zoom: 12,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map
    });
}