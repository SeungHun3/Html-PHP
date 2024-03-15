
/*
useSelector는 리액트의 리덕스 스토어 관련 Hook중 하나이다. 
이 Hook은 스토어의 상태값을 반환해주는 역할을 한다. 

useSelector를 사용한 함수에서 리덕스 스토어의 상태값이 바뀐 경우
( 버튼 클릭 등의 이벤트를 통해 액션이 실행되어 상태값이 변경된 경우) 
바뀐 스토어의 상태값을 다시 가져와 컴포넌트를 렌더링 시킨다.

리덕스 스토어의 상태변경은 useDispatch를 사용한다
dispatch({ type: 'seunghun', name: 'bb' });
여기서 type:의 키를 꼭 넣어주어야 reducer 액션에 할당할 수 있다 

reducer 는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다.

function reducer(state, action) {
  // 새로운 상태를 만드는 로직
  // const nextState = ...
  return nextState;
}

 
*/

import { useSelector } from 'react-redux';

const fruitList = useSelector(state => state.fruit);
// useSelector의 사용법

/*
useSelector를 사용하여 상태값을 가져오는 것은 간단하다. 
useSelector에 매개변수에 state => state.모듈명  형식으로 상태값을 반환할 수 있다. 
fruit 상태 안에 name, price 등의 요소를 바로 가져오고 싶을 경우, 

state => state.fruit.name   
state => state.fruit.price 와 같이 
요소요소들을 마침표로 구분하여 상태값을 가져올 수도 있다. 

*/



// modules/fruit.js -  fruit이라는 기능을 가진 리듀서

// 액션
const SET_FRUIT_LIST = "fruit/SET_FRUIT_LIST";

// 액션 생성 함수
export const setFruitList = fruistList => ({ type : SET_FRUIT_LIST, fruitList });

// 초기값
const initialState = {
  name: false,
  price: false,
};

// 리덕스 스토어값 변경
export default function fruit(state = initialState, action) {
  switch(action.type) {
    case SET_FRUIT_LIST :
      return {
        ...state,
        name: action.fruitList,
      };
    default:
      return state;
  }
}

/*
이전 게시글의 액션을 바탕으로, fruitList에 '딸기'라는 값이 들어간 상태로 
setFruitList라는 액션이 실행되었다고 가정해보자.

setFruitList 액션으로 인해, fruit이라는 모듈의 name 상태에 '딸기'라는 값이 들어갔다.
 */

const fruit = useSelector(state => state.fruit);

dispatch(setFruitList('딸기')); // 액션 호출

console.log(fruit.name); // '딸기'
console.log(fruit.price); // false