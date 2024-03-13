import World from "./World"; // 함수를 만들어 export 시켜 컴포넌트로 사용
import "./Hello.css"
export default function Hello() {
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
            <World /><World />

            <div className="box"/>

        </div>
    );
}