plug.2autowoot
==============

THE FANCY NEW plud.dj autowoot maybe

var autoqueue; 
var awaitNextDj;
var randtimeout;
var determineAutoqueue;

var allowedToAutoDJ=true;
var outsideMessageToSay='';
var newMessage=false;

//create hidden blank popup for later use:
var popup = document.createElement('div');
$(popup).css('display','none');
$(popup).attr('id','ScriptPopup');
$('body').append(popup);

function launchHTMLPopup(popupText){
    $('#ScriptPopup').text(popupText);
    $('#ScriptPopup').dialog({
                autoOpen: true,
                modal: true,
                buttons: {
                "OK":function() { $(this).dialog("close") }
                }
        });
}


function determineAutoqueue() {
        var input = prompt("Would you like to enable auto-queueing?", "yes/no  (not case sensitive)").toLowerCase();
        if (input == "yes") {
                autoqueue = true;
        }
        else if (input == "no") {
                autoqueue = false;
        } 
        else   {
                alert("You didn't validly tell me whether you want to enable auto-queueing or not... please run the script again..");     
        }                                 
                
}


function addtoQueue(){
     document.getElementById('button-dj-waitlist-join').click();
}

function initListeners() {
    currentsong = API.getMedia();
    djs = API.getDJs();
     rand();
     setTimeout(function(){ document.getElementById('#woot').click(); },randtimeout);
        
        API.addEventListener(API.DJ_ADVANCE, function( obj ) {
                djs = API.getDJs();
                currentsong = API.getMedia();
                rand();
                setTimeout(function(){ document.getElementById('#woot').click(); },randtimeout);
                }
        });
}

var updatePrefs;

        //getOutsideSettings();
    
    });
