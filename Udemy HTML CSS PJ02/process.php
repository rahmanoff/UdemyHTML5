<?php
	if(isset($_POST['submit'])) {
		
		$to = "rahmanoff@gmail.com";
		$subject = $_POST['subject'];
		$email = $_POST['email'];
		$txt = $_POST['message'];
		$headers = "From: ". $email . "\r\n" .
		"CC: kr@r-smart.com.ua";
		
		mail($to,$subject,$txt,$headers);
		
		header("Location: contact.html");
		
	}
?>