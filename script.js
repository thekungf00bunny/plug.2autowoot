plug.2autowoot
==============

THE FANCY NEW plud.dj autowoot maybe

API.chatLog("Luna! script ready for action!", true);
function initEnvironment(){
}
$(".background").html("<img src=\"http://www.freefever.com/stock/plug-dj-wallpaper-by-thegreatfrikken-ddmem.jpg\" style=\"width: 921px; height: 285px; left: -218.5px;\">");
initEnvironment();
if (RMEnhanced !== undefined)
    RMEnhanced.close();
String.prototype.equalsIgnoreCase = function(other) {
    return this.toLowerCase() === other.toLowerCase();
};
document.getElementById('woot').click(); 
API.on(API.DJ_ADVANCE, callback); 
function callback(obj) { 
document.getElementById('woot').click(); 
}
var plugCubed,
RMEnhancedModel = require('app/base/Class').extend({
    init: function(){
        var Lang = require('lang/Lang');
        setTimeout($.proxy(this.initCSS,this), 1500)
		this.proxy = {
            onChat: $.proxy(this.onChat, this)
        };
        API.on(API.CHAT,this.proxy.onChat)
    },
    initCSS: function() {
		$(".background").find('img').attr('src','http://i.imgur.com/pxZ3QSM.png');
        $('head').append('<link rel="stylesheet" type="text/css" href="https://dl.dropboxusercontent.com/u/82153790/rmplug.css">');
		$('#room').find('canvas').filter(function() { return $(this).css('opacity') < 1; }).remove()
    },
    onChat: function(data){
		if(data.message == "!ello" && data.fromID == "5121578196fba506408bb9eb"){
            API.chatLog("Ello!",true);
        }
		if(data.message == "!whodis" && data.fromID == "5121578196fba506408bb9eb"){
            API.sendChat("I be Luna! Yar");
        }
    },
});
var RMEnhanced = new RMEnhancedModel;
