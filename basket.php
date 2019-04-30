<?php

if (isset($_POST["buyformbut"])) {

$name = $_POST["name2"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$city = $_POST["input-city"];
$address = $_POST["address"];
$index = $_POST["index"];
$payments = $_POST["payments"];
$delivery = $_POST["delivery"];
$orderSum = $_POST["orderSum"];

$to = "brufix@yandex.ru";
$subject = "Покупка c BRUFIX: $name $phone";
$headers = "From: $email";
$headers="MIME-Version: 1.0\nContent-type: text/html; charset=utf-8\nFrom: BRUFIX\n";

$entermessage="Покупка c <b>BRUFIX.RU!</b>
<br><br><b>Имя:</b> $name
<br><b>Тел.:</b> $phone
<br><b>Email:</b> $email
<br><b>Адрес:</b> $address
<br><b>Индекс:</b> $index
<br><br><b>Оплата:</b> $payments
<br><br><b>Доставка:</b> $delivery
<br><br><span style='font-size:16px;font-weight:700;'>Сумма заказа: <b>$orderSum</b></span>";

$flag = mail("$to", "$subject", "$entermessage", $headers);

if($flag){
	echo "true";
} else {
	echo "false";
}

}
?>