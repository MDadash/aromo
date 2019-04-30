<?php


if($_POST['name']) {
    die();
}


$name = $_POST["name2"];
$feed = $_POST["feed"];
$whichfeed = $_POST["whichfeed"];

$to = "brufix@yandex.ru";
$subject = "Отзыв c BRUFIX: $name";
$headers = "From: support@brufix.ru\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8";

$entermessage="Отзыв c <b>BRUFIX.RU!</b>
<br><br><b>Имя:</b> $name
<br><b>Отзыв:</b> $feed
<br><b>Какой:</b> $whichfeed";

mail("$to", "$subject", "$entermessage", $headers);
?>
