<?php // php문법을 사용하겠다는 선언 PHP가 지원되는 웹 서버에서 실행

$ID       = $_POST['ID'];
$BLOCK_ID = $_POST['BLOCK_ID'];
///////////////////////////////////////////////////////////////////////////////
echo "<h3>상수</h3>";
define("MYCHAR","대한민국"); //  상수선언
echo MYCHAR;
$a = MYCHAR.'<br>한반도<br>';
echo $a;

///////////////////////////////////////////////////////////////////////////
echo "<h3>If 문</h3>";
$temp;
$temp = 'a';
echo "<br>\$temp = 'a'; <br>\$temp가 'a' 와 다르다면<br>";

echo($temp =! 'a')?  "true": "false";
//echo 문은 각각의 값을 출력하기 위해 사용되는 것이 아니라
// 조건에 따라 참일 때 또는 거짓일 때 값을 선택하여 반환함. 선택된 값을 echo로 출력

///////////////////////////////////////////////////////////////////////////
echo "<h3>배열</h3>";
$arr = array(1,3,2,5,2);
print_r($arr);
//<object data="aa" type="tma">aa</object>
//모든 값(오브젝트, 배열, 값 등)을 출력하는 함수 print_r(); => Array ( [0] => 1 [1] => 3 [2] => 2 [3] => 5 [4] => 2 ) 출력
$arr = array(1);
print_r($arr); //Array ( [0] => 1)

array_push($arr, 22);//Array ( [0] => 1 [1] => 22) 
print_r($arr);

$arr = array("1"=>3);//Array ([1] => 3)
array_push($arr, 1);
array_push($arr, 5);
print_r($arr); //Array ( [1] => 3 [2] => 1 [3] => 5 )

//***결론 배열구조는 Key, Value 구조로 유연하게 Object로 넘어갈 수 있는 구조로 형성

///////////////////////////////////////////////////////////////////////////
echo "<h3>foreach문</h3>";
foreach($arr as $i){ // $arr이 가지고 있는 총 갯수를 알아서 판단하여 반복 == c++의 for (auto : it) 과 유사
   echo $i;     //  => 315
}
for($t =0; $t<count($arr); $t++) // 총 갯수를 가지고 반복
{
    echo $arr[$t]; // => 31 출력 // $arr[0]의 value 가 null이기에 echo 출력이 bool로 되었다
}

///////////////////////////////////////////////////////////////////////////
echo "<h3>2차배열</h3>";
$arr = array(array(3,1,2,34,41,1),array(9,8,7,4,5,4,74,1));
//$arr 의 Count = 2;
foreach($arr as $i){ 
    echo $i;     //  => $arr 의 각 배열 value 내부의 배열 value를 읽지 못함
 }
foreach($arr[1] as $i)
{
    echo $i; // 출력 성공
}
//key, value 로 foreach문
foreach($arr as $k => $v)  //arr 을 k변수와 v변수에 key 와 value를 담아라
{
    echo "Key : ".$k.", Value : ".$v."<br>";            //Key : 0, Value : Array    Key : 1, Value : Array
}
echo "<br>";


$arr = array(1,3,2,5,2);
foreach($arr as $k => $v)
{
    echo "Key : ".$k.", Value : ".$v."<br>";            
}
//Key : 0, Value : 1    
//Key : 1, Value : 3    
//Key : 2, Value : 2    
//Key : 3, Value : 5    
//Key : 4, Value : 2


echo "<h3>오브젝트</h3>";
$arr = array("가"=>41, "나"=> 22, "다"=>11, "라"=>33); // Key => Value 로 구성되는 문법
// JS와 동일하게 Value인지 배열,Object인지 선언에 따라 구조가 잡힌다
foreach($arr as $k => $v) // 오브젝트를 대상으로 foreach를 돌림
{
    echo "Key : ".$k.", Value : ".$v."<br>";
}
//Key : 가, Value : 41
//Key : 나, Value : 22
//Key : 다, Value : 11
//Key : 라, Value : 33

// html상에서 <?php  $a = 1;    ? >구조탈출 후 여러 작업을 하고 난뒤  <?=  $a   ? > 는 php로 들어가 echo까지 처리하는 기호 
//예를 들어 <h1><?=  $a   ? ></h1> 같은 작업이 가능하다

// html상에서 <?php   for문 { 이후 괄호를 닫지않고 ? > 탈출 시킨후에 작업 후 <?php }   ? >를 할수 있다
// ex) <?php      $a = array(1,3,4,1,2); foreach($a as $i) {            ? > 
//     <h1><?=    $a        ? ></h1>             <?php      }           ? >

//==> 출력은 <h1>   1  </h1> <h1>   3  </h1> <h1>   4  </h1> <h1>   1  </h1> <h1>   2  </h1> 가 된다
?>