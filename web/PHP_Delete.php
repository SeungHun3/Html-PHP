<?php
require_once("PHP_Include.php");
echo "<h2>Delete Page</h2>";
echo "echo : ".$_GET;  //출력 :  Array


echo "<h3>print_r</h3>";

print_r($_GET); //  출력 : Array ( [del_no] => 41 )
$sql_query = "delete from PlayerData where DisplayName = '".$_GET['del_no']."'";
$result = mysqli_query($connect, $sql_query);
//del_no라는 키값이 넘어온 value 를 가진 DisplayName의 행을 지운다

?>