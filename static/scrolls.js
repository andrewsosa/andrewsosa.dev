

var lightSections = [1, 2, 3];

function beforeScroll(section, elements) {
    var navbar = $(".navbar-default");
    var navtext = $(".navbar .nav > li > a");
    var navbrand = $(".navbar-default .navbar-brand");

    showScrim = ($.inArray(section, lightSections) > -1)

    if (showScrim) {
        //navbar.animate({backgroundColor : "rgba(0,0,0,0.1)"});
        navtext.animate({color:"rgba(0, 68, 70, 1)"})
        navbrand.animate({color:"rgba(0, 68, 70, 1)"})
    } else {
        //navbar.animate({backgroundColor : "rgba(0,0,0,0)"});
        navtext.animate({color:"rgba(255, 255, 255, 1)"})
        navbrand.animate({color:"rgba(255, 255, 255, 1)"})
    }
}
