<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="no-js ie ie6" lang="en"><![endif]-->
<!--[if IE 7 ]><html class="no-js ie ie7" lang="en"><![endif]-->
<!--[if IE 8 ]><html class="no-js ie ie8" lang="en"><![endif]-->
<!--[if IE 9 ]><html class="no-js ie ie9" lang="en"><![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->




<head>
    <!-- META DATA -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=Edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>BRUFIX - Возврат товара</title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
	<meta name="robots" content="none"/>

    <!-- ADD FAVICONS AND ICONS -->
    <link rel="icon" type="image/png" href="images/favicon.png">
    <link rel="SHORTCUT ICON" type="image/x-icon" href="images/favicon.ico">

    <!-- ADD FONTS -->
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

    <!-- Add STYLESHEETS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css" />

    <!--<link rel="stylesheet" type="text/css" href="css/reset.css" />
    <link rel="stylesheet" type="text/css" href="css/fonts.css" />
    <link rel="stylesheet/less" type="text/css" href="css/style.less" />
    <link rel="stylesheet/less" type="text/css" href="css/media.less" />
    <script src="js/less.js"></script>-->

    <!-- HTML5 SHIV -->
    <!--[if lt IE 9]>
        <script src="http://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="http://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>


<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter34940555 = new Ya.Metrika({
                    id:34940555,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/34940555" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->





<body>
    <!-- HEADER -->
    <header id="header">
        <div class="container">
            <div class="row">
                <a href="index.html" class="logo"><img src="images/logo.png" alt=""></a>
                <button id="callback-butt" class="quick-order" onclick="yaCounter34940555.reachGoal('callme_target'); return true;"><span>Заказать звонок</span></button>
                <button id="mobile-menu-butt"></button>
                <nav id="hnav">
                    <ul>
                        <li><a href="../index.html#promo">Главная</a></li>
                        <li><a href="../index.html#faq">Ответы на вопросы</a></li>
                        <li><a href="../index.html#feedbacks">Отзывы</a></li>
                        <li><a href="../delivery.html">О доставке</a></li>
                        <li><a href="../about.html">О бурксизме</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <!-- END HEADER -->

	
	


        


	
	
	
	
<?php
if($_POST['submit']) {
// если была нажата кнопка "Отправить" 

$emailfrom = "support@brufix.ru";
// $emailfrom - от кого 

$usrname =  substr(htmlspecialchars(trim($_POST['name'])), 0, 1000000); 
$usrmail =  substr(htmlspecialchars(trim($_POST['email'])), 0, 1000000); 
$usrphone =  substr(htmlspecialchars(trim($_POST['phone'])), 0, 1000000); 
$usrnumberorder =  substr(htmlspecialchars(trim($_POST['numberorder'])), 0, 1000000); 
$usrcomment =  substr(htmlspecialchars(trim($_POST['comment'])), 0, 1000000);


$to = "$usrmail";
$to1 = "support@brufix.ru";
$subject = "Запрос возврата товара: $usrname";
$headers = "From: support@brufix.ru\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8";

$message="Спасибо за обращение! Ваш запрос на возврат будет рассмотрен в ближайшее время.
<br> Имя клиента: $usrname
<br> Номер телефона: $usrphone
<br> E-mail: $usrmail
<br> Номер заказа: $usrnumberorder
<br> Причина возврата: $usrcomment";


mail("$to,$to1", "$subject", "$message", $headers);
?>


   <!-- CONTENT -->
    <div id="text-d1" class="text-div clearfix" style="background-image: none;">
        <div class="container">
			
            <div class="row">
				<h1 style="font-size: 32px;">Возврат товара</h1>
				
			
                    
			

            </div>
			<div class="row">
			
                <div class="left col-md-6 col-md-offset-3">
					<p><strong>Заявка на возврат успешно отправлена.</strong><br> Ожидайте ответа на электронную почту указанную в заявке.</p>
                </div>
			
            </div>
		
        </div>
    </div>

<?
} else { ?>
	
	
	   <!-- CONTENT -->
    <div id="text-d1" class="text-div clearfix" style="background-image: none;">
        <div class="container">
			
			<div class="row">
				<h1 style="font-size: 32px;">Получение товара</h1>
					<p>Для того чтобы не возникло никаких непредвиденных ситуаций с получением отправления на почте:  
					<br>- При себе необходимо иметь паспорт и знать номер Вашего отправления, который мы сообщаем Вам после передачи Вашего заказа на доставку;
					<br>- Необходимо осмотреть посылку и проверить ее целостность;
                    <br>- Если возникли какие-то сомнения по содержимому посылки получатель вправе потребовать вскрытия отправления в присутствии руководителя отделения почты;
                    <br>- Извещение адресат должен подписывать только после того, как он убедится в том, что по поводу содержимого посылки нет никакого подозрения.
                    <br> 
                    <br>Все отправления застрахованы и в случае утраты, порчи или повреждения товара Вы вправе отказаться от получения. 
				<p><strong>Будьте внимательны при получении товара.</strong></p>
</div>
			<br><br>
            <div class="row">
				<h1 style="font-size: 32px;">Возврат товара</h1>
					<p>Закон о защите прав потребителей  устанавливает, что любой человек имеет право на возврат товара надлежащего качества. 
					
					<br>Важными условиями являются:
                    <br>- Возврат товара в течение 14 дней с момента совершения покупки;
                    <br>- Отсутствие признаков использования;
                    <br>- Сохранность внешних данных, пломбы, ярлыков;
                    <br>- Желательно наличие чека или иного документа подтверждающего оплату.
                    <br>
                    <br>При отсутствии чека потребитель имеет право ссылаться на свидетельские показания, подтверждающие факт покупки. 
                    <br>Перечень возможных к возврату товаров в магазин, закреплен в соответствующей статье Гражданского Кодекса РФ. 
                    <br>Продавец не может в одностороннем порядке и по собственному усмотрению его изменять.</p>
				<p><strong>Пожалуйста, заполните форму запроса на возврат товара.</strong></p>

            </div>
			<div class="row">
			
                <div class="left col-md-6 col-md-offset-3">
					<p style="margin-bottom: -20px;"><strong>Информация о заказе</strong></p>
					<form method="post" action="returns.php" id="commentForm" class="inputs-wrap clearfix">
                        <div class="wrap_input">
                            <input type="text" id="name" name="name"  required placeholder="ФИО *">
                        </div>
                        <div class="wrap_input">
                          <input class="tel" id="phone" type="tel" name="phone"  required placeholder="Телефон *">
                        </div>

                        <div class="wrap_input">
                          <input type="email" class="email" id="email" name="email"  required placeholder="E-mail *">
                        </div>
						
						<div class="wrap_input">
                          <input type="text" class="name" id="name" name="numberorder"  required placeholder="Номер заказа *">
                        </div>
						
						<div class="wrap_input">
						<textarea style="width: 100%; resize: none; margin-bottom: 10px;" type="text" class="name" id="name" name="comment" rows="7" required placeholder="Причина возврата *"></textarea>
                        </div>
						<input class="page-butt text-center" style="color: #fff; height: 60px;" type="submit" value="Запросить возврат" name="submit">
					</form>	
                </div>
			
            </div>
		
        </div>
    </div>
	
	
	
	
<? }
?>

	
	









    <!-- POPUPS -->
    <div id="popup-lay">
        <div class="page-overlay"></div>

        <!-- FORMS -->
        <form id="popup-form" action="mail.php" method="post" class="popup-window">
            <a class="close-popup-butt">закрыть</a>
            <p>Заполните форму и мы свяжемся <span class="nowrap">с Вами в</span> ближайшее время</p>
            <input type="text" name="name" placeholder="Введите Ваше имя" required class="pu-who">
            <input type="tel" name="phone" placeholder="Введите Ваш телефон *" required class="pu-phone">
            <input type="email" name="email" placeholder="Введите Ваш e-mail" required class="pu-mail">
            <button type="submit" class="page-butt">Отправить</button>
        </form>
        <form id="feed-form" action="feed.php" method="post" class="popup-window">
            <a class="close-popup-butt">закрыть</a>
            <p>Оставьте Ваш отзыв</p>
            <input type="text" name="name" placeholder="Введите Ваше имя" required class="pu-who">
            <textarea name="feed" id="" placeholder="Введите Ваш отзыв..." required class="pu-mail"></textarea>
            <div class="clearfix">
                <input type="radio" id="goodfd" value="положительный" name="whichfeed" checked class="goodfd">
                <label for="goodfd">положительный</label>
                <input type="radio" id="badfd" value="отрицательный" name="whichfeed" class="badfd">
                <label for="badfd">отрицательный</label>
                <br>
            </div>
            <button type="submit" class="page-butt">Отправить</button>
        </form>
        <!-- END FORMS -->

        <!-- SENDERS -->
        <div id="mail-sender" class="popup-window">
            <a class="close-popup-butt">закрыть</a>
            <p>Спасибо! Ваша заявка принята! <span class="nowrap">Наш менеджер</span> скоро вам перезвонит.</p>
        </div>
        <div id="feed-sender" class="popup-window">
            <a class="close-popup-butt">закрыть</a>
            <p>Спасибо! Ваш отзыв появится на сайте после проверки модератором.</p>
        </div>
        <!-- END SENDERS -->

    </div>
    <!-- END POPUPS -->

    <!-- ADD SCRIPTS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="https://malsup.github.com/jquery.form.js"></script>
    <script src="js/jquery.maskedinput.min.js"></script>
    <script src="/js/jquery.scrollto.min.js"></script>
    <script src="/js/owl.carousel.min.js"></script>
    <script src="/js/functions.js"></script>
</body>

</html>