<?php

include("db.php");

$id = $_POST['id'];
$dd = "DELETE FROM student WHERE id = $id";
$qry = mysqli_query($con , $dd);

if($qry){
    echo "delete";
}
else{
    echo "not delete";
}

?>