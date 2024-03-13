import World from "./World"; // 함수를 만들어 export 시켜 컴포넌트로 사용
import styles from "./Hello.module.css";

export default function Hello() {

    function showName() {
        console.log("Seunghun");
    }
    function showAge(age) {
        console.log(age);
    }
    function showText(e) {
        console.log(e.target.value);
    }
    function showText1(tex) {
        console.log(tex);
    }
    return (
        <div>
            <h1 style={
                {
                    color: '#f00',
                    borderRight: "12px solid #000",
                    marginBottom: "50px",
                    opacity: 1,
                }
            }>
                Hello
            </h1>
            <button onClick={() => {
                console.log("test");
            }} >test </button>
            <button onClick={showName}>Show Name</button>
            <button onClick={showAge(30)}>Show Age</button>
            <input type="text" onChange={showText} />
            <input type="text" onChange={(e) => {
                console.log(e.target.value)
            }} />
            <input type="text" onChange={(e) => {
                const txt = e.target.value;
                showText1(txt);
            }} />


        </div>
    );
}