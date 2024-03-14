import { useState } from "react";

//{ word:w } word를 새로운 변수명으로 할당하겠다
export default function Word({ word:w }) {
    const [word,setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, SetIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow);
    }
    function toggleDone() {
        SetIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`,
            {
                method: "PUT",
                headers:
                {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        ...word,
                        isDone: !isDone,
                    }),
            }).then(res => {
                if (res.ok) {
                    SetIsDone(!isDone);
                }
            })
    }

    function del() {
        if (window.confirm('삭제하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`,
                {
                    method: 'DELETE'
                }
            ).then(res => {
                if(res.ok){
                    setWord({id:0}) // word의 key(id)의 value를 0으로 바꿔줌
                }
            })
        }
    }
    
    if(word.id ===0){
        return null;
    }

    return (<tr className={isDone ? 'off' : ''}>
        <td>
            <input type="checkbox" checked={isDone} onChange={toggleDone} />
        </td>
        <td>
            {word.eng}
        </td>
        <td>
            {isShow && word.kor}
        </td>
        <td>
            <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
            <button onClick={del} className="btn_del" >삭제</button>
        </td>
    </tr>);
}