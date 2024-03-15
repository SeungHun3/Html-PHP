// 상태(State)로 정의되어 있고 상태가 업데이트되면 
// React는 자동으로 해당 상태(State)를 사용하는 컴포넌트들을 리렌더링합니다.


// 버튼 누를때 name1과 msg1 은 리렌더링하지 않지만 
// state에 종속된 컴포넌트들 name, msg 는 리렌더링 된다

export default function Hello({age, height}) {
    // props = read only json으로 넘어옴

    // useState 는 배열을 반환함, 첫번째 값은 state이며 두번째는 state를 변경해주는 함수이다.
    const [name, setName] = useState("Mike");
    const [Age, setAge] = useState(age);
    const msg = Age > 19 ? "성인입니다." : "미성년자입니다.";
    
    let name1 = "Mike"
    let msg1 = name1 === "Mike" ? "Jane" : "Mike";
    function changeName() {
        //name = name === "Mike" ? "Jane" : "Mike";
        // 값은 변경되었지만 dom 업데이트가 되지 않았음
        // dom 이란 컴포넌트와 html을 연결해주는 장치
        //document.getElementById("name").innerText = name;

        setName(name === "Mike" ? "Jane" : "Mike");
        setAge(Age + 1);
        

        name1 = name1 === "Mike" ? "Jane" : "Mike";
    }

    return (
        <div>
            <h1>state</h1>
            <h2>컴포넌트 속성값</h2>
            <h2>{name}({Age}세)(키 {height})</h2>
            <h2>{msg}</h2>

            <h2>{name1}</h2>
            <h2>{msg1}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    );
}