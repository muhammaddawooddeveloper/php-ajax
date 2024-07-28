<?php

include('db.php');
$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$ps = $_POST['password'];

if ($name != '' && $email != '' && $ps != ''){
    $qry = "INSERT INTO student(Id , Name , Email , Password) VALUES ('$id' , '$name' , '$email' , '$ps')  ON DUPLICATE KEY UPDATE  Name='$name', Email='$email', Password='$ps' ";
    if(mysqli_query($con ,$qry)){
        echo "successfully added";
    }
    
    else{
        echo "Error";
    }

} 
else{
    echo "please enter empty field";
}

?>