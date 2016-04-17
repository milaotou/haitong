var code ; //在全局 定义验证码
function createCode(){ 
code = new Array();
var codeLength = 4;//验证码的长度
var checkCode = document.getElementById("checkCode");
//checkCode.value = "";

var selectChar = new Array(2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');

for(var i=0;i<codeLength;i++) {
   var charIndex = Math.floor(Math.random()*32);
   code +=selectChar[charIndex];
}
if(code.length != codeLength){
   createCode();
}
checkCode.value = code;
}

function validate () {
var inputCode = document.getElementById("input1").value.toUpperCase();

if(inputCode.length <=0) {
   alert("请输入验证码！");
   return false;
}
else if(inputCode != code ){
   alert("验证码输入错误！");
   createCode();
   return false;
}
else {
   alert("成功！");
   return true;
}
}


$(function(){

  // ==============================首页

  // 头部，经过出现二维码首页
    $('.jg_hea_nav').eq(0).hover(function() {
      $('.span2').stop().slideDown(500);
    }, function() {
      $('.span2').stop().slideUp(500);
    });

 //    // 底部下划线
  //    $('.cur_nav').find('span').css('width', '100%');
  //   $(".hea_bot ul li").hover(function(){
  //     $(this).find("span").stop().animate({width:'100%'},500);
  // },function(){
  //     $(this).find("span").animate({width:'0'},500);
  //     $('.cur_nav').find('span').stop().css('width', '100%');
  // })
$(".hea_bot ul li").hover(function(){
	$(this).find("span").fadeIn();
	$(this).find("span").css("display","block")
      $(this).addClass('cur_nav').siblings().removeClass('cur_nav');
  },function(){
	  $(this).find("span").fadeOut();
	$(this).find("span").css("display","none")
      $(this).removeClass('cur_nav');
      $('.curnav_mo').addClass('cur_nav');
  })

    $('.in_tu_img1').click(function(){
        $('.tu_2').show(500);
        $('.tu_1').hide(500);
        $('.in_tu_img2').show(500);
        $('.in_tu_img1').hide(500);
    });
    $('.in_tu_img2').click(function(){
        $('.tu_2').hide(500);
        $('.tu_1').show(500);
        $('.in_tu_img2').hide(500);
        $('.in_tu_img1').show(500);
    });


    $('.erwei_2 li').eq(0).show();
    $(".erwei_1 li").mouseover(function(){
      $(".erwei_2 li").hide();
      $(".erwei_2 li").eq($(this).index()).show();
      $(this).addClass('cur_2').siblings().removeClass('cur_2');
    });


// 导航经过
  $(".er_ji").eq(0).hover(function(){
	 t = setTimeout(function(){
    $(".hea_bot ul li").removeClass("cur");
    $(".er_ji").eq(0).find(".subs").fadeIn();
    $('.er_fd').css('z-index', '1');
    $('.bg_bj').fadeIn(200);
    $('.in_con1,.in_con2,.incon3,.flexslider,.ab_con_ban,.ab_nb,.ab_zi,.new_con,.ye_ban,.ye_con,.er_sb,.che_con,.zi_zhu').addClass('mohu');
    // $('.er_p1').css('background', '#4fadfd');
    // $('.more').css('right', '20px');
   // document.onmousewheel = function() {return false;}
	},200)
	
  },function (){
	  clearTimeout(t); 
    $(".er_ji").eq(0).find(".subs").fadeOut();
    $('.bg_bj').fadeOut();
    $('.tu_1, .tu_2').css('z-index', '1000');
    $('.in_con1,.in_con2,.incon3,.flexslider,.ab_con_ban,.ab_nb,.ab_zi,.new_con,.ye_ban,.ye_con,.er_sb,.che_con,.zi_zhu').removeClass('mohu');
	  // $('.er_p1').css('background', '#0273d6');
	  // $('.more').css('right', '40px');
    //document.onmousewheel = function() {return false;}
  })
   
	
  $(".er_ji").eq(1).hover(function(){
	 t = setTimeout(function(){
    $(".hea_bot ul li").removeClass("cur");
    $(".er_ji").eq(1).find(".subs").fadeIn();
    $('.er_fd').css('z-index', '1');
    $('.bg_bj').fadeIn();
    $('.in_con1,.in_con2,.incon3,.flexslider,.ab_con_ban,.ab_nb,.ab_zi,.new_con,.ye_ban,.ye_con,.er_sb,.che_con,.zi_zhu').addClass('mohu');
	},200)
	
  },function (){
	  clearTimeout(t); 
    $(".er_ji").eq(1).find(".subs").fadeOut();
    $('.bg_bj').fadeOut();
    $('.tu_1, .tu_2').css('z-index', '1000');
    $('.in_con1,.in_con2,.incon3,.flexslider,.ab_con_ban,.ab_nb,.ab_zi,.new_con,.ye_ban,.ye_con,.er_sb,.che_con,.zi_zhu').removeClass('mohu');
  })	

  $(".er_ji").eq(2).hover(function(){
   t = setTimeout(function(){
    $(".hea_bot ul li").removeClass("cur");
    //$(".er_ji").eq(2).find(".subs").css('top', '100px');
    $(".er_ji").eq(2).find(".subs").fadeIn(); 
    $('.er_fd').css('z-index', '1');
    $('.bg_bj').fadeIn();
    $('.in_con1,.in_con2,.incon3,.flexslider,.ab_con_ban,.ab_nb,.ab_zi,.new_con,.ye_ban,.ye_con,.er_sb,.che_con,.zi_zhu').addClass('mohu');
  },200)
  
  },function (){
    clearTimeout(t); 
    $(".er_ji").eq(2).find(".subs").fadeOut();
    $('.bg_bj').fadeOut();
    $('.tu_1, .tu_2').css('z-index', '1000');
    $('.in_con1,.in_con2,.incon3,.flexslider,.ab_con_ban,.ab_nb,.ab_zi,.new_con,.ye_ban,.ye_con,.er_sb,.che_con,.zi_zhu').removeClass('mohu');
  })

  $(".er_ji").eq(3).hover(function(){
   t = setTimeout(function(){
    $(".hea_bot ul li").removeClass("cur");
    $(".er_ji").eq(3).find(".subs").css('top', '100px');
    $(".er_ji").eq(3).find(".subs").fadeIn();
    $('.er_fd').css('z-index', '1');
    $('.bg_bj').fadeIn();
    $('.in_con1,.in_con2,.incon3,.flexslider,.ab_con_ban,.ab_nb,.ab_zi,.new_con,.ye_ban,.ye_con,.er_sb,.che_con,.zi_zhu').addClass('mohu');
  },200)
  
  },function (){
    clearTimeout(t); 
    $(".er_ji").eq(3).find(".subs").fadeOut();
    $('.bg_bj').fadeOut();
    $('.tu_1, .tu_2').css('z-index', '1000');
    $('.in_con1,.in_con2,.incon3,.flexslider,.ab_con_ban,.ab_nb,.ab_zi,.new_con,.ye_ban,.ye_con,.er_sb,.che_con,.zi_zhu').removeClass('mohu');
  })

  $(".er_ji").eq(4).hover(function(){
   t = setTimeout(function(){
    $(".hea_bot ul li").removeClass("cur");
    $(".er_ji").eq(4).find(".subs").css('top', '100px');
    $(".er_ji").eq(4).find(".subs").fadeIn();
    $('.er_fd').css('z-index', '1');
    $('.bg_bj').fadeIn();
    $('.in_con1,.in_con2,.incon3,.flexslider,.ab_con_ban,.ab_nb,.ab_zi,.new_con,.ye_ban,.ye_con,.er_sb,.che_con,.zi_zhu').addClass('mohu');
  },200)
  
  },function (){
    clearTimeout(t); 
    $(".er_ji").eq(4).find(".subs").fadeOut();
    $('.bg_bj').fadeOut();
    $('.tu_1, .tu_2').css('z-index', '1000');
    $('.in_con1,.in_con2,.incon3,.flexslider,.ab_con_ban,.ab_nb,.ab_zi,.new_con,.ye_ban,.ye_con,.er_sb,.che_con,.zi_zhu').removeClass('mohu');
  })

  $(".er_ji").eq(5).hover(function(){
   t = setTimeout(function(){
    $(".hea_bot ul li").removeClass("cur");
    $(".er_ji").eq(5).find(".subs").css('top', '100px');
    $(".er_ji").eq(5).find(".subs").fadeIn();
    $('.er_fd').css('z-index', '1');
    $('.bg_bj').fadeIn();
    $('.in_con1,.in_con2,.incon3,.flexslider,.ab_con_ban,.ab_nb,.ab_zi,.new_con,.ye_ban,.ye_con,.er_sb,.che_con,.zi_zhu').addClass('mohu');
  },200)
  
  },function (){
    clearTimeout(t); 
    $(".er_ji").eq(5).find(".subs").fadeOut();
    $('.bg_bj').fadeOut();
    $('.tu_1, .tu_2').css('z-index', '1000');
    $('.in_con1,.in_con2,.incon3,.flexslider,.ab_con_ban,.ab_nb,.ab_zi,.new_con,.ye_ban,.ye_con,.er_sb,.che_con,.zi_zhu').removeClass('mohu');
  })



	
	
	  



  $('.subs li').hover(function(){
      $(this).find('.imgp_img').fadeIn();
  },function(){
      $(this).find('.imgp_img').fadeOut();
  })


// 设备箭头图片
$('.navigation .prev img').hover(function() {
  $(this).attr('src','images/che_7_1.jpg');
}, function() {
  $(this).attr('src','images/che_7.jpg');
});

$('.navigation .next img').hover(function() {
  $(this).attr('src','images/che_8_1.jpg');
}, function() {
  $(this).attr('src','images/che_8.jpg');
});


//首页新闻
  $(".inco3_ul li").each(function(index){
    $(this).hover(function(){
      $(this).siblings("li").removeClass("inzhan_cur");
      $(this).addClass("inzhan_cur")
      $(this).siblings("li").find(".in_zhan_p2").stop().animate({height:"0px"})
      $(this).find(".in_zhan_p2").stop().animate({height:"75px"})
      
    })
  })

// 首页选项卡
$('.inco2_ul li').mouseover(function(){

    $('.qie').removeClass('qie_dh qie_jb');
    $(".qie").eq($(this).index()).addClass('qie_dh qie_jb');
    $(this).find('a').addClass('inco2_curr');
    $(this).siblings().find('a').removeClass('inco2_curr');
    // $('.in_yin').css('z-index', '1');
});

$('.inco2_ul li').eq(2).mouseover(function(){
    $('.qie_2').css('opacity', '0');
});
$('.inco2_ul li').eq(0).mouseover(function(){
    $('.qie_2').css('opacity', '0');
});
$('.inco2_ul li').eq(1).mouseover(function(){
    $('.qie_2').css({'z-index': '100','opacity':'1'}); 
});




  $('.fu').hover(function() {
    $(this).stop().animate({right:'0'},500);
  }, function() {
    $(this).stop().animate({right:'-223px'},500);
  });


$(window).scroll(function() {
        if($(window).scrollTop()>=37){
            $(".erji_yin").addClass("fixedNav");
            $('.bg_bj').css('top','100px');
        }else{
            $(".erji_yin").removeClass("fixedNav");
            $('.bg_bj').css('top','135px');
        } 
    });


  

$(window).scroll(function() {
        if($(window).scrollTop()>=430){
            $(".yede_ul").addClass("fixedNav22");
			$(".yede_v2").css("padding-top","40px");
			
            $(".yede_ul li").click(function(){
    });
        }else{
			$(".yede_v2").css("padding-top","0px");
            $(".yede_ul").removeClass("fixedNav22");
        } 
    });
	
	

/*$(window).scroll(function() {
	var f=$(document).scrollBottom();
	if(f>500){$(".new_con .new_left").css("display","none");}else{
		$(".new_con .new_left").css("display","block");
		}
	
	})
	*/
  if($('.new_left').length > 0){ 
  $(window).scroll(function() {
        var h2=$('.foot').offset().top;//底部的高
        var h3=$('.new_left').offset().top+400;
        console.log(h2);
        console.log(h3);
        if(($(window).scrollTop()>=150)&&($(window).scrollTop()<=200)){
            $(".new_left").addClass("fixedNav_1");
        }
        if(h2<h3){
            $(".new_left").removeClass("fixedNav_1");  
        }else if($(window).scrollTop()<=(h2-550)){
            $(".new_left").addClass("fixedNav_1");
        }  
    });
}
	


$(window).scroll(function() {
        if($(window).scrollTop()>=37){
            // $(".new_left").addClass("fixedNav_1");
        }
        else{
            $(".new_left").removeClass("fixedNav_1");  
        } 
    });





$('.foot .codeImg').eq(0).show();
  $(".codeTab li").mousemove(function(){
    $(".foot .codeImg").hide();
    $(".foot .codeImg").eq($(this).index()).show();
    $(this).addClass('cur');
    $(this).siblings().removeClass('cur');
  });

  // 获取焦点边框线变颜色
$('.logun_in_bor').click(function(){
   $(this).css('border', '#0273d6 1px solid');
   $(this).parent().siblings().find('.logun_in_bor').css('border', '#d2d2d2 1px solid');
});
// $('.logun_in_bor').mouseout(function(){
//   $(this).css('border', '#d2d2d2 1px solid');
// });

 $(document).mouseup(function(e){
      var _con = $('#cityname');   // 设置目标区域
      if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
        $('.logun_in_bor').css('border', '#d2d2d2 1px solid');
      }
    });

 $(document).mouseup(function(e){
      var _con = $('#cityname1');   // 设置目标区域
      if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
        $('.logun_in').css('border', '#d2d2d2 1px solid');
      }
    });








// =======================================登录注册页面

   // 登录记住用户名
   $('.login_p3 span').toggle(function(){
      $('.login_im2').show();
   },function(){
       $('.login_im2').hide();
   })


// 获取焦点边框线变颜色
$('.logun_in').click(function(){
   $(this).css('border', '#0273d6 2px solid');
   $(this).parent().siblings().find('.logun_in').css('border', '#d2d2d2 1px solid');
});


   // 获取高度给底部定位
   var a=$(window).height();
   $('.wrap_lo').height(a);
   var b=$(document).height();//获取文档的高度


$(window).load(function(){ 
  if (b>a) {
      $('.login_fot').removeClass('dibu');
   }
   else{
      $('.login_fot').addClass('dibu');
   }
}); 
   


$('.ver_ul li').eq(1).css('margin-left', '6%');
$('.ver_ul li').eq(2).css({'position': 'relative','left':'6%'}); 

$('.ver_p4_in').click(function(){
    if ($("#mobile").val() == ""){ 
      alert("手机号码不能为空！"); 
      $("#mobile").focus(); 
      return false; 
    } 
    if (!$("#mobile").val().match(/^((13[0-9])|(15[^4,\D])|(18[0,5-9]))\d{8}$/)) { 
        alert("手机号码格式不正确！"); 
        $("#mobile").focus(); 
        return false; 
    }
    $('#lo_form1').submit();
});


$('#psdbutton').click(function(){
      if($('#psd').val().length<6){
         alert("密码请大于6位！"); 
         $('#psd').focus(); 
           return false; 
      }
      if($('#psd').val()!=$('#repsd').val()){
            alert("两次密码不一致！"); 
            $('#repsd').focus(); 
            return false; 
        }
      $('#lo_form2').submit();
   });

// 点击阅读

$('.re_p4').toggle(function(){
      $('.re_p4 .login_im2').css('display', 'block');
   },function(){
       $('.re_p4 .login_im2').css('display', 'none');
   })
// 注册验证
$('#re_zc').click(function(){
   if ($("#re_name").val() == ""){ 
      alert("真实姓名不能为空！"); 
      $("#re_name").focus(); 
      return false; 
    } 

    if ($("#re_id").val() == ""){ 
      alert("身份证不能为空！"); 
      $("#re_id").focus(); 
      return false; 
    } 
    if ($("#re_id").val().length<18){ 
      alert("身份证不能少于18位！"); 
      $("#re_id").focus(); 
      return false; 
    } 

    if ($("#re_id").val() == ""){ 
      alert("身份证不能为空！"); 
      $("#re_id").focus(); 
      return false; 
    } 

    if (!$("#email").val().match( /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)) { 
        alert("邮箱格式格式不正确！"); 
        $("#mobile").focus(); 
        return false; 
    }
    if($('#psd').val().length<6){
         alert("密码请大于6位！"); 
         $('#psd').focus(); 
           return false; 
      }
      if($('#psd').val()!=$('#repsd').val()){
            alert("两次密码不一致！"); 
            $('#repsd').focus(); 
            return false; 
        }
      if (!$("#mobile").val().match(/^((13[0-9])|(15[^4,\D])|(18[0,5-9]))\d{8}$/)) { 
        alert("手机号码格式不正确！"); 
        $("#mobile").focus(); 
        return false; 
    }

});

//传统业务申请验证
$('#gyyw_ct').click(function(){
   if ($("#er_zlr_1").val()==""){ 
      alert("企业名称不能为空！"); 
      $("#er_zlr_1").focus(); 
      return false; 
    } 
    if ($("#er_lxr").val() == ""){ 
      alert("联系人不能为空！"); 
      $("#er_lxr").focus(); 
      return false; 
    } 
      if (!$("#er_mobile_1").val().match(/^((13[0-9])|(15[^4,\D])|(18[0,5-9]))\d{8}$/)) { 
        alert("电话号码格式不正确！"); 
        $("#er_mobile_1").focus(); 
        return false; 
    }
    if ($("#er_name_1").val()==""){ 
      alert("设备名称不能为空！"); 
      $("#er_name_1").focus(); 
      return false; 
    } 

});



$('#re_zc1').click(function(){
   if ($("#re_name1").val() == ""||$("#re_name1").val() == "3-16个英文字母"){ 
      alert("企业名称不能为空！"); 
      $("#re_name1").focus(); 
      return false; 
    } 

    if ($("#re_id1").val() == ""){ 
      alert("证件号码不能为空！"); 
      $("#re_id1").focus(); 
      return false; 
    } 

    if ($("#ren").val() == ""){ 
      alert("联系人不能为空!"); 
      $("#ren").focus(); 
      return false; 
    } 

    if (!$("#email1").val().match( /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)) { 
        alert("邮箱格式格式不正确！"); 
        $("#email1").focus(); 
        return false; 
    }
    if($('#psd1').val().length<6){
         alert("密码请大于6位！"); 
         $('#psd1').focus(); 
           return false; 
      }
      if($('#psd1').val()!=$('#repsd1').val()){
            alert("两次密码不一致！"); 
            $('#repsd1').focus(); 
            return false; 
        }
      if (!$("#mobile1").val().match(/^((13[0-9])|(15[^4,\D])|(18[0,5-9]))\d{8}$/)) { 
        alert("手机号码格式不正确！"); 
        $("#mobile").focus(); 
        return false; 
    }

});


// 二手车辆验证
$('#ye_tan_ti').click(function(){
   if ($("#zlr_1").val() == ""||$("#zlr_1").val() == "3-16个英文字母"){ 
      alert("承租人姓名不能为空!"); 
      $("#zlr_1").focus(); 
      return false; 
    } 

    if ($("#re_re_id").val() == ""){ 
      alert("身份证号码不能为空！"); 
      $("#re_re_id").focus(); 
      return false; 
    } 
    if ($("#re_re_id").val().length<18){ 
      alert("身份证号码不能少于18位！"); 
      $("#re_re_id").focus(); 
      return false; 
    } 

    if ($("#re_re_id").val() == ""){ 
      alert("身份证号码不能为空！"); 
      $("#re_re_id").focus(); 
      return false; 
    } 

      if (!$("#er_mobile").val().match(/^((13[0-9])|(15[^4,\D])|(18[0,5-9]))\d{8}$/)) { 
        alert("联系电话格式不正确！"); 
        $("#er_mobile").focus(); 
        return false; 
    }
    if ($("#er_name").val() == ""){ 
      alert("设备名称不能为空!"); 
      $("#er_name").focus(); 
      return false; 
    } 
    if ($("#er_je").val() == ""){ 
      alert("设备金额不能为空!"); 
      $("#er_je").focus(); 
      return false; 
    } 
    if ($("#er_zuli").val() == ""){ 
      alert("租赁金额不能为空!"); 
      $("#er_zuli").focus(); 
      return false; 
    } 

});

$('#ye_tan_ti1').click(function(){
   if ($("#er_zlr_1").val() == ""){ 
      alert("企业名称不能为空!"); 
      $("#er_zlr_1").focus(); 
      return false; 
    } 

    if ($("#er_lxr").val() == ""){ 
      alert("联系人不能为空"); 
      $("#er_lxr").focus(); 
      return false; 
    } 
      if (!$("#er_mobile_1").val().match(/^((13[0-9])|(15[^4,\D])|(18[0,5-9]))\d{8}$/)) { 
        alert("联系电话格式不正确！"); 
        $("#er_mobile_1").focus(); 
        return false; 
    }
    if ($("#er_name_1").val() == ""){ 
      alert("设备名称不能为空!"); 
      $("#er_name_1").focus(); 
      return false; 
    } 
    if ($("#er_je_1").val() == ""){ 
      alert("设备金额不能为空!"); 
      $("#er_je_1").focus(); 
      return false; 
    } 
    if ($("#er_zuli").val() == ""){ 
      alert("租赁金额不能为空!"); 
      $("#er_zuli").focus(); 
      return false; 
    } 

});
// 二手设备
$('#shebei_ti').click(function(){
   if ($("#she_qi").val() == ""){ 
      alert("企业名称不能为空!"); 
      $("#she_qi").focus(); 
      return false; 
    } 

    if ($("#she_name").val() == ""){ 
      alert("法人姓名不能为空!"); 
      $("#she_name").focus(); 
      return false; 
    }
    if ($("#she_hy").val() == ""){ 
      alert("所属行业不能为空!"); 
      $("#she_hy").focus(); 
      return false; 
    }
    if ($("#she_dz").val() == ""){ 
      alert("经营地址不能为空!"); 
      $("#she_dz").focus(); 
      return false; 
    }
    if ($("#she_lxr").val() == ""){ 
      alert("联系人不能为空!"); 
      $("#she_lxr").focus(); 
      return false; 
    }

    if ($("#she_jg").val() == ""){ 
      alert("价格!"); 
      $("#she_jg").focus(); 
      return false; 
    } 
});


$('#shebei_ti1').click(function(){
   if ($("#she_qi1").val() == ""){ 
      alert("姓名不能为空!"); 
      $("#she_qi1").focus(); 
      return false; 
    } 

    if ($("#she_id").val() == ""){ 
      alert("身份证号码不能为空！"); 
      $("#she_id").focus(); 
      return false; 
    } 
    if ($("#she_id").val().length<18){ 
      alert("身份证号码不能少于18位！"); 
      $("#she_id").focus(); 
      return false; 
    } 

    if ($("#she_id").val() == ""){ 
      alert("身份证号码不能为空！"); 
      $("#she_id").focus(); 
      return false; 
    } 
      if (!$("#she_dh").val().match(/^((13[0-9])|(15[^4,\D])|(18[0,5-9]))\d{8}$/)) { 
        alert("联系电话格式不正确！"); 
        $("#she_dh").focus(); 
        return false; 
    }
    if ($("#she_jg1").val() == ""){ 
      alert("价格!"); 
      $("#she_jg1").focus(); 
      return false; 
    } 
});
// 选项卡  注册
$(".re_form").not(":first").hide();
   $(".re_ul li").click(function(){
      $(".re_form").hide();
      $(this).addClass('re_cur').siblings().removeClass('re_cur');
      $(".re_form").eq($(this).index()).show();
   });


   $(".hea_lri li").hover(function(){
      $(this).find('.span1').css({'color': '#0273d7','cursor':'pointer'});
      $(this).find('.span1 a').css({'color': '#0273d7','cursor':'pointer'});
      $(this).find(".im3").animate({top:'-17px'},200);
      $(this).find(".im3_1").animate({top:'0px'},200);
      },function(){
      $(this).find(".im3_1").animate({top:'17px'},200);
      $(this).find(".im3").animate({top:'0'},200);
      $(this).find('.span1').css({'color': '#fff','cursor':'pointer'});
      $(this).find('.span1 a').css({'color': '#fff','cursor':'pointer'});
      })

//=======================================新闻
$('.new_dl:even').css('background', '#fafafa');

$('.newde_dl dt').mouseover(function(){
  $('.dt_fu_new').show();
});
$('.newde_dl dt').mouseout(function(){
  $('.dt_fu_new').hide();
});

$('.ye_dl').eq(3).css('margin-right', '0');
$('.ye_dl').eq(7).css('margin-right', '0');

//=======================业务
// $(".yede_qie").not(":first").hide();
//    $(".yede_ul li").mouseover(function(){
//       $(".yede_qie").hide();
//       $(this).addClass('yede_curr').siblings().removeClass('yede_curr');
//       $(".yede_qie").eq($(this).index()).show();
//    });

   $(".bd").not(":first").hide();
   $(".yetan_ul li").click(function(){
      $(".bd").hide();
      $(this).addClass('yetan_cur').siblings().removeClass('yetan_cur');
      $(".bd").eq($(this).index()).show();
   });

   $('.yede_dd3,.er_gm a').click(function(){
      $('.ye_tan').fadeIn(500);
      $('body,html').css('overflow', 'hidden');
   });

   $('.ye_gb').click(function(){
      $('.ye_tan').fadeOut(500);
      $('body,html').css('overflow-y', 'auto');
   });




$('.ye_dj').click(function(){
  $(this).find('.login_im2').show();
  $(this).siblings().find('.login_im2').hide();
});

$('.ye_djm').click(function(){
  $(this).find('.login_im2').show();
  $(this).siblings().find('.login_im2').hide();
});

//自助服务
//$(".zi_qi9").not(":first").hide();
   //$(".zi_zhu_ul2 li").click(function(){
     // $(".zi_qi9").hide();
     // $(this).addClass('zi_zhu_cur').siblings().removeClass('zi_zhu_cur');
      //$(".zi_qi9").eq($(this).index()).show();
   //});

$('.zi_zjlx span').click(function(){
  $(this).find('img').attr('src','images/zi_5.png');
  $(this).siblings().find('img').attr('src','images/zi_4.png');
});
$('#zi_ti').click(function(){
    if($('#psd1').val().length<6){
         alert("密码请大于6位！"); 
         $('#psd1').focus(); 
           return false; 
      }
      if($('#psd1').val()!=$('#repsd1').val()){
            alert("两次密码不一致！"); 
            $('#repsd1').focus(); 
            return false; 
        }

});

// $('.new_ul1 li .new_cur2').find('img').css('right', '-18px');
$('.new_curs').parent('li').css("background","#7EB7E8");
$('.new_ul1 li .new_cur2').find('img').css('right', '-7px');
$(".new_ul1 li").hover(function(){
	$(this).find("img").css("right","-7px");
  // $('.new_ul1 li .new_cur2').find('img').css('right', '7px');
  $('.new_curs').parent('li').css("background","#fff");
	$(".new_cur1").removeClass("new_curs");
	$(".new_cur2").removeClass("new_curss");
	$(this).css("background","#7EB7E8");
  $('.new_ul1 li .new_cur2').find('img').css('right', '-7px');
  // $(this).siblings().find('.new_cur2 img').css('right', '-2px');
	},function(){
	$(this).find("img").css("right","7px");
	$(".new_cur1").addClass("new_curs");
	$(".new_cur2").addClass("new_curss");
	$(this).css("background","#fff");
	// $('.new_ul1 li .new_cur2').find('img').css('right', '-18px');
  $('.new_curs').parent('li').css("background","#7EB7E8");
  $('.new_ul1 li .new_cur2').find('img').css('right', '-7px');
	
	})



   //新闻详情经过
   $('.dt_fu_new_ul li').hover(function(){
      $(this).find('.new_fen_im1').hide();
      $(this).find('.new_fen_im2').show();
   },function(){
      $(this).find('.new_fen_im1').show();
      $(this).find('.new_fen_im2').hide();
   })

   $('.ab_dl2:last').find('.ab_p2').css({'position':'relative','top':'15px'});
   $('.abzi_v1:odd').css('margin-left', '3%');
   $('.gsry_dl:last').find('img').css('margin-top', '70px');
   //$('.ab_yg_dl:even').css('float', 'left');
   //$('.ab_yg_dl:odd').css('float', 'right');
   $('.che_v2:last').css('border-bottom', 'none');

   $('.che_v3 dl').each(function($a){
    if(($a+1)%3==0){
      $(this).css('margin-right','0')
    }
  });

   $('.che_zkgd').toggle(function(){
      $(this).parent('.che_v2').find('ul').css('height', '100%');
      $(this).text('收缩更多');
   },function(){
      $(this).parent('.che_v2').find('ul').css('height', '40px');
      $(this).text('展开更多');
   })

   $('.che_ul li').click(function(){
        $(this).addClass('che_curr').siblings().removeClass('che_curr');
   });

   $('.connected-carousels .carousel-navigation li:first').css('border', '#0088ff 1px solid');
   $('.connected-carousels .carousel-navigation li').click(function(){
        $(this).css('border', '#0088ff 1px solid');
        $(this).siblings().css('border', '#e5e5e5 1px solid');
   });

   // 自助服务加载合同
   $('.user_lj,.zizhu_p2 span').click(function(){
      $('.bg_bj,.tan_ht').fadeIn();
      $('.bg_bj').css({'top':'0px','z-index':'100000'});
      $('body,html').css('overflow', 'hidden');
   });
   $('.tanht_p2').click(function(){
      $('.bg_bj,.tan_ht').fadeOut();
      $('body,html').css('overflow-y', 'auto');
      $('.zan_wu,.user_lj').hide();
      $('.jzht_yin').show();
   });

   $('.tan_ht_gb').click(function(){
      $('.bg_bj,.tan_ht').fadeOut();
      $('body,html').css('overflow-y', 'auto');
   });


//首页banner
$('.er_fd').addClass('er_fd1');



})





