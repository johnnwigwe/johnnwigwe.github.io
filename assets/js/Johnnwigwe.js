//hides top navigation on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

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

