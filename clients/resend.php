<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
//Load Composer's autoloader
require '../vendor/autoload.php';
include "../qrcodelib/qrlib.php";

$_POST = json_decode(file_get_contents('php://input'), true);

$code = $_POST['code'];
$email = $_POST['email'];
$date = $_POST['date'];
$fileName = "./test.png";
QRcode::png($code, $fileName , "L", 4, 4);


$mail = new PHPMailer(false);                              // Passing `true` enables exceptions
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'mugewara1@gmail.com';                 // SMTP username
    $mail->Password = 'mgexzhmemudpirvd';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('mugewara1@gmail.com', 'Gym System');
    $mail->addAddress($email);               // Name is optional
    $mail->addAttachment($fileName, 'QRCode.png');

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Gym System';
    $mail->Body    = "You have a new subscription.<br/>Your new expiration date is: ".$date."<br/>Please save the QRCode to your phone.";

    $mail->send();


?>