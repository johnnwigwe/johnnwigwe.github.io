//hides top navigation on scroll down
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("header").style.top = "0";
//     } else {
//         document.getElementById("header").style.top = "-50px";
//     }
//     prevScrollpos = currentScrollPos;
// }

//Toggle Navbar onclick


//page color changer
// define the function to change page color theme
function changeColorMode(mode) {
    // get the entire DOM body
    var element = document.body;
    // get the sun icon from the DOM
    var darkthemebutton = document.getElementById('dark-theme');
    // get the moon icon from the DOM
    var lightthemebutton = document.getElementById('light-theme');

    // check the mode to set: if light?
    if (mode == "light") {
        // set the class to light mode
        element.className = "lightbody";
        // hide the sun icon
        lightthemebutton.className = 'white hide';
        // show the moon icon
        darkthemebutton.className = 'white show';
    } else {
        // else set the class to dark mode
        element.className = "darkbody";
        // show the sun icon
        lightthemebutton.className = 'white show';
        // hide the moon icon
        darkthemebutton.className = 'white hide';
    }
}

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
