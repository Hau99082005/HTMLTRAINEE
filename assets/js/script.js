/***************************************************************************
 *
 * SCRIPT JS
 *
 ***************************************************************************/
$(document).ready(function() {

    if ($(window).width() <= 768) {
        $('body').addClass(getMobileOperatingSystem());
    }
    //Click event to scroll to top
    $('.scrollToTop').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    //SCROLL TO TOP 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
            $('.scrollToTop').fadeIn(400);
        } else {
            $('.scrollToTop').fadeOut(400);
        }
    });

    // SCROLL ANCHOR
    $('.anchor a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var target_offset = 0;
                if (target.attr('data-offset')) {
                    target_offset = target.attr('data-offset');
                    target_offset = parseInt(target_offset);
                }
                $('html,body').animate({
                    scrollTop: target.offset().top - 90 + target_offset
                }, 1000);
                return false;
            }
        }
    });

});

// DETECH ANDROID OR IOS
getMobileOperatingSystem();

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            console.log('Mobile view activated');
        } else {
            console.log('Desktop view activated');
        }
    });

});