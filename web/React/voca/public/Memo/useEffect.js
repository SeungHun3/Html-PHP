// 어떤 상태값이 바뀌었을때 동작하는 함수

// 첫번째 매개변수로 함수 넣음
useEffect(()=>{});
// 렌더링 결과가 dom 에 반영된 직후 호출
// 컴포넌트가 사라지기 직전 호출



function onclick() {
    setCount(count + 1);
}
function onclick2() {
    setDays([
        ...days, // 배열
        {
            id: Math.random(),
            day: 1,
        }
    ])
}
/*
여기서 
        ...days, // 배열
        {
            id: Math.random(),
            day: 1,
        }
의 의미를 본다면 

넣을 매개변수로서
...days는 <스프레드 연산자>를 사용하여 배열을 **복사**한 후, 
이것은 새로운 배열을 생성

즉, 기존 배열 days의 모든 요소를 새 배열에 복사하는것을 의미.
이 값에 , {}요소를 **추가** 한 후 넣을 매개변수가 완성됨
*/

// 상태값을 매개변수로 받는 값이 여러개가 존재한다면?
// 어떤함수를 실행해도 useEffect함수가 실행됨
// 이를 방지하기 위해 두번째 매개변수로 바인딩할 상태값을 배열로 넣어줌(의존성 배열)

useEffect(() => {
    console.log("CountChange");
}, [count]);


// 상태값과 무관하게 렌더링 이후 딱 한번만 실행하게 하려면
// 빈배열을 추가하면 됨
useEffect(() => {
    console.log("CountChange");
}, []);