$(document).ready(function() {
    main.initialize();
});

//Main Scope
var main = {};

/**
 * Starts the app and resets the current session.
 * @returns {undefined}
 */
main.start = function() {    
    slider.navigateTo('#page-landing', slider.Direction.LEFT);
};

/**
 * Initialize the app
 * @returns {undefined}
 */
main.initialize = function() {
    //Setup Slider
    slider.processing = '#page-processing';
    slider.storage = '#pages';
    /*
     * Add navigateTo() utility function so that we don't have to specify 
     * the main slider each time
     */
    slider.navigateTo = function(page, direction, beforeOpen, param) {
        slider.slide('#slide-container', page, direction, beforeOpen, param);
    };
    
    //First display a processing page while we load and initialize
    slider.navigateTo('#page-landing', slider.Direction.LEFT);

    /*
     * Add Listeners
     */

    //page-Landing
    $('#page-landing .overview').click(function() {
        slider.navigateTo('#page-overview', slider.Direction.RIGHT);
    });

    //page-overview
    $('#page-overview .schedule').click(function() {
        slider.navigateTo('#page-schedule', slider.Direction.RIGHT);
    });
    $('#page-overview .events').click(function() {
        slider.navigateTo('#page-events', slider.Direction.RIGHT);
    });
    $('#page-overview .career-guides').click(function() {
        slider.navigateTo('#page-career-guides', slider.Direction.RIGHT);
    });
    $('#page-overview .link-connect').click(function() {
        slider.navigateTo('#page-connect', slider.Direction.RIGHT);
    });
    
    //Return To Overview
    $('.return-main-menu').click(function(){
        slider.navigateTo('#page-overview', slider.Direction.LEFT);
    });

    //Contact Us
    $('.link-contact').click(function(){
        slider.navigateTo('#page-contact', slider.Direction.RIGHT);
    });

    //Setup StillThere
    stillthere.timeoutStillThere = 200000;
    stillthere.timeout = 300000;
    stillthere.addEventListener(stillthere.Event.STILL_THERE, function() {
        stillthere.overlay.find('.message').html('Are you still there?');
    });
    stillthere.addEventListener(stillthere.Event.TIMEOUT, function() {
        stillthere.overlay.find('.message').hide();
        main.start();
    });
    
};


//Background Changes
    $(function () {
        var background = $('#bg-screen');
        var backgrounds = [
          'url(images/hero-images/001.jpg) no-repeat center top',
          'url(images/hero-images/002.jpg) no-repeat center top',
          'url(images/hero-images/003.jpg) no-repeat center top'];
        var current = 0;

        function nextBackground() {
            background.css(
                'background',
            backgrounds[current = ++current % backgrounds.length]);

            setTimeout(nextBackground, 12000);
        }
        setTimeout(nextBackground, 12000);
        background.css('background', backgrounds[0]);

    });