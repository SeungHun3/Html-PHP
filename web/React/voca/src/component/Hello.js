// 함수를 만들어 export 시켜 컴포넌트로 사용

import World from "./World";

export default function Hello() {
    return (
        <div>
            <h1>Hello</h1>
            <World /><World />
        </div>
    );
}