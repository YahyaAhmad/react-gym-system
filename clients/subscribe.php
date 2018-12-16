<?php
require('../connect.php');

$_POST = json_decode(file_get_contents('php://input'), true);
$expDate = $_POST['expDate'];
$id = $_POST['id'];
$months = $_POST['months'];
$monthID = $_POST['monthID'];

$expDateTime = strtotime($expDate);
$curTime = time();
$curDate = new DateTime();
if($curTime > $expDateTime) {
    $newCurDate = new DateTime();
    $newCurDate->add(new DateInterval('P'.$months.'M'));
} else {
    $newCurDate = new DateTime();
    $newCurDate = $newCurDate->setTimestamp($expDateTime);
    $newCurDate->add(new DateInterval('P'.$months.'M'));
}


$sql = "Update Client set Exp_Date = '{$newCurDate->format('Y-m-d')}' where Client.UserID = '{$id}'";
$result = $con->query($sql);

$sql = "INSERT INTO Finance (`ID`, `UserID`, `OfferID`, `Date`) VALUES (NULL, '{$id}', {$monthID}, '{$curDate->format('y-m-d H:i:s')}');";
$result = $con->query($sql);
?>