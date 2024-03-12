<?php
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );




function sanitize_my_email($field) {
    $field = filter_var($field, FILTER_SANITIZE_EMAIL);
    if (filter_var($field, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}




$from = $_POST['email'];

//check if the email address is invalid $secure_check
$secure_check = sanitize_my_email($from);

$to = "admin@gazicyber.com";
$subject = $_POST['subject'];
$message = $_POST['message'] . "\n This message sent by contact form of gazicyber.com website.";
$headers = "From:" . $from;



if ($secure_check == false) {
    echo "Invalid input";
} else { //send email
    mail($to, $subject, $message, $headers);
    echo "This email is sent using PHP Mail";
    header("Location: ../index.html");
}
?>




































<?php
/*use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';
$mail = new PHPMailer;
$mail->isSMTP();
$mail->SMTPDebug = 2;
$mail->Host = 'srvc99.turhost.com';
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->Username = 'm.erenballi@stkstocktaking.com';
$mail->Password = 'Rafi2015!';
$mail->setFrom('m.erenballi@stkstocktaking.com', 'Your Name');
$mail->addReplyTo('m.erenballi@stkstocktaking.com', 'Your Name');
$mail->addAddress('mehmeterenballi@gmail.com', 'Receiver Name');
$mail->Subject = 'Testing PHPMailer';
$mail->msgHTML(file_get_contents('message.html'), __DIR__);
$mail->Body = 'This is a plain text message body';
//$mail->addAttachment('test.txt');
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'The email message was sent.';
}
?>



































































<?php
/*function sanitize_my_email($field) {
    $field = filter_var($field, FILTER_SANITIZE_EMAIL);
    if (filter_var($field, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}
$to_email = 's.singil@stkstocktaking.com';
$password = 'Rafi2015!';
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$headers = 'From: '.$_POST['email'];
//check if the email address is invalid $secure_check
$secure_check = sanitize_my_email($visitor_email);
if ($secure_check == false) {
    echo "Invalid input";
} else { //send email
    mail($to_email, $subject, $message, $headers, $visitor_mail);
    echo "This email is sent using PHP Mail";
    header("Location: ../index.html");
}

















<?php
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'srvc99.turhost.com';
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->Username = $_POST['email'];
$mail->Password = 'Rafi2015!';
$mail->setFrom($mail->Username, $_POST['name']);
$mail->addAddress('m.erenballi@stkstocktaking.com', 'Sabri Sinğil');
if ($mail->addReplyTo($_POST['email'], $_POST['name'])) {
$mail->Subject = 'PHPMailer contact form';
$mail->isHTML(false);
$mail->Body = <<<EOT
Email: {$_POST['email']}
Name: {$_POST['name']}
Message: $_POST['message']}
EOT;
if (!$mail->send()) {
$msg = 'Sorry, something went wrong. Please try again later.';
} else {
$msg = 'Message sent! Thanks for contacting us.';
}
} else {
$msg = 'Share it with us!';
}
?>
