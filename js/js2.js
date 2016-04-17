$(function(){

// 一瓶一瓶
    function mScroll(id){
        $("html,body").stop(true).animate({scrollTop: $("#"+id).offset().top-160}, 1000);
    }


    $(".yede_ul li").click(function(){
        var index = $(this).index()+1;
        mScroll("proSub_"+index);
        $(this).addClass('yede_curr').siblings().removeClass('yede_curr');
    });

if($('.yede_qie').length > 0){ 
$(window).scroll(function(){
        var size = $('.yede_ul li').size(),
            sTop = $(window).scrollTop(),
            index = 1,
            proTop0 = $('#proSub_1').offset().top,
            proTop1 = $('#proSub_2').offset().top,
            proTop2 = $('#proSub_3').offset().top,
            proTop3 = $('#proSub_4').offset().top,
            proTop4 = $('#proSub_5').offset().top;
        if(sTop < proTop1){
            index = 0;
        }else if(sTop < proTop2){
            index = 1;
        }else if(sTop < proTop3){
            index = 2;
        }else if(sTop < proTop4){
            index = 3;
        }else{
            index = 4;
        }

        // $('.yede_ul li').eq(index).addClass('yede_curr').siblings().removeClass('yede_curr');
    }) }
   
})

