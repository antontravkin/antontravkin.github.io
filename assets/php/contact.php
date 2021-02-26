<?php

if(isset($_POST['message'])){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
    
	
	$to      = 'travkin.rh@gmail.com';
	$subject = 'Site Contact Form';

	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	if($status == TRUE){	
		$res['sendstatus'] = 'done';
	
		//Edit your message here
		$res['message'] = 'Форма отправлена ​​успешно';
    }
	else{
		$res['message'] = 'Не удалось отправить почту. Напишите мне на адрес travkin.rh@gmail.com';
	}
	
	
	echo json_encode($res);
}

?>