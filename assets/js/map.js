$(function(){



});

var po = org.polymaps;
var map = po.map()
    .container(document.body.appendChild(po.svg("svg")))
    .add(po.geoJson());
