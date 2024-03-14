// api 비동기 통신을 위한

fetch();
// promise 객체가 반환됨
// => 따라서 프로미스의 후속 처리 메서드인 then을 사용하여 
// resolve한 객체를 전달받을 수 있다.

// 한번만 호출
useEffect(() => {
    fetch("http://localhost:3001/days")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setDays(data);
            console.log(data);
        })
}, []);

// days호스트에 접속해서 promise 객체 전달받아 json변환 후 
// 해당객체를 setDays에 넣어줌

// 이것은 useEffect함수 방식에 따라 빈배열을 두번째 요소에 넣고 
// 한번만 호출시킴

/*
fetch 함수가 반환한 Promise 객체

Response {
  __proto__: Response {
    type: 'basic',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    redirected: false,
    status: 200,
    ok: true,
    statusText: '',
    headers: Headers {},
    body: ReadableStream {},
    bodyUsed: false,
    arrayBuffer: ƒ arrayBuffer(),
    blob: ƒ blob(),
    clone: ƒ clone(),
    formData: ƒ formData(),
    json: ƒ json(),
    text: ƒ text(),
    constructor: ƒ Response()
  }
}
fetch 함수로 받은 Response 객체에는 HTTP 응답을 나타내는 프로퍼티들이 있다.
그 중 json() 내장 함수가 있는데, res.json 메서드 사용 시 
HTTP 응답 body 텍스트를 JSON 형식으로 바꾼 프로미스를 반환한다
(자주 썼던 .then(res ⇒ res.json())의 의미였다).
*/


/*

get호출 : 존재하는 자원을 요청

fetch함수는 디폴트로 GET 방식으로 작동

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
==================================================================

post 호출 : 새로운 자원 생성 요청

→ 폼 등을 사용해서 데이터를 만들어 낼 때, 보내는 데이터의 양이 많거나, 
비밀번호 등 개인정보를 보낼 때 POST 메서드 사용
→ headers에서 json 형식임을 알려주지 않으면 
서버에서 못 읽는 문제가 생길 수 있음.

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
==================================================================

put 호출 : 존재하는 자원 변경 요청

→ API에서 관리하는 데이터의 수정을 위해 PUT 메서드 사용함.
→ method 옵션만 PUT으로 설정한다는 점 빼놓고는 POST 방식과 비슷

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
==================================================================

Delete 호출 : 존재하는 자원 삭제 요청
→ 보낼 데이터가 없기 때문에 headers, body 옵션이 필요없음

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data))

*/