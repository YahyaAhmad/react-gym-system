<?php

require('../connect.php');
$code = $_POST['qrcode'];
$type = "None";
$sql = "SELECT * from User JOIN Client on User.ID = Client.UserID where Code = '{$code}'";
$result = $con->query($sql);
$rows = $result->num_rows;
$type = "Client";
$data = [ 'status' => '' ];

$first_row = $result->fetch_assoc();

if($rows>0){
    if($type!='Coach'){
        $date = strtotime($first_row["Exp_Date"]);
        $curDate = time();
        if($date>$curDate)
            $data['status'] = "accepted";
        else
            $data['status'] = "rejected";
        $data['expDate'] = $first_row['Exp_Date'];
    }

    $data['ID'] = $first_row['UserID'];
    $data['fullName'] = $first_row['Full_Name'];
    $data['email'] = $first_row['Email'];
    $data['code'] = $first_row['Code'];
    $data['type'] = $type;
    $sql = "Select * from INOUTS where UserID = '{$first_row['UserID']}' order by ID desc";
    $inout = $con->query($sql);
    $curStatus = $inout->fetch_assoc();
    $status = $curStatus['Status']==0?1:0;
    $curDate = new DateTime();
    $curDateStr = $curDate->format('y-m-d H:i:s');
    $sql = "INSERT INTO INOUTS (`ID`, `UserID`, `Status`, `Date`) VALUES (NULL, '{$first_row['UserID']}', '{$status}', '{$curDateStr}');";
    $inout = $con->query($sql);
    $data['inout'] = $status;
}
else{
    $type = "None";
    $data['status'] = "invalid_qrcode";
}

echo json_encode($data);

?>