<?php

require('../connect.php');
$_POST = json_decode(file_get_contents('php://input'), true);
$userId = $_POST['id'];
$sql = "Delete from Client where UserID = '{$userId}'";
$result = $con->query($sql);
$sql = "Delete from User where ID = '{$userId}'";
$result = $con->query($sql);
echo $_POST['id'];

?>