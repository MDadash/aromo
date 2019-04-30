"use strict";


function loadCity()
{

  $.ajax({
    type: 'POST',
    url: 'city.php',
    dataType: 'json',
    cache: false,
    success: function(result) {

      var simvol = $("#input-city").val().toUpperCase();
      var arrCity = "";
      var str;

      $.each(result, function(index, value){
        for(var i = 0; i < value.length; i++){
          str = value[i] + ", " + index;
          str = str.toUpperCase();
          if(str.indexOf(simvol) == 0){
            arrCity += "<span class='city'><strong>" + value[i] + "</strong>, " + index + "</span>";
          }
        }
      });
      
      if(arrCity == ""){
        arrCity = "<span class='city city_no'>Нет результатов</span>";
      }
      $("#block_city").html(arrCity);
    },
  });


}



$(document).ready(function () {

  var x;
  x = 0 ;

  // document.getElementById('block_city').onmouseover = function() {
  //   x = 1;
  // }

  // document.getElementById('block_city').onmouseout = function() {
  //   x = 0;
  // }

  $('#block_city').mouseover(function(){
    x = 1;
  });

  $('#block_city').mouseout(function(){
    x = 0;
  });


  $("#input-city").focus(function(){
    $("#block_city").addClass("display_block")
  });

  $("#input-city").blur(function(){
    if(x == 1)return;
    $("#block_city").removeClass("display_block");

  });

  $(document).on("click","#block_city .city",function(){
    if(!($(this).hasClass("city_no"))){
      $("#input-city").val($(this).text());
      $("#block_city").removeClass("display_block");
      $("#input-city").addClass("active_border");
    }
  });



  $("#input-city").keyup(function(){
    loadCity();
  });

  $("#input-city").click(function(){
    loadCity();
  });

    $(".fancybox").fancybox({
        scrolling: "no",

    });


    $("#drug_otziv").click(function(){

        if ($('.slide_otziv:animated').length) {
            return;
        }

        if($("#feeds-wrap .slide_otziv:last-child").hasClass("active")){
            $("#feeds-wrap .slide_otziv.active").fadeOut(function(){
                $("#feeds-wrap .slide_otziv.active").removeClass("active");
                $("#feeds-wrap .slide_otziv:first-child").fadeIn();
                $("#feeds-wrap .slide_otziv:first-child").addClass("active");
            });
        }else{
            $("#feeds-wrap .slide_otziv.active").fadeOut(function(){

                $("#feeds-wrap .slide_otziv.active").next().fadeIn();
                $("#feeds-wrap .slide_otziv.active").next().addClass("active");
                $("#feeds-wrap .slide_otziv.active").prev().removeClass("active");

            });
        }

    });

    
    $( window ).resize(function() {
      if(window.innerWidth > 480){
        $("#header_height_help").height($("#block_height").height());
        $("#discountPrice").height($("#podarok").height());
        $("#buklet-count").height($("#kolichestvo").height());
      }
    });

    if(window.innerWidth > 480){
      $("#header_height_help").height($("#block_height").height());
      $("#discountPrice").height($("#podarok").height());
      $("#buklet-count").height($("#kolichestvo").height());
    }


    $("#commentForm input").keyup(function(){
      $("#commentForm > input").removeClass("border_red");
      if(!$(this).hasClass('tel')){
        if($(this).val().length < 3){
          $(this).removeClass("active_border");
        }else{
          $(this).addClass("active_border");
        }
      }else{
        if(!($(this).val().indexOf('_') === -1)){
          $(this).removeClass("active_border");
        }else{
          $(this).addClass("active_border");
        }
      }
    });


    $("#commentForm input").focus(function(){
      $(".help_msg, .email_wrong").removeClass("display_block");
    });


    $(".btn-pay").on("click", function(e){
        var flag = false;

        $("#commentForm input").removeClass("border_red");
        $("#commentForm input").each(function(i, elem){

            if(($(this).attr("required"))){
                if($(this).val() == ""){
                    $(this).siblings(".help_msg").addClass("display_block");
                    flag = true;
                    $(this).addClass("border_red");
                    return false; 
                }
            }
        });

        if(flag){
            return;
        }
        
        if($('#online-pay').is(':checked')){


            // $.ajax({
            //     url: '/getRK',
            //     type: 'post',
            //     data: $('#commentForm').serialize()
            // });

            $.ajax({
                url: '/getWalletone',
                type: 'post',
                data: $('#commentForm').serialize(),
                /*async: false,*/
                success: function(result){
                    $('body').append(result);
                    $('#walletone').submit();
                },
                beforeSend: function () {
                    $('#popup-lay').fadeIn();
                    $.fancybox.showLoading();
                },
            });
            
        } else {
            $.ajax({
                url: '/send',
                type: 'post',
                data: $('#commentForm').serialize(),
                success: function(result){
                    if(result == 'ok') {
                        window.location = 'success_order.html';
                    } else {
                        alert('Произошла ошибка! Попробуйте еще раз!');
                    }
                },
                beforeSend: function () {
                    $('#popup-lay').fadeIn();
                    $.fancybox.showLoading();
                },
            });
        }
    });
    
    
    $(".page-butt2").on("click", function(e){
     
      if($(this).attr('href') == 'undefined' || $(this).attr('href') == '' || $(this).attr('type') == 'submit') {
          e.preventDefault();
      }
      var flag = false;

      $("#popup-form > input").removeClass("border_red");
      $("#popup-form input").each(function(i, elem){

        if(($(this).attr("required"))){
          if($(this).val() == ""){
            $(this).siblings(".help_msg").addClass("display_block");
            flag = true;
            $(this).addClass("border_red");
            return false; 
          }
        }
        
      });

      if(flag){
          
        return;
        
      }
    $.ajax({
        url: '/order',
        type: 'post',
        data: $('#popup-form').serialize(),
        success: function(result){
             $.fancybox.hideLoading();
            $('#popup-form').fadeOut();
            $('#mail-sender').fadeIn();
            $('#popup-form').trigger('reset');
            
        },
        beforeSend: function () {
            $('#popup-form').fadeOut(100);
            $('#popup-lay').fadeIn();
            $.fancybox.showLoading();
        },
    });

  });





    /* ПОДКЛЮЧЕНИЕ СЛАЙДЕРОВ */
    $(".page-slider").owlCarousel({
        nav: true,
        //  navText: true,
        navText: ['<i class="fa fa-angle-left fa-2x slider-arrow-prev" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right fa-2x slider-arrow-next" aria-hidden="true"></i>'],
        dots: true,
        loop: true,
        margin: 30,
        autoplaySpeed: 1200,
        dotsSpeed: 1000,
        // autoplay: true,
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        slideSpeed: 14000,
        paginationSpeed: 10000,
    });
    var gtts = $('#getts-slider');
	setInterval(function() {
		for (var i = 1; i < 5; i++) {
			if ($('#getts-slider .owl-dot:nth-child(' + i +')').hasClass('active')) {
				$('.nv').removeClass("active");
				$('.nv' + i).addClass("active");
			}
		}
	}, 100);
    $('.nv').click(function () {
        if ($(this).hasClass("nv1")) {
            $('a.nv').removeClass("active");
            $(".nv1").addClass("active");
            gtts.trigger("to.owl.carousel", [0, 1000, true]);
        } else
        if ($(this).hasClass("nv2")) {
            $('a.nv').removeClass("active");
            $(".nv2").addClass("active");
            gtts.trigger("to.owl.carousel", [1, 1000, true]);
        } else
        if ($(this).hasClass("nv3")) {
            $('a.nv').removeClass("active");
            $(".nv3").addClass("active");
            gtts.trigger("to.owl.carousel", [2, 1000, true]);
        } else
        if ($(this).hasClass("nv4")) {
            $('a.nv').removeClass("active");
            $(".nv4").addClass("active");
            gtts.trigger("to.owl.carousel", [3, 1000, true]);
        }
    });

    $('.spoiler').bind("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).children(".spoil-body").slideToggle();
        } else {
            $('.spoiler.active').children(".spoil-body").slideToggle();
            $('.spoiler.active').removeClass("active");
            $(this).children(".spoil-body").slideToggle();
            $(this).addClass("active");
        }
    });

    /* ОТКРЫТИЕ МОБ.МЕНЮ */
    $('#mobile-menu-butt').bind("click", function () {
        $('nav').slideToggle();
    });
    /* ОТКРЫТИЕ МОБ.МЕНЮ */

    /* ЗАКРЫТИЕ МОБ.МЕНЮ */
    if ($(window).width() < 992) {
        $('.scrollto').bind("click", function () {
        });
        $('#promo').click(function() {
            if($('nav').css("display") == "block") {
            $('nav').slideToggle();
                
            }
        });
    }
    /* ЗАКРЫТИЕ МОБ.МЕНЮ */

    var lastId,
        topMenu = $("nav"),
        topMenuHeight = topMenu.outerHeight() + 70,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });
    $(window).scroll(function () {
        var fromTop = $(this).scrollTop() + topMenuHeight;
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });
    var stsum = 0;
   // var outSum, allSum = 2990;
  var outSum, allSum = 2290;
    $(".count-change").bind("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $('#orderCount').val(newVal);
		$('#buklet-count').text(newVal);
        $button.parent().find("input").val(newVal);

        var countSum = $('#kapa-count').val() * 2990;
        $('#kapa-summ').text(countSum + " руб.");

        if ($('#get-pay').attr("checked")) {
           // countSum = Math.round(countSum / 7 * 7);
            countSum = Math.round(countSum / 7 * 9.139738);
            if ($('#courier-deliv').attr("checked")) {
                countSum = countSum + 600;
                allSum = countSum;
                stsum = allSum - 600;
            } else {
                allSum = countSum;
                stsum = allSum;
            }
        } else {
            if ($('#courier-deliv').attr("checked")) {
                countSum = countSum + 600;
                allSum = countSum;
                stsum = allSum - 600;
            } else {
                allSum = countSum;
                stsum = allSum;
            }
        }
        $('#all-summ').text(allSum + " руб.");
        $('#kapa-summ').text(stsum + " руб.");
        $('#orderSum').val(allSum + " руб.");
        
    });

    $('#all-summ').text("2290 руб.")
    $('#orderSum').val("2290 руб.");
    

    $("#first_check_block input[type=radio]").click(function(){
      $("#first_check_block input[type=radio]").next().removeClass("active_check");
      $(this).next().addClass("active_check");
    });

    $("#first_check_block input[type=radio]").each(function(){

      if($(this).attr("checked")){
        $(this).next().addClass("active_check");
      }
    });

    $("#second_check_block input[type=radio]").click(function(){
      $("#second_check_block input[type=radio]").next().removeClass("active_check");
      $(this).next().addClass("active_check");
    });

    $("#second_check_block input[type=radio]").each(function(){

      if($(this).attr("checked")){
        $(this).next().addClass("active_check");
      }
    });
    var sumt = 0;
    $('#online-pay').click(function () {
        $(".btn-pay").text("Оплатить");
        if (!$('#online-pay').attr("checked")) {
            $('#online-pay').attr("checked", "checked");
            $('#get-pay').removeAttr("checked");
            if ($('#courier-deliv').attr("checked")) {
              // outSum = Math.round(((allSum - 600) / 7) * 7 + 600);
              outSum = Math.round(((allSum - 600) / 9.139738) * 7 + 600);
                allSum = outSum;
                sumt = allSum - 600;
            } else {
               // outSum = Math.round((allSum / 7) * 7);
                 outSum = Math.round((allSum / 9.139738) * 7);
                allSum = outSum;
                sumt = allSum;
            }
            $('#discountPrice span').text("2290 руб./шт");
			$('#outStatus').text("Оплатить");
            $('#all-summ').text(outSum + " руб.");
            $('#kapa-summ').text(sumt + " руб.");
            $('#orderSum').val(allSum + " руб.");
        }
    });
    $('#get-pay').click(function () {
        $(".btn-pay").text("Оформить заказ");
        if (!$('#get-pay').attr("checked")) {
            $('#get-pay').attr("checked", "checked");
            $('#online-pay').removeAttr("checked");
            if ($('#courier-deliv').attr("checked")) {
               // outSum = Math.round(((allSum - 600) / 7) * 7 + 600);
                 outSum = Math.round(((allSum - 600) / 7) * 9.139738 + 600);
                allSum = outSum;
                sumt = allSum - 600;
            } else {
               // outSum = Math.round((allSum / 7) * 7);
               outSum = Math.round((allSum / 7) * 9.139738);
                allSum = outSum;
                sumt = allSum;
            }
            $('#discountPrice span').text("2990 руб./шт");
			$('#outStatus').text("Оформить заказ");

            $('#all-summ').text(outSum + " руб.");
            $('#kapa-summ').text(sumt + " руб.");
            $('#orderSum').val(outSum + " руб.");
        }
    });
    $('#free-deliv').click(function () {
        if (!$('#free-deliv').attr("checked")) {
            $('#free-deliv').attr("checked", "checked");
            $('#courier-deliv').removeAttr("checked");
            allSum = allSum - 600;
            $('#all-summ').text(allSum + " руб.");
            $('#orderSum').val(allSum + " руб.");
        }
    });
    $('#courier-deliv').click(function () {
        if (!$('#courier-deliv').attr("checked")) {
            $('#courier-deliv').attr("checked", "checked");
            $('#free-deliv').removeAttr("checked");
            allSum = allSum + 600;
            $('#all-summ').text(allSum + " руб.");
            $('#orderSum').val(allSum + " руб.");
        }
    });

    $("#input-city").click(function () {
        $("#form-city").slideToggle();
    });
    $("#form-city li").click(function () {
        $("#form-city").slideToggle();
        var choosenValue = $(this).attr("data-value");
        $("select").val(choosenValue).prop("selected", true);
        $("#input-city").text($(this).text());
        $("#input-city").attr("data-value", choosenValue);
    });

    /* ВЫВОД AJAX ОКНА */
    $('#popup-form').ajaxForm(function () {
        $('#popup-form').fadeOut();
        $('#mail-sender').fadeIn();
        $('#popup-form').trigger('reset');
    });
    $('#feed-form').ajaxForm(function () {
        $('#feed-form').fadeOut();
        $('#feed-sender').fadeIn();
        $('#feed-form').trigger('reset');
    });
    /* ВЫВОД AJAX ОКНА */

    /* ОТКРЫТИЕ POPUP */
    $('.quick-order').bind("click", function () {
        var title = $(this).html();
        $('<input>').attr({
            type: 'hidden',
            name: 'title',
            value: title
        }).appendTo('#popup-form');
        
        $('#popup-lay').fadeIn();
        $('#popup-form').fadeIn();
    });
    $('.quick-feed').bind("click", function () {
        $('#popup-lay').fadeIn();
        $('#feed-form').fadeIn();
    });
    /* ОТКРЫТИЕ POPUP */

    /* ЗАКРЫТИЕ POPUP */
    $('.page-overlay, .close-popup-butt').bind("click", function () {
        $("#popup-form > input").removeClass("border_red");
        $('.popup-window').fadeOut();
        $('#popup-lay').fadeOut();
    });
    /* ЗАКРЫТИЕ POPUP */

    /* МАСКА ДЛЯ ТЕЛЕФОНА */
    
	
	/*$("input[type='tel']").mask("+7 (999) 999 99 99");*/
	
    /* МАСКА ДЛЯ ТЕЛЕФОНА */
var toplink = $('.scrollto');
    toplink.click(function () { var idscroll = $(this).attr('href'); $.scrollTo(idscroll, 1000, {margin: 'true'}); return false; });



});

 /* слова вместо точек в слайдер pagination*/
    $(document).ready(function () {
        var owl;
        function customPager() {
            $.each($('#home .owl-item:not(.cloned)'), function (i) {
                
                var titleData = jQuery(this).find('img').attr('alt');
                console.log(titleData);
                var paginationLinks = jQuery('#home .owl-controls .owl-dots .owl-dot span');
                
                $(paginationLinks[i]).append(titleData);

            });

        }
        function customPager2() {
            $.each($('#emotions .owl-item:not(.cloned)'), function (i) {
                
                var titleData = jQuery(this).find('img').attr('alt');
                console.log(titleData);
                var paginationLinks = jQuery('#emotions  .owl-controls .owl-dots .owl-dot span');
                
                $(paginationLinks[i]).append(titleData);

            });
            
        }

        $("#home .page-slider").owlCarousel({
            onInitialized : customPager()
        });
        $("#emotions .page-slider").owlCarousel({
            onInitialized : customPager2()
        });
    });


