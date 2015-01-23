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
		        	console.log(array);
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


var arr = [];
var count = [];
function test(num){
	var isExist = false;
	var result="";
	for(var i=0;i<num;i++){
		array = [(Math.floor((Math.random() * 60) + 6)).toString(),(Math.floor((Math.random() * 60) + 6)).toString(),(Math.floor((Math.random() * 6))).toString()];	
		result=shake(array);
		for(var j=0;j<arr.length;j++){
			if(result==arr[j]){
				count[j]++;
				isExist = true;
			}
		}
		if(!isExist){
			arr[arr.length] = result;
			count[count.length] = 1;
		}
		isExist = false;
	}
	result = "";
	for(var i=0;i<arr.length;i++){
		result += arr[i]+"<br>";
	}
	for(var i=0;i<count.length;i++){
		result += count[i]+"<br>";
	}
	$(document.body).html(result);
}

function showResult(str){
	$(".item_btn,#shaker_cup,#guide_msg").fadeOut("slow");
	$("#shaker_cup").removeClass("shake shake-hard").fadeIn("slow");
	$("#like_btn,#share_btn,#replay_btn,#drink_name,#description").fadeIn("slow");
	// 調配結果
	$("#drink_name").html(str);
	// $("#description").html("bala bala balabalabala");
}