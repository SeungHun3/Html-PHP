<?php 
// include 에러 발생하면 경고 후 실행계속
// require 에러 발생시 중단

//requir_once(); = 추천됨
//include_once();

echo "<h1>Include_Require</h1>";
include_once("PHP_Include.php");
// ./myFolder/ == myFolder/

//$database 디비 가져오기
$sql_query = "select * from PlayerData"; // titledata라는 테이블의 전부를 가져오는 쿼리문
//$sql_query_order = "select * from PlayerData order by id desc"; // order by ~~ desc // ~~ 역순

$result = mysqli_query($connect, $sql_query); //db에 접속한 다음 쿼리를 실행해라

while($row = mysqli_fetch_array($result)) // 데이터 구조가 전부 array구조로 되어있다 // row테이블 => row라는 변수에 배열을 담았다
{
    echo $row['DisplayName']."<br>";
}

// DB넣기
$name = "bas";
$region = "baz";

$My_Query = "insert into PlayerData (DisplayName, Region) values ('$name','$region')";
$insert_result = mysqli_query($connect, $My_Query);

if($insert_result)
{
    echo "추가성공";
}
else{
    echo "추가실패";
}
//DB지우기
$deleteData = array("a"=>"myname", "b"=> 22, "c"=>11, "d"=>33);
echo "<h3><a href= './PHP_Delete.php?del_no=".$deleteData['a']."'>삭제테스트</a></h3>"; //이렇게 넘기는 값은 무조건 오브젝트형으로 넘어간다
// PHP_Delete.php 파일을 링크해서 del_no 라는 키 값과 $deleteData['a']라는 value 를 넘긴다



mysqli_close($connect);

?>
