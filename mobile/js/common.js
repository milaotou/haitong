
;(function($) {

	var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
	var eventType = supportsTouch ? 'touchstart' : 'click';
	$(function() {
		//注册登陆页设置最小高度
		$('#loginbox').css('min-height',getWindowHeight()+'px');

		//头部悬浮

		//滚动条在Y轴上的滚动距离
		function getScrollTop(){
			return document.body.scrollTop;
		}

        //文档的总高度
		function getScrollHeight(){
			return document.body.clientHeight;
		}

        //浏览器视口的高度
		function getWindowHeight(){
			var windowHeight = 0;
			if(document.compatMode == "CSS1Compat"){
				windowHeight = document.documentElement.clientHeight;
			}
			else{
				windowHeight = document.body.clientHeight;
			}
			return windowHeight;
		}

		$('body').bind('touchmove,touchend', function (event) {
			scroll();
		})

		function scroll(){
			/*if((getScrollHeight() - getScrollTop() - getWindowHeight()) >= $('.footMenu').height()){
				$('.footMenu').css('position','fixed');
			}else{
				$('.footMenu').css('position','relative');
			}
*/
			//滑到头部到顶部时header定于最止方
			if(getScrollTop() > 0){
				$('.header').css('position','fixed');
			}else{
				$('.header').css('position','relative');
			}
		}


		$.fn.extend({
			oTab: function (opation) { //选项卡
				var defaults = {
					tabActive: "curr"
				};

				var opations = $.extend(defaults, opation);
				if (!opations.time) opations.time = 0;

				var tab = $("#tab_menu li", this).length>0 ? $("#tab_menu li", this) : $("#tab_menu div", this);
				var tabConetent = $("#tab_box > div", this);

				tab.click(function () {
					$(this).addClass(opations.tabActive).siblings().removeClass(opations.tabActive);
					var curIndex = tab.index(this);
					tabConetent.eq(curIndex).addClass('show').siblings().removeClass('show');
				});

				return this;
		      }
		});

		$('#tabbox').oTab();



		//下一步
		$('.nextstep').click(function(){
			$(this).parent().removeClass('show').next().addClass('show');
		});

		//设计案例切换
		var liWidth = $('.title-list li').width();
		var lineWidth = $('.indexTab .line').width();
		$('.indexTab .line').stop(false,true).animate({'left' : 0 * liWidth + (liWidth-lineWidth)/2+ 'px'},300);
		$('.title-list li').click(function(){
			var liindex = $('.title-list li').index(this);
			$(this).addClass('active').siblings().removeClass('active');
			$('.product-wrap div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();
			$('.indexTab .line').stop(false,true).animate({'left' : liindex * liWidth + (liWidth-lineWidth)/2+ 'px'},300);
			$('.indexTab .tablr > div').eq(liindex).addClass('show').siblings().removeClass('show');
		});


		//导航
		$('.titdown h2').click(function(e){
			e.stopPropagation();
			$('.titdown ul').toggle();
		});

		//打开分享
		$('.sharetit').click(function(e){
			e.stopPropagation();
			$('.sharebox').show();
		});

		$(document).click(function(){
			$('.titdown ul').hide();
			$('.sharebox').hide();
		});

		//登陆
		var loginHtml = '<div class="loginbg" style="z-index: 1000"></div>'
						+'<div class="loginpage log" id="loginbox" style="z-index: 1000">'
						+'<p class="pt_20"></p>'
			            +'<div class="loginHead p_r">'
			            +'<img src="images/loginType.gif" width="100%">'
						+'<i class="icon-type"></i>'
						+'</div>'

						+'<div class="login">'
						+'<h2 class="mb_15 fz_16 col_00">会员登录</h2>'
						+'<ul>'
						+'<li>'
						+'<div class="loginboder">'
						+'<i class="icon-name"></i>'
						+'<input type="text" class="logintext" placeholder="账号">'
						+'</div>'
						+'</li>'
						+'<li>'
						+'<div class="loginboder">'
						+'<i class="icon-password"></i>'
						+'<input type="password" class="logintext" placeholder="密码">'
						+'</div>'
						+'</li>'
						+'</ul>'

						+'<p class="clearfix mb_15"><a href="password1.html" class="fr col_blue forgetpassword">忘记登录密码</a> <label class="ml_5"><input type="radio" name="remember"> <span class="ml_5 mt_10iy ">记住密码</span></label></p>'
						+'<p class="mb_15"><input type="button" value="登 陆" class="loginbut"> </p>'

						+'<div class="loginQuiklink">'
						+'<ul class="clearfix">'
						+'<li class="fl"><a href="register.html"><i class="icon-register"></i> 免费注册</a></li>'
						+'<li class="fr"><a href="#"><i class="icon-help"></i>帮助中心</a></li>'
						+'</ul>'
						+'</div>'
						+'</div>'

						+'<footer class="loginfoot">'
						+'<p>© 2014 海通恒信国际租赁有限公司版权所有   沪ICP备11017593号</p>'
						+'</footer>'
						+'</div>';

		var menuHtml = '<div class="loginbg menulist"></div>'
			            +'<div class="menupage menulist" id="loginbox">'
						+'<ul class="menu" id="menu">'
						+'<li>'
						+'<h2><a href="index.html"><span class="icon menu_home"></span><span class="menutext">首页</span></a></h2>'
						+'</li>'
						+'<li>'
						+'<h2><a href="javascript:;"><span class="icon menu_about"></span><span class="menutext">关于海通恒信</span></a></h2>'
						+'<ul class="menuChiren">'
						+'<li><a href="aboutboss.html">总经理致辞</a> </li>'
		            	+'<li><a href="about-vision.html">公司概况</a> </li>'
			            +'<li><a href="about-overview.html">公司愿景</a> </li>'
			            +'<li><a href="about-honour.html">公司荣誉</a> </li>'
			            +'<li><a href="about-develop.html">发展历程</a> </li>'
						+'<li><a href="about-back.html">股东背景</a> </li>'
						+'<li><a href="about-organize.html">组织架构</a> </li>'
						+'<li><a href="about-life.html">员工生活</a> </li>'
						+'</ul>'
						+'</li>'
						+'<li>'
						+'<h2><a href="service.html"><span class="icon menu_service"></span><span class="menutext">自助服务</span></a></h2>'
						+'</li>'
						+'<li>'
						+'<h2><a href="javascript:;"><span class="icon menu_business"></span><span class="menutext">业务范畴</span></a></h2>'
						+'<ul class="menuChiren">'
						+'<li><a href="business-car.html">车辆业务 </a> </li>'
						+'<li><a href="#">机构客户</a> </li>'
						+'<li><a href="#">小微业务</a> </li>'
						+'<li><a href="#">医疗健康</a> </li>'
						+'<li><a href="#">公共服务</a> </li>'
						+'<li><a href="#">商业服务</a> </li>'
						+'<li><a href="#">工业服务</a> </li>'
						+'<li><a href="#">车融宝</a> </li>'
						+'</ul>'
						+'</li>'
						+'<li>'
						+'<h2><a href="used.html"><span class="icon menu_used"></span><span class="menutext">二手设备</span></a></h2>'
						+'</li>'
						+'<li>'
						+'<h2><a href="used-car.html"><span class="icon menu_car"></span><span class="menutext">二手车辆</span></a></h2>'
						+'</li>'
						+'<li>'
						+'<h2><a href="#"><span class="icon menu_join"></span><span class="menutext">人才战略</span></a></h2>'
						+'</li>'
						+'<li>'
						+'<h2><a href="news.html"><span class="icon menu_join"></span><span class="menutext">新闻中心</span></a></h2>'
						+'</li>'
						+'</ul>'
						+'</div>';

		//打开登陆页
		$('#login').click(function(){
			$('body').append(loginHtml);
			$('.loginbg').css('height',getWindowHeight()+'px');
			$('.loginHead img').css('border-radius',$('.loginHead').outerWidth()/2);

			$('body').bind("touchmove", function (events) {
				event.preventDefault();
			});
		});

		//打开菜单页
		$('#openMenu a').click(function(){
			$(this).parent().addClass('openMenu');
			if($('.loginbg').length<1){
				$('body').append(menuHtml);
				var oLi = $('#menu li');
				var arr = [];
				oLi.each(function(i,item){
					if($(item).find('ul').length>0){
						$(item).find('h2').addClass('openUl').find('a').append('<i class="fa icon-angle-down"></i>');
					}
				});
			}

			$('body').bind("touchmove", function (events) {
				event.preventDefault();
			});


			$('.loginbg').removeClass('movebottom').addClass('movetop');
			$('.menupage').removeClass('movebottom').addClass('movetop');
			$('.loginbg').css('height',getWindowHeight()+'px');

			$('.menulist').addClass("menupageopen");
			$('.outbox').addClass('filter');
		});

		$("body").delegate("#menu h2.openUl","click",function(){
			$(this).next("ul").stop().slideToggle("100").parent('li').toggleClass('open')
				.siblings().removeClass('open').find('ul').slideUp("100");
		});

		//关闭菜单页
		$('#closeMenu').click(function(){
			$('body').bind('touchmove', function (event) {
				scroll();
			})

			$(this).parent('li').removeClass('openMenu');
			$('.loginbg').removeClass('movetop').addClass('movebottom');
			$('.menupage').removeClass('movetop').addClass('movebottom');

			$('.menulist').removeClass("menupageopen");
			$('.outbox').removeClass('filter');
		});

		//菜单展开
		$("#menu h2").on('click',function(){

			$(this).next("ul").slideToggle("slow").parent('li').toggleClass('open')
				.siblings().removeClass('open').find('ul').slideUp("slow");
		});

		var Accordion = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			// Variables privadas
			var links = this.el.find('h2');
			// Evento
			links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
			var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

			$next.slideToggle();
			$this.parent().toggleClass('open');

			if (!e.data.multiple) {
				$el.find('.indexnewview').not($next).slideUp().parent().removeClass('open');
			};
		}

		var accordion = new Accordion($('#indexnewlist'), false);

		//标题栏目没有列表隐藏箭头
		if($('.titdown').find('ul').length>0){
			$('.titdown .icon-down ').show();
		}else{
			$('.titdown .icon-down ').hide();
		}

	});
})(jQuery);














