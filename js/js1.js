$(function(){
     $(".header li").hover(function(){
        $(this).find("span").stop().animate({width:'100%'},500);
     },function(){
        $(this).find("span").stop().animate({width:'0'},500);
     })


$('.header ul a').click(function(){
	$(this).addClass('in_cur').siblings().removeClass('in_cur');
});

$('.foot .codeImg').eq(0).show();
  $(".codeTab li").mousemove(function(){
    $(".foot .codeImg").hide();
    $(".foot .codeImg").eq($(this).index()).show();
    $(this).addClass('cur');
    $(this).siblings().removeClass('cur');
  });



$(window).scroll(function(){
	var sTop = $('.incon1_jz2').offset().top;
	var sTop1 = $('.incon1_jz2 p').offset().top;
	var sTop2 = $('.incon1_jz1').offset().top;
	// alert(sTop2);
	var wTop = $(window).scrollTop();

	// if(wTop>1 ){
	// 	$('.im_1').addClass('animated fadeInLeft');
	// 	$('.im_2').addClass('animated fadeInRight');
	// }else{
	// 	$('.im_1').removeClass('animated fadeInLeft');
	// 	$('.im_2').removeClass('animated fadeInRight');	
	// }

	if(wTop>1 ){
		$('.kh_lx1').addClass('animated fadeInUp');
	}else{
		$('.kh_lx1').removeClass('animated fadeInUp');	
	}

	if(wTop>500){
		$('.im_3').addClass('animated fadeInLeft');
		$('.im_4').addClass('animated fadeInRight');
	}else{
		$('.im_3').removeClass('animated fadeInLeft');
		$('.im_4').removeClass('animated fadeInRight');	
	}

	if(wTop>580 ){
		$('.kh_lx2').addClass('animated fadeInUp');
	}else{
		$('.kh_lx2').removeClass('animated fadeInUp');	
	}

	if(wTop>1200 ){
		$('.in_con2 ul li').addClass('animated bounceInLeft');
	}else{
		$('.in_con2 ul li').removeClass('animated bounceInLeft');	
	}

	if(wTop>1700 ){
		$('.in_new_le,.app_about').addClass('animated fadeInLeft');
		$('.in_new_ri').addClass('animated fadeInRight');
	}else{
		$('.in_new_le').removeClass('animated1 fadeInLeft');
		$('.in_new_ri').removeClass('animated1 fadeInRight');
	}







})




     
})






	




