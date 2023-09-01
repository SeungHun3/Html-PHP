<?php 

//솔라시도DB
$server_name = "database-solaseado.cbyumy1sp3lp.ap-northeast-2.rds.amazonaws.com";
$user = "admin";
$password = "akaahTlrtm6";
$database = "Solaseado_DB";


$connect = mysqli_connect($server_name, $user, $password, $database);  // 정보를 담은 클래스 
mysqli_select_db($connect, $database) or die("DB Select Failed!!");    // 실행명령


//  mysql 기본문법
//  CRUD
// - R : select * from 테이블명 where 조건절;
// - C : insert into from 테이블명 (컬럼명) Values (컬럼에 대체할 데이터);
//  약식코드 *insert into from 테이블명 set 컬럼명 = 컬럼에 대체할 데이터;
// - U : update from 테이블명 (컬럼명) Values (컬럼에 대체할 데이터);
//  약식코드 *update from 테이블명 set 컬럼명 = 컬럼에 대체할 데이터;
// - D : delete from 테이블명 where 조건절;

// mysql CRUD 구글에 검색 ㄱㄱ


?>