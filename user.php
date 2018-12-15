<?php

require('./connect.php');

$user = $_POST['username'];
$pass = $_POST['password'];

$sql = "select * from Admin where Username = '{$user}' and Password = '{$pass}'";

$result = $con->query($sql);


if($result->num_rows > 0){
    $data = ['message' => 'success'];
}
else
    $data = ['message' => 'fail'];


echo json_encode($data);



?>