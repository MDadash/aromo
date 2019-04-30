<?php

$name = $_POST["name2"];
$phone = $_POST["phone"];
$email = $_POST["email"];

$to = "brufix@yandex.ru";
$subject = "Заявка c BRUFIX: $name $phone";
$headers = "From: $email";
$headers="MIME-Version: 1.0\nContent-type: text/html; charset=utf-8\nFrom: BRUFIX\n";

$entermessage="Заявка c <b>BRUFIX.RU!</b>
<br><br><b>Имя:</b> $name
<br><b>Тел.:</b> $phone
<br><b>Email:</b> $email";

mail("$to", "$subject", "$entermessage", $headers);
?>