plug.2autowoot
==============

THE FANCY NEW plud.dj autowoot maybe

var autoqueue; 
var awaitNextDj;
var randtimeout;
var determineAutoqueue;

function initListeners() {
    currentsong = API.getMedia();
    djs = API.getDJs();
     rand();
     setTimeout(function(){ document.getElementById('#woot').click(); },3000);
        
        API.addEventListener(API.DJ_ADVANCE, function( obj ) {
                djs = API.getDJs();
                currentsong = API.getMedia();
                rand();
                setTimeout(function(){ document.getElementById('#woot').click(); },3000);
                }
        API.on(DJ_ADVANCE, fuction(){setTimeout(function(){$("#woot").click();},3000});
        });
