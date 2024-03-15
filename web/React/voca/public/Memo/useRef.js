/*

훅(hook) 함수

상태 변경 -> 컴포넌트 재 랜더링(변경시 내부변수들이 초기화)
React 컴포넌트는 기본적으로 내부 상태(state)가 변할 때 마다 다시 랜더링(rendering)이 됩니다.

예를 들어, 아래 <Counter/> 컴포넌트의 버튼을 5번 클릭하면 count 상태값은 5번 바뀌게 됩니다.
*/
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log(`랜더링... count: ${count}`);

  return (
    <>
      <p>{count}번 클릭하셨습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </>
  );
}
/*
5번의 로그가 찍히는 것을 볼 수 있는데요. 이를 통해, <Counter/> 컴포넌트 함수는 count 상태가 바뀔 때 마다 호출되는 것을 알 수 있습니다.

랜더링... count: 1
랜더링... count: 2
랜더링... count: 3
랜더링... count: 4
랜더링... count: 5
컴포넌트 함수가 다시 호출이 된다는 것은 함수 내부의 변수들이 모두 다시 초기화가 되고 함수의 모든 로직이 다시 실행된다는 것을 의미합니다.
*/



/*
상태가 변할 때 마다 React 컴포넌트 함수가 호출되어 화면이 갱신되기를 바랍니다. 
하지만 그에 따른 부작용으로 함수 내부의 변수들이 기존에 저장하고 있는 값들을 잃어버리고 초기화되는데요. 
간혹 다시 랜더링이 되더라도 기존에 참조하고 있던 컴포넌트 함수 내의 값이 그대로 보존되야 하는 경우가 있습니다.
*/
import React, { useState, useEffect } from "react";

function ManualCounter() {
  const [count, setCount] = useState(0);

  let intervalId;

  const startCounter = () => {
    // 💥 매번 새로운 값 할당
    intervalId = setInterval(() => setCount((count) => count + 1), 1000);
  };
  const stopCounter = () => {
    clearInterval(intervalId);
  };

  return (
    <>
      <p>카운트: {count}</p>
      <button onClick={startCounter}>시작</button>
      <button onClick={stopCounter}>정지</button>
    </>
  );
}
/*
여기서 가장 큰 걸릿돌은 안에서 선언된 intervalId 변수를 
startCounter() 함수와 stopCounter() 함수가 공유할 수 있도록 해줘야 한다는 것입니다. 
그럴려면 intervalId 변수를 두 함수 밖에서 선언해야하는데 
그럴 경우, count 상태값이 바뀔 때 마다 컴포넌트 함수가 호출되어 intervalId도 매번 새로운 값으로 바뀔 것입니다. 
따라서, 브라우저 메모리에는 미처 정리되지 못한 intervalId 들이 1초에 하나식 쌓여나갈 것입니다. 💥
*/

/*
클래스를 이용해서 React 컴포넌트를 작성할 시절에는, 
이와 같은 문제를 해결하는 가장 명료한 방법은 인스턴스(instance) 변수에 이러한 값들을 저장하는 것이 었습니다. 
하지만 최근처럼 대부분 함수를 이용해서 React 컴포넌트를 작성할 때는 
일반적으로 useRef 훅(hook) 함수를 사용해서 이러한 문제를 해결합니다.
*/

/*
useRef 함수는 current 속성을 가지고 있는 객체를 반환하는데, 
인자로 넘어온 초기값을 current 속성에 할당합니다. 
이 current 속성은 값을 변경해도 상태를 변경할 때 처럼 React 컴포넌트가 다시 랜더링되지 않습니다. 
React 컴포넌트가 다시 랜더링될 때도 마찬가지로 이 current 속성의 값이 유실되지 않습니다.
*/

import React, { useState, useRef } from "react";

function ManualCounter() {
  const [count, setCount] = useState(0);
  const intervalId = useRef(null);
  console.log(`랜더링... count: ${count}`);

  const startCounter = () => {
    intervalId.current = setInterval(
      () => setCount((count) => count + 1),
      1000
    );
    console.log(`시작... intervalId: ${intervalId.current}`);
  };

  const stopCounter = () => {
    clearInterval(intervalId.current);
    console.log(`정지... intervalId: ${intervalId.current}`);
  };

  return (
    <>
      <p>자동 카운트: {count}</p>
      <button onClick={startCounter}>시작</button>
      <button onClick={stopCounter}>정지</button>
    </>
  );
}
/*
랜더링... count: 0
시작... intervalId: 17
랜더링... count: 1
랜더링... count: 2
랜더링... count: 3
랜더링... count: 4
랜더링... count: 5
정지... intervalId: 17
시작... intervalId: 32
랜더링... count: 6
랜더링... count: 7
랜더링... count: 8
정지... intervalId: 32
*/

import React from "react";
import "./styles.css";
import Counter from "./Counter";
import AutoCounter from "./AutoCounter";
import ManualCounter from "./ManualCounter";

export function Appd() {
  return (
    <div className="App1">
      <Counter />
      <hr />
      <AutoCounter />
      <hr />
      <ManualCounter />
    </div>
  );
}
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log(`랜더링... count: ${count}`);

  return (
    <>
      <p>{count}번 클릭하셨습니다.</p>
      <button onClick={() => setCount((count) => count + 1)}>클릭</button>
    </>
  );
}

//export default Counter;

import React, { useState, useEffect } from "react";

function AutoCounter() {
  const [count, setCount] = useState(0);
  console.log(`랜더링... count: ${count}`);

  useEffect(() => {
    const intervalId = setInterval(() => setCount((count) => count + 1), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <p>자동 카운트: {count}</p>;
}

//export default AutoCounter;

import React, { useState, useRef } from "react";

function ManualCounter() {
  const [count, setCount] = useState(0);
  const intervalId = useRef(null);
  console.log(`랜더링... count: ${count}`);

  const startCounter = () => {
    intervalId.current = setInterval(
      () => setCount((count) => count + 1),
      1000
    );
    console.log(`시작... intervalId: ${intervalId.current}`);
  };

  const stopCounter = () => {
    clearInterval(intervalId.current);
    console.log(`정지... intervalId: ${intervalId.current}`);
  };

  return (
    <>
      <p>자동 카운트: {count}</p>
      <button onClick={startCounter}>시작</button>
      <button onClick={stopCounter}>정지</button>
    </>
  );
}

//export default ManualCounter;