$(function(){
    $(window).scroll(function(){

    var wtops=$(window).scrollTop();
    if(wtops>0){
        $(".in_con2").addClass("anima fadeInUp"); 
    }else{     
    }   
    
    
    if(wtops>300){
        $(".incon3").addClass("anima fadeInUp"); 
    }else{       
    }      
}) 
















//鼠移动放大
xOffset = 50; 
yOffset = 50; 
jQuery(".gsry_dl ").find("img").hover(function(e) { 
 /* alert()jQuery("<img id='imgshow' src="+'images/'+ry+'.jpg'+" />").appendTo("body"); */

 /*var ry=$(this).parent().parent().index();*/
    jQuery("<img id='imgshow' src='" + this.src +"' />").appendTo(".new_con "); 
    jQuery("#imgshow") 
     .css("top", (e.pageY - xOffset) + "px") 
     .css("left", (e.pageX + yOffset) + "px") 
     .fadeIn("fast"); 
}, function() { 
    jQuery("#imgshow").remove(); 
});

jQuery(".gsry_dl").find("img").mousemove(function(e) { 
    jQuery("#imgshow") 
       .css("top", (e.pageY - xOffset) + "px") 
       .css("left", (e.pageX + yOffset) + "px") 
});
var sv=$(".newri_p1").html();
var sf=window.location.href;
$('.dt_fu_new_ul li').eq(0).bind("click",function(){
			window.location.href="http://www.jiathis.com/send/?webid=tsina&url="+sf+"&title="+sv;	
	});
$('.dt_fu_new_ul li').eq(1).bind("click",function(){
			window.location.href="http://www.jiathis.com/send/?webid=tqq&url="+sf+"&title="+sv;	
	});	
$('.dt_fu_new_ul li').eq(2).bind("click",function(){
			window.location.href="http://www.jiathis.com/send/?webid=qzone&url="+sf+"&title="+sv;	
	});
})

