$(".item_btn").bind("click",show_lightbox);
$(".lightbox > .item_icon").bind("click",close_lightbox);

var parent;
var count = 0;
var array=[];
sprites_pic_setting(".item_icon");

/* 指定圖片顯示區塊 */
function sprites_pic_setting(str){
	var width = $(window).width();
	var arr = $(str);
	var Xpos = 0;
	var Ypos = 0;

	var delta = 0;
	if(width > 1300){
		delta = -100;
	}
	else if(width < 1300 && width > 500){
		delta = -75;
	}
	else{
		delta = -50;
	}
	for(var i=0;i<arr.length;i++){
		Xpos = (arr[i].id.split("c")[1])%8*delta;
		Ypos = Math.floor(arr[i].id.split("c")[1]/8)*delta;
		$(arr[i]).css({
		  'background-position': Xpos+'px '+Ypos+'px'
		});
	}
}

function show_lightbox(){
	parent = this;
	if(this.className=="item_btn"){
		$(".item_icon").css({
			display: 'inline-block'
		});
		$(".colors").css({
			display: 'none'
		});
	}
	else{
		$(".item_icon").css({
			display: 'none'
		});
		$(".colors").css({
			display: 'inline-block'
		});
	}

	$(".lightbox").css({
		display: 'block'
	});
	$(".lightbox > .item_icon").addClass("zoomIn");
}

function close_lightbox(){
	
	$(".lightbox > .item_icon").removeClass("zoomIn").addClass("zoomOut");
	$(this).removeClass("zoomOut");
	parent.id = this.id;
	sprites_pic_setting(".item_btn");
	var num=$(parent).attr("value");
	/* 修正:將value改成val */
	array[num]=$(this).attr("val");
	setTimeout(function(){
		$(".lightbox").css({
			display: 'none'
		});
		$(".lightbox > .item_icon").removeClass("zoomOut");
	},450);
	isItemEmpty();
}

function isItemEmpty(){
	count = 0;
	for(var i=0;i<3;i++){
		if($(".item_btn")[i].id!=""){
			count++;
			/*改變容器內液體高度*/
			$("#shaker_cup").css({
				background: "url(./images/drink_content_"+count+"-01.png) no-repeat",
				"background-size": "auto 300px"
			});

		}
	}
	if(count==3){
		$("#guide_msg").html("Shake It!");
		$("#shaker_cup").addClass("shake shake-hard");
	}
}


function fbs_click() {
    u = location.href;
    // t = document.title;
    window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) , 'sharer', 'toolbar=0,status=0,width=626,height=436');
    return false;
}

function fbs_like(){
	window.open('http://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fkh.hungry&width&layout=standard&action=like&show_faces=true&share=false&height=80&appId=319598248226896');
}

function replay(){
	// console.log($(".item_btn").attr("id","").css("background-position","0 100px"));
	//array = [];
	$("#shaker_cup").removeClass("shake shake-hard");
	$(".item_btn,#shaker_cup,#guide_msg").fadeIn("slow");
	$("#like_btn,#share_btn,#replay_btn,#drink_name,#description").css("display","none");
	$("#guide_msg").html("Make Your Drink");
	$("#shaker_cup").css({
				background: "url(./images/drink_content_0.png) no-repeat",
				"background-size": "auto 300px"
			});
}
