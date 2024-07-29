<?php


include("db.php");

$id = $_POST['id'];

$qry = "SELECT * FROM student WHERE id = '$id' ";


$res = mysqli_query($con , $qry);

$row = mysqli_fetch_assoc($res);

echo json_encode($row);

?>