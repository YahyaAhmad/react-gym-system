<?php

require('../connect.php');
$sql = "Select User.Full_Name,Finance.ID,Finance.Date,Offer.Price, Offer.Duration from User,Finance,Offer where User.ID = Finance.UserID and Finance.OfferID = Offer.ID order by Finance.ID";
$result = $con->query($sql);

$toReturn = array();
while($row = $result->fetch_assoc()){
    array_push($toReturn,$row);
}

echo json_encode($toReturn);

?>