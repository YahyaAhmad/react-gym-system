<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
//Load Composer's autoloader
require '../vendor/autoload.php';
include "../phpqrcode/qrlib.php";


ini_set('display_errors', 1);
error_reporting(E_ALL);
require('../connect.php');
$_POST = json_decode(file_get_contents('php://input'), true);

$name = isset($_POST['name'])?$_POST['name']:'';
$email = isset($_POST['email'])?$_POST['email']:'';
$month = isset($_POST['month'])?$_POST['month']:'';
$code = getGUID();

$sql = "Insert into User (Full_Name, Email, Code) Values ('{$name}', '{$email}', '{$code}')";

$result = $con->query($sql);

$sql = "SELECT ID FROM User ORDER BY ID DESC LIMIT 1";
$result = $con->query($sql);
$lastID = $result->fetch_assoc()['ID'];

//Set exp_date
$date = new DateTime();
$date->add(new DateInterval('P'.$month.'M'));
$sql = "Insert into Client (Exp_Date, UserID) Values ('{$date->format('y-m-d')}', '{$lastID}')";
$result = $con->query($sql);
$client['Full_Name'] = $name;
$client['Email'] = $email;
$client['Code'] = $code;
$client['Exp_Date'] = $date->format('Y-m-d');

echo (json_encode($client));

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
    $mail->Body    = "You have a new subscription.<br/>Your new expiration date is: ".$date->format('Y-m-d')."<br/>Please save the QRCode to your phone.";

    $mail->send();



function getGUID(){
    if (function_exists('com_create_guid')){
        return com_create_guid();
    }
    else {
        mt_srand((double)microtime()*10000);//optional for php 4.2.0 and up.
        $charid = strtoupper(md5(uniqid(rand(), true)));
        $hyphen = chr(45);// "-"
        $uuid = chr(123)// "{"
            .substr($charid, 0, 8).$hyphen
            .substr($charid, 8, 4).$hyphen
            .substr($charid,12, 4).$hyphen
            .substr($charid,16, 4).$hyphen
            .substr($charid,20,12)
            .chr(125);// "}"
        return $uuid;
    }
}

?>