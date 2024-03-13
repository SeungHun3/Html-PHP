import { useState } from "react";

export default function Hello(props) {
    // props = read only json으로 넘어옴

    // useState 는 배열을 반환함, 첫번째 값은 state이며 두번째는 state를 변경해주는 함수이다.
    const [name, setName] = useState("Mike");
    const [age, setAge] = useState(props.age);

    //let name = "Mike"
    function changeName() {
        //name = name === "Mike" ? "Jane" : "Mike";
        // 값은 변경되었지만 dom 업데이트가 되지 않았음
        // dom 이란 컴포넌트와 html을 연결해주는 장치
        //document.getElementById("name").innerText = name;

        setName(name === "Mike" ? "Jane" : "Mike");
        setAge(age + 1);
    }

    return (
        <div>
            <h1>state</h1>
            <h2>컴포넌트 속성값</h2>
            <h2>{name}({age}세)</h2>
            <button onClick={changeName}>Change</button>
        </div>
    );
}