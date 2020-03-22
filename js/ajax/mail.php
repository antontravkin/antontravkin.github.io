<?php
    $name = $_POST[name];
    $phone = $_POST[phone];
    $subject = "=?utf-8?B?".base64_encode("сообщение с сайта")."?=";

    $success = mail('travkin.rh@gmail.com', $subject);
    echo $success;
?>