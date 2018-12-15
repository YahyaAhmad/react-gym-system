<?php

require('../connect.php');
$sql = "Select User.Full_Name,INOUTS.ID,INOUTS.Status,INOUTS.Date from User,INOUTS where User.ID = INOUTS.UserID";
$result = $con->query($sql);

$toReturn = array();
while($row = $result->fetch_assoc()){
    array_push($toReturn,$row);
}

echo json_encode($toReturn);

?>