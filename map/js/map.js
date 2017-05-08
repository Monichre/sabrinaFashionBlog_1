var $map = $('.map');
var $mapOverlay = $('.map-overlay');
var $logo = $('.map-logo');
var $logoLine = $('.logo-line');
var $logoLineLoader = $('.logo-line-loader');

var $helloMessage = $('.hello-message');
var $mapPin = $('.map-pin');

var $menu = $('.menu');

var $button = $('.travel-header');
var $restart = $('.button-restart');
// var $explore = $('.explore');
var $borrough = $('.borrough-header');

//TIMELINE
var timeline = new TimelineMax({
    paused: true
});


var timelineClose = new TimelineMax({
    paused: true
});

TweenMax.set("#hello", {
    perspective: 1000
});

timeline.add(function() {
        console.log(timeline.progress())
    })
    .add("preLoad")
    .to($logoLine, 0.3, {
        opacity: 1,
        ease: Back.easeInOut
    }, "preLoad")
    .add("loading")
    .to($logoLineLoader, 1.6, {
        width: "100%",
        ease: Power4.easeOut
    }, "loading")
    .add("loadMap")
    .to($logo, 0.8, {
        autoAlpha: 0,
        y: -30,
        ease: Back.easeInOut
    }, "preloadMap")
    .fromTo($helloMessage, 1, {
        y: -30,
        autoAlpha: 0
    }, {
        y: 0,
        autoAlpha: 1,
        delay: 0.6,
        ease: Back.easeInOut
    }, "preloadMap")

    .add("loadMap")
    .to($helloMessage, 0.8, {
        y: -50,
        ease: Power4.easeInOut
    }, "loadMap")
    .to($mapOverlay, 0.8, {
        autoAlpha: 0,
        ease: Power4.easeInOut
    }, "loadMap")
    .to($map, 1.6, {
        backgroundSize: "100% 100%",
        ease: Back.easeOut
    }, "loadMap")
    .add("pinDrop")
    .staggerFromTo($mapPin, 1, {
        opacity: 0,
        y: -15,
        scale: 1.1
    }, {
        opacity: 1,
        y: 0,
        ease: Elastic.easeOut
    }, 0.075, "pinDrop")
    .fromTo($borrough, 0.8, {
        y: -20,
        autoAlpha: 0
    }, {
        y: -40,
        delay: 0.2,
        autoAlpha: 1,
        ease: Back.easeInOut
    }, "pinDrop");

timelineClose.add(function() {
        console.log(timelineClose.progress())
    })
    .add("closeMap")
    .to($map, 0.8, {
        scale: 0.25,
        left: "-40%",
        autoAlpha: 0,
        delay: 0.4,
        ease: Power4.easeInOut
    }, "closeMap")
    .fromTo($menu, 0.6, {
        autoAlpha: 0,
        scale: 0.2
    }, {
        autoAlpha: 1,
        scale: 1,
        delay: 0.8,
        ease: Elastic.easeOut
    }, "closeMap")
    .to($restart, 0.2, {
        autoAlpha: 1
    });

//PLAY ON CLICK
$button.on('click', function() {
    timeline.play();
    TweenMax.to($button, 0.2, {
        autoAlpha: 0
    });
});

$mapPin.on('click', function() {
    timelineClose.play();
});

$restart.on('click', function() {
    timeline.restart().pause();
    timelineClose.restart().pause();
    TweenMax.to($button, 0.2, {
        autoAlpha: 1
    });
});

$menu.on('click', function() {
    if ($(this).attr('data-toggle') == 'closed') {
        timelineClose.reverse();
    } else if ($(this).attr('data-toggle') == 'opened') {
        timelineClose.play();
    }
});
