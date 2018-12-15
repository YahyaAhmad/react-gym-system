<?php
require('../connect.php');
$_POST = json_decode(file_get_contents('php://input'), true);

$months = isset($_POST['months'])?$_POST['months']:'';
$price = isset($_POST['price'])?$_POST['price']:'';

$sql = "Insert into Offer (Duration, Price) Values ('{$months}', '{$price}')";
$result = $con->query($sql);

?>