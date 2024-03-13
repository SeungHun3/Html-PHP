import { useState } from "react";

export default function Hello() {
    let name = "Mike"
    function changeName() {
        name = name === "Mike" ? "Jane" : "Mike";
        // 값은 변경되었지만 dom 업데이트가 되지 않았음
        // dom 이란 컴포넌트와 html을 연결해주는 장치
        document.getElementById("name").innerText = name;
    }

    return (
        <div>
            <h1>state</h1>
            <h2>컴포넌트 속성값</h2>
            <h2 id = "name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    );
}