<?php

require('../connect.php');
$sql = "Select Client.ID, Client.UserID , User.Full_Name, User.Email, User.Code, Client.Exp_Date from Client, User Where Client.UserID = User.ID";
$result = $con->query($sql);

$toReturn = array();
while($row = $result->fetch_assoc()){
    array_push($toReturn,$row);
}

echo json_encode($toReturn);

?>