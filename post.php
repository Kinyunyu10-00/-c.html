<?php

use function PHPSTORM_META\sql_injection_subst;

session_start();

$hostname ="localhost";
$dbuserrname ="root";
$dbpassword ="";
$dbname ="kikoi";
//$pdo = new PDO("mysql:host=$h");

$con=mysqli_connect('$hostname','$dbusername','$dbpassword','$dbname');
if($conn){
    echo "the program is successfully";

}else{
    die(mysqli_errno($conn));
}


?>

