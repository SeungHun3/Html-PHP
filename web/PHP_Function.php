<?php 

function MyPrint(){
    echo "출력";
}

MyPrint();
MyPrint();
MyPrint();
echo "<br>";
class PrintClass {
    public $fruit = "사과";
    private function MyFunc1(){
        MyPrint();
    }
    public function MyFunc2(){
        $this->MyFunc3();
    }
    protected function MyFunc3(){
        $this->MyFunc1();
    }
}
echo "<br>";

$myClass = new PrintClass();
$myClass->MyFunc2();
echo "<br>";
echo $myClass->fruit."<br>";

$myClass->fruit = "파인애플";
echo $myClass->fruit."<br>";

$myClass = null;
if($myClass)
{
    echo "true";
}
else{
    echo "false"; //출력
}
echo "<br>";
// 메모리 삭제할 필요가 없음
?>