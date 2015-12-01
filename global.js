$(document).ready(function(){
	contact();
})


function contact(){
	var target = $(".contact");
	var list = $(".contact-info");
	target.bind("click",function(){
		list.fadeIn("slow",function(){
			$(this).css("display","block");
		});
	})
}

