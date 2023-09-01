
//스크립트 태그가 없는 JS파일에 스크립트 관리
function printhello(){ 
    document.write("Hello");
    }

function SetColor(MyColor,self){
        self.style.color = MyColor;
    }

    function MySum(Left,Right){
       return Left + Right;
    }
var MyObject = {};
    MyObject.FirstFunction = function(){
        document.write("<h3>첫번째함수</h3>");
    }
    MyObject.SecondFunction = function(){
        document.write("<h3>두번째함수</h3>");
    }
    MyObject.ThirdFunction = function(){
        document.write("<h3>세번째함수</h3>");
    }

var tempArray =    [
        {
            이름 : "amy",
            나이 : "10" 
        },
        {
            이름 : "john",
            나이 : "12"
        }];
tempArray.push({이름 : "jave",age : 14});

function tempPush(self, name, age){
    self.push({이름 : name, 나이 : age});
}
tempPush(tempArray, "mypush","8");

// 오브젝트를 담고 싶다면 key, value형태인 오브젝트로 선언, value 값에 오브젝트를 넣는다
var tempObj = { };
tempObj.tempkey = tempArray;
