import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch"

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e) {

        e.preventDefault();

        if (!isLoading) {
            setIsLoading(true);
            fetch(`http://localhost:3001/words/`,
                {
                    method: "POST",
                    headers:
                    {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                        {
                            day: dayRef.current.value,
                            eng: korRef.current.value,
                            kor: engRef.current.value,
                            isDone: false,
                        }),
                }).then(res => {
                    if (res.ok) {
                        alert("생성이 완료되었습니다");
                        history(`/day/${dayRef.current.value}`);
                        setIsLoading(false);
                    }
                })
        }
    }
    // 렌더링 되어있는 값으로 데이터 접근
    const engRef = useRef(null); // dom 에 접근할 수 있게 해줌 스크롤위치 확인, 포커스 주거나 
    const korRef = useRef(null);
    const dayRef = useRef(null);

    function log() {
        return "로그";
    }

    return <form onSubmit={onSubmit}>

        <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="computer" ref={engRef} />
        </div>

        <div className="input_area">
            <label>Kor</label>
            <input type="text" placeholder="컴퓨터" ref={korRef} />
        </div>

        <div className="input_area">
            <select ref={dayRef}>
                {days.map(day => (
                    <option key={day.id} value={day.day} >
                        {day.day}
                    </option>
                ))}
            </select>
        </div>

        <button style={
            {
                opacity: isLoading ? 0.3 : 1,
            }}>
            {isLoading ? "Saving..." : "저장"}
        </button>

        <button>{log()}</button>
    </form>
}

/*
"저장" 버튼을 누르면 <form> 요소의 onSubmit 이벤트 핸들러 함수가 실행됩니다. 
<form> 요소 내에서 "저장" 버튼을 클릭하면 해당 폼이 제출되는데, 
이는 HTML의 기본 동작입니다. 
폼이 제출되면 브라우저는 폼 데이터를 수집하고 서버로 전송하는 작업을 수행합니다.

따라서 "저장" 버튼을 누르면 onSubmit 이벤트 핸들러 함수가 실행되고, 
해당 함수에서는 폼의 제출을 방지하고자 e.preventDefault()를 사용하여 
기본 동작을 중지시키고 있습니다. 
이 후에는 해당 함수에서 원하는 동작을 수행할 수 있습니다.

예를 들어, 이벤트 핸들러 함수 내에서는 입력된 데이터를 수집하거나 
서버로 데이터를 전송하는 등의 작업을 수행할 수 있습니다.
*/