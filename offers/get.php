<?php

require('../connect.php');
$sql = "Select * from Offer where Deleted = false";
$result = $con->query($sql);

$toReturn = array();
while($row = $result->fetch_assoc()){
    array_push($toReturn,$row);
}

echo json_encode($toReturn)

?>