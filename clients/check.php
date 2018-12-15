<?php

require('../connect.php');
$code = $_POST['qrcode'];
$type = "None";
$sql = "SELECT * from User JOIN Client where Code = '{$code}'";
$result = $con->query($sql);
$rows = $result->num_rows;
if($rows<=0){
    $sql = "SELECT * from User JOIN Coach where Code='{$code}'";
    $result = $con->query($sql);
    $rows = $result->num_rows;
    $type = "Coach";
} else {
    $type = "Client";
}
$data = [ 'status' => '' ];

$first_row = $result->fetch_assoc();

if($rows>0){
    if($type!='Coach'){
        $date = strtotime($first_row["Exp_Date"]);
        $curDate = date('Y-m-d').time();;
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
}
else{
    $type = "None";
    $data['status'] = "invalid_qrcode";
}

echo json_encode($data);

?>