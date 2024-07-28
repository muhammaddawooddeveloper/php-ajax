<?php

include("db.php");

$record = "SELECT * FROM student";

$res = mysqli_query($con , $record);

// print_r($res);

while ($row = mysqli_fetch_assoc($res)) {
    $data[] = $row; 
    
}

echo json_encode($data);

?>