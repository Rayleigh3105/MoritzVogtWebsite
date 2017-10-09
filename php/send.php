<?php 

// if($_POST['subject'] != "" AND $_POST['email'] != "" AND $_POST['msg'] != "" AND $_POST['name'] != "" )
// {
// 	$receiver = "monkey.d.mo@googlemail.com";
// 	$subject = $_POST['subject'];
// 	$from = "From: ";
// 	$from .= $_POST['name'];
// 	$from .= " <";
// 	$from .= $_POST['email'];
// 	$from .= ">\n";
// 	$from .= "Reply-To: ";
// 	$from .= $_POST['mail'];
// 	$from .= "\n"
// 	$from .= "Content-Type: text/html\n";
// 	$msg = $_POST['msg'];

// 	mail($receiver, $subject, $msg, $from);

// }

$to = "monkey.d.mo@googlemail.com";
$subject = $_POST['subject'];
$msg = $_POST['msg'];
$headers = $_POST['email']

if (mail($to,$subject,$msg$headers)) {
	echo"The email has been send!";
} else {
	echo " The mail has failed!";
}





?>