var counter = 0;
var hoverInterval = null;
$(document).ready(function(){
    $("#shaker_cup").hover(function(e){
    	if($("#shaker_cup")[0].className=="pure-u-12-24 shake shake-hard"){
		    counter = 0;
		    hoverInterval = setInterval(function(){
		        counter++;
		        if(counter==1){
		        	clearInterval(hoverInterval);
		        	showResult(shake(array));
		        	counter = 0;
		        }
		    }, 1000);
    	}
    },function(e){
        clearInterval(hoverInterval);
        counter = 0;
    });
});

function showResult(str){
	$(".item_btn,#shaker_cup,#guide_msg").fadeOut("slow");
	$("#shaker_cup").removeClass("shake shake-hard").fadeIn("slow");
	$("#like_btn,#share_btn,#replay_btn,#drink_name,#description").fadeIn("slow");
	// 調配結果
	$("#drink_name").html(str);
	// $("#description").html("bala bala balabalabala");
}