<?php

include("db.php");

$name = $_POST['name'];
$record = "SELECT * FROM student WHERE LOWER(`Name`) LIKE '%$name%' or LOWER(`Email`) LIKE '%$name%'";

// '%$name%'   single qutation not backticss

$res = mysqli_query($con , $record);


// print_r($res);

while ($row = mysqli_fetch_assoc($res)) {
    $data[] = $row; 
    
}

echo json_encode($data);

?>