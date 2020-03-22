<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $massege = $_POST['name'] . ' ' . $_POST['phone'];
    $subject = "=?utf-8?B?".base64_encode("сообщение с сайта ShatoBarto.ru")."?=";
    $headers = array(
        'From' => 'webmaster@example.com',
        'Reply-To' => 'webmaster@example.com',
        'X-Mailer' => 'PHP/' . phpversion()
    );

    $success = mail('travkin.rh@gmail.com', $subject, $phone, $headers);
    echo $success;
?>