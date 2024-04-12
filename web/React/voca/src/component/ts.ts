

// #region object 객체 와 리터럴 및 표현식
{
    //객체(object)는 0개 이상의 프로퍼티로 구성된 집합으로, 프로퍼티는 key와 value로 구성된다.
    let obj = {
        name: 'kim',  // 프로퍼티
        age: 23,      // 프로퍼티
        //프로퍼티 값이 함수일 경우에는 method라 부른다.
        func: function () { },
        func1: function () { }
        // method = func, func1
    }

    //객체 리터럴(object literal)

    //객체 리터럴은 중괄호({}) 내에 0개 이상의 프로퍼티를 정의한다.
    let me = {
        name: 'Kim',
        intro: function () {
            console.log(`My name is ${this.name}`);
        }
    };
    console.log(typeof me); //object
    console.log(me);        //{ name: 'Kim', intro: [Function: intro] }

    //객체 리터럴의 중괄호는 코드 블록을 의미하는 것이 아니라 
    //값으로 평가되기 때문에 닫는 괄호 뒤에는 세미콜론(;)을 붙인다.
}
//튜플
{
    const nameAndHeight: [string, number] = ['안희종', 176]
    //타입스크립트 2.6 이하 버전에서는 튜플 타입은 정확한 원소 개수를 보장하지 않는다. 예를 들어 다음과 같은 코드가 허용되었다.
    //const nameAndHeight: [string, number] = ['안희종', 176, true];
}

//프로퍼티 접근: 생성 및 삭제
{
    //✔ 마침표 표기법(dot notation) : 마침표 프로퍼티 접근 연산자(.) 사용
    //✔ 대괄호 표기법(bracket notation) : 대괄호 프로퍼티 접근 연산자([ ]) 사용
    let me = {
        name: 'Kim'
    };

    // dot notation
    console.log(me.name);

    // bracket notation
    console.log(me['name']);

    // not exist = error
    //console.log(me.birth);
    me['subName'] = "min u";

    // Object.assign()을 사용하여 새로운 객체 생성
    me = Object.assign({}, me, { name: undefined });
    // 혹은
    const { name, ...newMe } = me;
    console.log(newMe);
    // 혹은 인터페이스를 통한 
    {
        interface Person {
            name?: string; // name 프로퍼티를 선택적으로 만듦
            age: number;
        }
        let me: Person = {
            age: 30
        };
        const { name, ...newMe } = me;
        me = newMe;
    }
}

// objcet 객체
{
    const obj = { a: 1, b: 2 };
    const { a, b } = obj;
    console.log(a); // 1
    console.log(b); // 2
    const { c, d, e = 3 } = { c: 1, d: 2 };
    console.log(d); // 2
    console.log(e); // 3
}

//객체의 경우, 우항과 다른 변수명을 사용하고 싶은 경우 아래와 같이 콜론(:)을 사용해 변수에 새로운 이름을 줄 수 있다.
{
    {
        const { a: newA } = { a: 1 };
        console.log(newA); // 1

        // 배열의 비구조화 할당
        const arr = [1, 2];
        const a = arr[0];
        const b = arr[1];
    }
    // 에서 ES6부터는 위 코드를 아래와 같이 간결하게 쓸 수 있다.
    {
        const arr = [5, 4];
        const [a, b] = [1, 2];
        console.log(a); // 1
        console.log(b); // 2}
    }
}


// 객체의 비구조화 할당
{
    const obj = { a: 1, b: 2 };
    const { a, b } = obj;
    console.log(a); // 1
    console.log(b); // 2
    //함수 인자에서도 사용 가능하다.
    function useless({ a, b }) {
        console.log(a, b);
    }
    useless({ a: 1, b: 2 }); // 1 2
}
// #endregion

// 구조 분해 할당 

/* ★3 */
// #region 배열 분해하기 : let [item1 = default, item2, ...rest] = array
{
    let nameArr = ["Bora", "Lee"]
    let [firstName, surname] = nameArr; // 배열을 배열로
    console.log(firstName);  // Bora
    console.log(surname);    // Lee
    // 이것과 같다
    // let firstName = arr[0];
    // let surname = arr[1];
}

//쉼표를 사용하여 요소 무시하기
{
    let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
    console.log(title); // Consul
}

//할당 연산자 우측엔 모든 이터러블이 올 수 있습니다.
{
    let [a, b, c] = "abc"; // ["a", "b", "c"]
    let [one, two, three] = new Set([1, 2, 3]);
}

//할당할 수 있는(assignables)’ 것이라면 좌측엔 뭐든지 올 수 있습니다
{
    let user = { name: "", surname: "" };
    [user.name, user.surname] = "Bora Lee".split(' '); // 배열을 배열로
    console.log(user.name); // Bora
}


// 객체의 키와 값 순회하기: .entries()로 반복하기
{
    let user = {
        name: "John",
        age: 30
    };

    for (let [key, value] of Object.entries(user)) {
        console.log(`${key}:${value}`); // name:John, age:30이 차례대로 출력
    }
}


// default 넣기
{
    let [guestName = "Guest", guestSurname = "Anonymous"] = ["Julius"];
    console.log(guestName);    // Julius (배열에서 받아온 값)
    console.log(guestSurname); // Anonymous (기본값)

    let [promptSurname = prompt('성을 입력하세요.'), promptName = prompt('이름을 입력하세요.')] = ["김"];
    console.log(promptSurname); // 김 (배열에서 받아온 값)
    console.log(promptName);    // prompt에서 받아온 값
}
// #endregion

/* ★5 */
// #region 객체 분해하기 : let {prop : varName = default, ...rest} = object
// 할당 연산자 우측엔 분해하고자 하는 객체를, 
// 좌측엔 상응하는 객체 프로퍼티의 '패턴’을 넣습니다. 
{
    let options = {
        optionsTitle: "Menu",
        width: 100,
        height: 200
    };

    let { optionsTitle, width, height } = options;

    console.log(optionsTitle);  // Menu
    console.log(width);  // 100
    console.log(height); // 200
}
// 목표설정
{
    let options = {
        optionsTitle: "Menu",
        width: 100,
        height: 200
    };
    // { 객체 프로퍼티: 목표 변수 }
    let { width: w, height: h, optionsTitle } = options;
    // width -> w
    // height -> h
    // title -> title
    console.log(optionsTitle);  // Menu
    console.log(w);      // 100
    console.log(h);      // 200
}

//프로퍼티가 많은 복잡한 객체에서 원하는 정보만 뽑아오는 것도 가능합니다.
{
    let selectOptions = {
        selectTitle: "Menu",
        width: 100,
        height: 200
    };

    // title만 변수로 뽑아내기
    let { selectTitle } = selectOptions;
    console.log(selectTitle); // Menu
}

// let 없이 사용하기
{
    let title, width, height;
    // 객체 리터럴 규칙에 의해  **객체 리터럴의 중괄호는 코드 블록을 의미하는 것이 아니라 값으로 평가되기 때문에 닫는 괄호 뒤에는 세미콜론(;)을 붙인다.
    // {}를 코드 블록으로 인식하기에 할당문을 괄호 () 로 감싸 코드 블록이 아닌 표현식으로 해석하게 한다
    ({ title, width, height } = { title: "Menu", width: 200, height: 100 });
    console.log(title); // Menu
}
// 중첩 구조분해
{
    let options = {
        size: {
            width: 100,
            height: 200
        },
        items: ["Cake", "Donut"],
        extra: true
    };

    // 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러냄
    let {
        size: { // size는 여기,
            width,
            height
        },
        items: [item1, item2], // items는 여기에 할당함
        title = "Menu" // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
    }: { size: { width: number, height: number }, items: string[], title?: string } = options;

    console.log(title);  // Menu
    console.log(width);  // 100
    console.log(height); // 200
    console.log(item1);  // Cake
    console.log(item2);  // Donut
}
// **심화**
//똑똑한 함수 매개변수: 타입 어노테이션, 객체 디스트럭처링
{
    //타입 어노테이션
    {
        (function () {
            function showMenu(title = "Untitled", width = 200, height = 100, items: string[] = []) {
                // ...
            }
            // 기본값을 사용해도 괜찮은 경우 아래와 같이 undefined를 여러 개 넘겨줘야 합니다.
            showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])
        })();
    }

    // 똑똑한 함수는 전달받은 객체를 분해해 변수에 즉시 할당함
    // 객체 디스트럭처링
    {
        {
            // 함수에 전달할 객체
            let options = {
                title: "My menu",
                items: ["Item1", "Item2"]
            };
            // 분해된 객체를 타입으로 받지 않고 타입검사 후 **값으로 대응하여 받기에** 매개변수에 타입을 주지 못한다.
            // 형변환으로 처리해 매개변수로 받는다
            (function () {
                function showMenu({ title = "Untitled", width = 200, height = 100, items = [] as string[] }) {
                    // title, items – 객체 options에서 가져옴
                    // width, height – 기본값
                    alert(`${title} ${width} ${height}`); // My Menu 200 100
                    alert(items); // Item1, Item2
                }
                showMenu(options);

                showMenu({}); // 빈 객체를 넣는다면 모든 인수에 기본값이 할당됩니다.
                // 하지만 넣을 객체가 없다면 
                // showMenu(); 에러가 나게된다
            })();
        }
        // showMenu(); 의 형태로 사용하기 위해 
        {
            (function () {
                function showMenu({ title = "Untitled", width = 200, height = 100, items = [] as string[] } = {}) { // 빈객체까지 할당하여 넣는다
                }
                showMenu(); // 에러없이 사용가능
            })();
        }
    }

}
// #endregion

// #region 나머지, 전개 연산자
// 나머지 연산자: 여러 원소를 하나의 배열로 묶어주는 역할
{
    const [a, ...restArr] = [1, 2, 3, 4];
    console.log(restArr); // [2, 3, 4]

    function normalFunc(p1, p2, ...rest) {
        console.log(rest);
    }
    normalFunc(1, 2, 3, 4); // [3, 4]
}
// 전개 연산자: 하나의 배열을 여러 원소들로 풀어주는 역할
{
    function logThings(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }
    const arr = [1, 2, 3];
    //logThings(...arr); // 배열의 형식과, 인자의 내열형식이 맞지 않아 에러, 
    //arr은 배열인지만 알고 있으며 length에 대한 내용은 컴파일시에 알 수 있어서 그렇다
    logThings(...[1, 2, 3]);
}
// #endregion

// #region 단축 속성, 메소드
// 단축 속성명
{
    const [a, b] = [1, 2];
    const obj = { a: a, b: b };
    const obj2 = { a, b }; // same as { a: a, b: b }
}

// 단축 메소드명
{
    // old
    const objWithFunction = {
        f: function () { console.log(1); }
    };
    objWithFunction.f(); // 1

    // new (ES6~ )
    const objWithFunction2 = {
        f() { console.log(1); }
    };
    objWithFunction2.f(); // 1
}
// #endregion

// #region 계산된 속성이름
/**
 *  ES6부터 계산된 속성 이름을 사용할 수 있다. 
 * 객체 리터럴에서 키를 중괄호([])로 감쌀 경우 해당 표현식이 계산된 값을 속성 이름으로 사용한다. 
 * 이 때 중괄호 안에는 모든 표현식이 들어갈 수 있다.
 */
{
    const name = 'heejong';
    const obj = { [name]: 'ahn' };
    console.log(obj); // { heejong: 'ahn' }
    const obj3 = { ['ab' + 'c']: 3 };
    console.log(obj3); // { abc: 3 }
}
// #endregion

// #region 화살표 함수
// 자바스크립트 함수 내부에서 this가 야기하는 혼란을 줄여준다.
/** this
 * 기본적으로 자바스크립트 함수 내부에서 참조된 this 키워드의 값은 
 * 함수가 정의되는 시점이 아닌 실행되는 시점에서 호출스택의 주체로 결정된다. 
 * 동일한 내부 구조를 가진 함수가 동일한 블록 내에서 실행 되더라도 
 * 어떤 방식으로 호출되냐에 따라 함수 내에서의 this값은 달라질 수 있다.
 */

/** 문법
 * ES6에 추가된 화살표 함수(arrow function) 문법을 사용하면 
 * 함수 내의 this가 실행 시점이 아닌 정의 시점에 결정되는 함수를 정의할 수 있다. 
 * 화살표 함수 내에서의 모든 this 참조는 해당 함수가 정의되는 시점에서 함수를 둘러싼 문맥의 this 값으로 고정된다. 
 * 화살표 함수는 (인자) => (함수 본문)의 문법으로 정의한다
 */
{
    const obj = {
        a: 1,
        normalFunc: function () { console.log(this); },
        arrowFunc: () => { console.log(this); },
    };
    const { normalFunc, arrowFunc } = obj;
    obj.normalFunc(); // { 
    //   a: 1,
    //   normalFunc: [Function: normalFunc],
    //   arrowFunc: [Function: arrowFunc] 
    // }
    normalFunc(); // undefined
    obj.arrowFunc(); // (global object)
    arrowFunc(); // (global object)
}
//만약 인자가 하나일 경우, 화살표 함수의 인자를 둘러싼 괄호를 생략할 수 있다.
{
    const one = args => { console.log(args); };
    console.log(one);

    //함수 본문이 한 줄의 표현식으로 이루어졌을 시, 본문을 감싸는 중괄호를 생략할 수 있다. 이 때 해당 표현식의 값이 함수의 반환값이 된다.
    const isOdd = n => (n % 2 === 1);
    console.log(isOdd(3)); // true
}
// #endregion

// #region 열거형

// 문자열 열거형(String Enum)과 런타임에서의 열거형
{
    enum Direction {
        East = 'EAST',
        West = 'WEST',
        South = 'SOUTH',
        North = 'NORTH'
    }
    const east: Direction = Direction.East;

    function getAnswer() {
        return 42;
    }
    enum SpecialNumbers {
        Answer = getAnswer(),
        South = 'SOUTH',
        West = Direction.West,
        //Mystery // error TS1061: Enum member must have initializer.
    }
    // 이렇게 정의한 열거형의 구조는 컴파일 과정에서 완전히 사라지고, 멤버의 값은 상수값으로 대체된다
}

// 유니온 열거형
{
    // union enum: 리터럴 타입을 이용해 단 하나의 값만을 갖는 타입을 정의할 수 있다
    type Direction = 'EAST' | 'WEST' | 'SOUTH' | 'NORTH';
    const east: Direction = 'EAST';
}
// #endregion

// #region union
{
    {
        function square(value: number, returnString: boolean = false): string | number {
            const squared = value * value;
            if (returnString) {
                return squared.toString();
            }
            return squared;
        }
        const stringOrNumber: string | number = square(6, true);
    }
    // union enum
    {
        type Direction = 'EAST' | 'WEST' | 'SOUTH' | 'NORTH';
        const east: Direction = 'WEST';
    }
    {
        type Whatever = number | string | boolean;

        type Fruits =
            | string
            | string
            | string;
    }
}
// #endregion

// #region 인터섹션
{
    type Programmer = { favoriteLanguage: string };
    const programmer: Programmer = { favoriteLanguage: 'TypeScript' };
    type BeerLover = { favoriteBeer: string };
    const beerLover: BeerLover = { favoriteBeer: 'Imperial Stout' };

    type BeerLovingProgrammer = { favoriteLanguage: string; favoriteBeer: string; };
    const AhnHeejong: BeerLovingProgrammer = {
        favoriteLanguage: 'TypeScript',
        favoriteBeer: 'Imperial Stout',
    };
    const jong: Programmer & BeerLover = {
        favoriteLanguage: 'TypeScript',
        favoriteBeer: 'Imperial Stout',
    };
}
// #endregion

/* ★5 */
// #region interface : 반환되는 형태를 지정
// const 이름(1) : 인터페이스(2) = 정의(3)

// 1: 인터페이스의 타입으로 메모리를 상속받아 할당합니다.
// 2: 인터페이스가 정의하는 구조가 해당 변수 또는 함수의 타입이 됩니다. 
//    즉, 인터페이스는 해당 구조를 가지는 객체나 함수를 가리키는 타입으로 사용됩니다.
// 3: 변수 또는 함수의 반환값이나 객체의 형태를 정의합니다. 
//    이는 해당 변수나 함수가 반환하는 값의 타입을 지정합니다.

// 인터페이스 객체 타입(속성)
{
    interface User {
        name: string;
        readonly height: number;
        favoriteLanguage?: string;
    }
    const author: User = { name: '안희종', height: 176 }; // ok
    //author.height = 183; // error readonly

    interface GetUserName {
        (user: User): string;
    }
    const getUserName: GetUserName = function (user) {
        return user.name;
    };
    let getUserNameUpper: GetUserName = function (user) {
        return user.name;
    };
    getUserNameUpper = function (user) {
        return user.name.toUpperCase(); // 사용자 이름을 대문자로 변환하여 반환
    };

    function SetTextUser(user: User) {
        getUserName(author);
    }

    //이 때 실제 함수 정의와 인터페이스에서의 매개변수 이름은 꼭 같을 필요는 없다. 
    //즉 위 코드에서 아래처럼 매개변수명을 user가 아닌 u로 바꾸어 써도 매개변수의 타입 순서만 맞는다면 에러는 발생하지 않는다.
}

// 인터페이스 함수 타입(호출시그니쳐)
{
    type Info = { name: string, age };
    type Job = { Jobname: string, address: string }
    type Person = Info & Job;
    // 타입스크립트의 인터페이스는 함수명이 아닌 함수의 모양(인자, 리턴) 타입을 쓴다 
    /* c계열
    interface GetInfo{
        public string GetName();
    }
     */
    interface User {
        name: string;
        readonly height: number;
        favoriteLanguage?: string;
    }
    interface GetInfo {
        // 호출스택: str인자 , 반환형 string
        (str: Person): string;
    }
    let GetName: GetInfo = function (user) {
        return user.name;
    };
    // 인터페이스 오버로딩
    interface GetUser {
        (): Array<User>;
        (name: number): User;
        (age: string): User;
    }
    interface GetUserName {
        (user: User): string;
    }
    const getUserName: GetUserName = function (user) {
        return user.name;
    };
}
// 다시보기
// 인터페이스 하이브리드 타입 = 호출 시그니쳐와 속성 타입을 동시에
{

    interface Counter {
        (start: number): string; // 함수
        interval: number;        // 객체
        reset(): void;           // 객체
    }
    // getCounter함수의 반환형 = Counter
    function getCounter(): Counter {
        // 함수 정의
        // counter : Counter의 메모리 영역을 잡고 함수 호출스택정의
        let counter = <Counter>function (start: number) { };
        // 잡혀있는 메모리에 속성 정의
        counter.interval = 123;
        counter.reset = function () { };

        // getCounter의 반환형에 맞는 counter객체 return
        return counter;
    }

    let c = getCounter(); // getCounter생성시 인터페이스를 토대로 할당된 메모리에 새롭게 정의된 새로운 counter 객체를 c에 담는다
    // getCounter 영역의 메모리에 호출시그니쳐와 속성들이 정의되어있다
    c(10);                // 호출시그니쳐
    c.reset();            // reset 속성
    c.interval = 5.0;     // interval 속성
}
// 제너릭 인터페이스
{
    interface MyResponse<Data> {
        data: Data;
        status: number;
        ok: boolean;
        /* ... */
    }
    interface User {
        name: string;
        readonly height: number;
        /* ... */
    }

    // const user: MyResponse<User> = await getUserApiCall(userId);
    // user.name; // 타입 시스템은 user.name이 string임을 알 수 있다.
    // interface GetData {
    //     <Data>(response: MyResponse<Data>): Data;
    // }
}


// #endregion

// #region class
//class로 만든 함수엔 특수 내부 프로퍼티인 [[IsClassConstructor]]: true가 이름표처럼 붙습니다
//클래스 생성자를 new와 함께 호출하지 않으면 에러가 발생하는데 이 때 [[IsClassConstructor]]: true가 사용됩니다.
//for..in으로 객체를 순회할 때 클래스에 정의된 메서드는 열거할 수 없습니다(non-enumerable). 클래스의 prototype 프로퍼티에 추가된 메서드의 enumerable 플래그는 false입니다.

// class 구조
{
    {
        class User {
            name;
            constructor(name) { this.name = name; }
            sayHi() { alert(this.name); }
        }

        // 클래스는 함수입니다.
        alert(typeof User); // function

        // 정확히는 생성자 메서드와 동일합니다.
        alert(User === User.prototype.constructor); // true

        // 클래스 내부에서 정의한 메서드는 User.prototype에 저장됩니다.
        alert(User.prototype.sayHi); // alert(this.name);

        // 현재 프로토타입에는 메서드가 두 개입니다.
        alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
    }

    // class User와 동일한 기능을 하는 순수 함수를 만들어보겠습니다.
    {
        // 1. 생성자 함수를 만듭니다.
        function User(name) {
            this.name = name;
        }
        // 모든 함수의 프로토타입은 'constructor' 프로퍼티를 기본으로 갖고 있기 때문에
        // constructor 프로퍼티를 명시적으로 만들 필요가 없습니다.

        // 2. prototype에 메서드를 추가합니다.
        User.prototype.sayHi = function () {
            alert(this.name);
        };

        // 사용법:
        let user = new User("John");
        user.sayHi();
    }
    {
        class Dog {
            age: number = 10;
            constructor(barkingSound) {
                console.log(`${barkingSound}!`);
            }
        }
        const barkingDog: Dog = new Dog('월'); // 월!

    }
}
// 기명 클래스 표현식(Named Class Expression)
{
    // 기명 함수 표현식(Named Function Expression)과 유사하게 클래스 표현식에도 이름을 붙일 수 있습니다.
    // (명세서엔 없는 용어이지만, 기명 함수 표현식과 유사하게 동작합니다.)
    let User = class MyClass {
        sayHi() {
            alert(MyClass); // MyClass라는 이름은 오직 클래스 안에서만 사용할 수 있습니다.
        }
    };
}
// getter와 setter: 계산된 프로퍼티(computed property)
{
    class User {
        _name;
        constructor(name) {
            // setter를 활성화합니다.
            this.name = name;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            if (value.length < 4) {
                alert("이름이 너무 짧습니다.");
                return;
            }
            this._name = value;
        }

    }

    let user = new User("보라");
    alert(user.name); // 보라

    user = new User(""); // 이름이 너무 짧습니다.
}
// 확장
{
    class Base {
        baseProp: number;
        constructor() {
            this.baseProp = 123;
        }
    }
    class Extended extends Base {
        extendedProp: number;
        constructor() {
            super(); // 반드시 이 호출을 직접 해 주어야 한.
            this.extendedProp = 456;
        }
    }
    const extended: Extended = new Extended();
    console.log(extended.baseProp); // 123
    console.log(extended.extendedProp); // 456
}

// 계산된 속성
// 인덱스 시그니처 : 
// Key의 타입은 string, number, symbol, Template literal 타입만 가능합니다.
// ▶ 동일한 Key를 여러개 가질 수 없습니다.
{
    class User {
        [x: string]: any | undefined;
        constructor() {
            this['sayHi'] = function () {
                alert("Hello");
            };
        }
    }
    const user = new User();
    user.name = "John"; // 동적으로 속성 추가
    user.age = 30;
    console.log(user.name); // "John"
    console.log(user.age); // 30

}
// 계산된 메서드 이름(computed method name) : 대괄호 이용해 이름만들기
{
    // 클래스 내부 속성을 이용해 속성사용
    {
        class User {
            constructor() { // 클래스 필드에 저장
                this['sayHi'] = function () {
                    alert("Hello");
                };
            }
            // prototype 필드에 저장
            ['say' + 'Hii']() {
                alert("Helloo");
            }
        }
        new User()[`sayHi`]();
        new User()[`sayHii`]();
    }
    {
        class User {
            [x: string]: any; // 클래스 외부에서 필드를 정의하고 호출할 수 있게
            constructor() {
                this['sayHi'] = function () {
                    alert("Hello");
                };
            }
            ['say' + 'Hii']() {
                alert("Helloo");
            }
        }
        new User().sayHi();
        new User().sayHii();
    }
}
// 응용
{
    class Employee {
        salaries: { [key: string]: number };

        constructor(salaries: { [key: string]: number }) {
            this.salaries = salaries;
        }
    }

    function totalSalary(salary: { [key: string]: number }) {
        let total = 0;
        for (const key in salary) {
            total += salary[key];
        }
        return total;
    }

    // 클래스 인스턴스 생성
    const employee1 = new Employee({ "John": 50000, "Jane": 60000, "Alice": 70000 });

    // 함수 호출
    const total = totalSalary(employee1.salaries);
    console.log("Total salary:", total);
}

// 접근제어
{
    {
        class User {
            constructor(public id: string, private password: string) { }
        }

        // 객체 생성
        const user1 = new User("user123", "password123");

        // 객체 속성 접근
        console.log("User ID:", user1.id); // public 속성이므로 접근 가능
        //console.log("Password:", user1.password); // private 속성이므로 접근 불가능
    }
    // 이것과 같다
    {
        class User {
            public id: string;
            private password: string;

            constructor(id: string, password: string) {
                this.id = id;
                this.password = password;
            }
        }
    }
}

// 추상클래스
{
    abstract class Animal {
        move(): void {
            console.log("roaming the earth...");
        }
        abstract makeSound(): void;
    }
    class Dog extends Animal {
        makeSound(): void {
            console.log("Bark bark!");
        }
    }
}
// #endregion

// #region 클래스의 인터페이스 구현
{
    {
        interface Animal {
            legs: number;
        }

        class Dog implements Animal {
            legs: number = 4;
        }
    }
    {
        class Point {
            x: number;
            y: number;
        }

        interface Point3d extends Point {
            z: number;
        }

        const point3d: Point3d = { x: 1, y: 2, z: 3 };
    }
}
// #endregion

// #region 호환성

// 기본타입의 호환성
{
    type OneDigitOdd = 1 | 3 | 5 | 7 | 9;
    const three: OneDigitOdd = 3;
    const num: number = three;
    const oneDigitOdd: OneDigitOdd = three;

    const four: number = 4;
    // const oneDigitOdd: OneDigitOdd = four;
    // error TS2322: Type 'number' is not assignable to type 'OneDigitOdd'.
}

// 객체타입의 호환성
{
    {
        interface User {
            name: string;
            height: number;
        }
        interface Pet {
            name: string;
            species?: string;
        }
        // const user: User = { name: '안희종', age: 176 }; 호환되지 않음
        const puppy: Pet = { name: '해피' };
    }

    // 구조적 타입 시스템
    // 타입스크립트에서는 두 타입의 구조(structure)만을 비교하여 호환성을 결정한다
    {
        // 객체 리터럴과 과잉속성검사(객체 리터럴에 대해서만 알려지지 않은 속성은 없는지 추가적으로 시행하는 검사)
        {
            interface Color {
                R: number;
                G: number;
                B: number;
            }

            const white: Color = {
                R: 255,
                G: 255,
                B: 255,
                //A: 1 // 에러
            };
            // 할당하는 값이 변수나 표현식이 아닌 객체 리터럴이기 때문에
            // 그 리터럴이 알려지지 않은 속성(unknown property)을 포함한다면 타입 에러가 발생한다
        }
        // 이를 해결하기 위해
        {
            interface Color {
                R: number;
                G: number;
                B: number;
            }

            const someColor = {
                R: 255,
                G: 255,
                B: 255,
                A: 1
            };
            const white: Color = someColor as Color;
            // or
            const { R, G, B, A } = someColor; // 객체 디스트럭처링
            const otherWhite: Color = { R, G, B };
        }
    }
}

// 함수타입의 호환성
{
    //두 함수의 매개변수의 갯수가 같은 경우
    {
        type Sum = (sumFirst: number, sumSecond: number) => number;
        type Multiply = (mulFirst: number, mulSecond: number) => number;
        const sum: Sum = (sumFirst: number, sumSecond: number) => {
            return sumFirst + sumSecond;
        };
        const multiply: Multiply = sum;
    }
    // 예외
    {
        interface Animal { animalProp: string };
        interface Dog extends Animal { dogProp: number };

        let f = (animal: Animal) => animal.animalProp;
        let g = (dog: Dog) => { dog.dogProp };
        // f = g; // 에러 interface는 본인이 소유하지 못한 속성에 대해 할당하려 할 경우 에러를 냄 
    }

    // 매개변수 수가 다른 경우
    {
        interface Response<T> {
            data: T;
            status: number;
        }
        interface Data {
            id: string;
        }
        type Login = (id: string) => Response<Data>;
        type LoginWithToken = (id: string, token: string) => Response<Data>;

        {
            const loginWithToken: LoginWithToken = (id: string, token: string) => ({
                data: { id }, status: 200
            });
            //const login: Login = loginWithToken; 매개변수가 다르기에 에러남 
        }
        // 할당받는 함수의 매개변수 수가 더 많은 경우 초과 매개변수는 무시되어 부족분만 할당받는다
        {
            const login: Login = (id: string) => ({
                data: { id }, status: 200
            });
            const loginWithToken: LoginWithToken = login;
        }
    }
}

// 클래스의 호환성
{
    class Animal {
        feet: number;
        constructor(name: string, numFeet: number) { }
    }

    class Size {
        feet: number;
        constructor(numFeet: number) { }
    }

    let a: Animal;
    let s: Size = new Size(4);
    a = s; // ok
    s = a; // ok
}
// 열거형의 호환성
{
    {
        enum Status { Ready, Waiting }
        enum Color { Red, Blue, Green }
        let status: Status = Status.Ready;
        //status = Color.Green; // error
    }
    {
        enum MyEnum {
            Zero,
            One = 1,
            Name = '안희종'
        }
        const zero: number = MyEnum.Zero;
        const one: number = MyEnum.One;
        const name: string = MyEnum.Name;
    }
}

// #endregion

// #region typeof
{
    function padLeft(value: string, padding: string | number) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }

        if (typeof padding === "string") {
            return padding + value;
        }

        throw new Error(`Expected string or number, got '${padding}'.`);
    }
}
// #endregion

// #region instanceof

// nstanceof 연산자는 값과 생성자를 받아 해당 값의 프로토타입 체인에 해당 생성자가 등장하는지를 확인한다. 
// ES6 클래스 역시 내부적으로는 프로토타입 체인에 기반해 돌아가므로, 
//클래스의 인스턴스 여부도 instanceof를 이용해 확인할 수 있다
{
    interface Padder {
        getPaddingString(): string;
    }

    class SpaceRepeatingPadder implements Padder {
        constructor(private numSpaces: number) { }
        getPaddingString() {
            return Array(this.numSpaces + 1).join(" ");
        }
    }

    class StringPadder implements Padder {
        constructor(private value: string) { }
        getPaddingString() {
            return this.value;
        }
    }

    function getRandomPadder() {
        return Math.random() < 0.5 ?
            new SpaceRepeatingPadder(4) :
            new StringPadder("  ");
    }

    // 이 시점에선 'SpaceRepeatingPadder | StringPadder'
    let padder: Padder = getRandomPadder();

    if (padder instanceof SpaceRepeatingPadder) {
        padder; // SpaceRepeatingPadder 로 좁혀짐
    }

    if (padder instanceof StringPadder) {
        padder; // StringPadder 로 좁혀짐
    }
}
// #endregion

// #region in 연산자
// in 연산자는 객체에 특정 속성이 존재하는지 여부를 확인할 때 사용된다.
{
    const obj = { a: 123 };
    console.log('a' in obj); // true
    console.log('b' in obj); // false
}
// in 연산자의 결과 역시 역시 타입 가드로 쓸 수 있다.
{
    interface Dog {
        legs: 4;
        bark(): void;
    }

    interface Insect {
        legs: number;
        creepy: boolean;
    }

    interface Fish {
        swim(): void;
    }

    type Animal = Dog | Insect | Fish;

    function doSomethingWithAnimal(animal: Animal) {
        if ('legs' in animal) {
            // animal은 Dog | Insect 타입
            console.log(animal.legs);
        } else {
            // animal은 Fish 타입
            animal.swim();
        }
    }
}
// #endregion

// #region is 연산자
// value is Type의 형태로 사용자 정의 타입 가드를 사용할 수 있다
{
    interface Dog {
        legs: 4;
        bark(): void;
    }

    interface Insect {
        legs: number;
        creepy: boolean;
    }

    interface Fish {
        swim(): void;
    }

    type Animal = Dog | Insect | Fish;

    function isFish(animal: Animal): animal is Fish {
        if ('legs' in animal) {
            return false;
        }
        return true;
    }

    (function doSomethingWithAnimal(animal: Animal) {
        if (isFish(animal)) {
            // animal은 Fish 타입
            animal.swim();
        } else {
            // animal은 Dog | Insect 타입
            console.log(animal.legs);
        }
    });
}
// #endregion

// #region 타입추론
{
    // 최적의 공통 타입
    {
        interface Animal {
            legs: number;
        }

        interface Dog extends Animal {
            bark(): void;
        }

        interface Cat extends Animal {
            meow(): void;
        }

        let dog: Dog = {
            legs: 4,
            bark: function () {
                console.log("Woof!");
            }
        };
        let cat: Cat = {
            legs: 4,
            meow: function () {
                console.log("meow!");
            }
        };
        const dogAndCat = [dog, cat];
        //이러한 배열의 타입은 어떻게 추론해야 할까?
        //최적 공통 타입(best common type)이란 접근법을 사용한다


        interface Camel extends Animal {
            humps: number;
        }

        function getSoundFunction(dogOrCat: Dog | Cat) {
            if ('meow' in dogOrCat) {
                return dogOrCat.meow;
            } else {
                return dogOrCat.bark;
            }
        }
        dogAndCat.forEach(animal => {
            getSoundFunction(animal)();
        });
    }
    // 문맥 상의 타입
    {
        // 할당이 일어날 때, 타입 추론은 할당 받는 값(왼쪽 항)의 타입 뿐만 아니라 
        // 할당하는 값(오른쪽 항)의 타입에 대해서도 일어난다. 
        // 이렇게 추론된 타입을 문맥 상의 타입(contextual type)이라 부른다.
        window.onmousedown = function (mouseEvent) {
            console.log(mouseEvent.a);
        };
    }
    // 타입 단언 : as 형변환
    {
        interface Dog {
            legs: 4;
            bark(): void;
        }

        interface Insect {
            legs: number;
            creepy: boolean;
        }

        interface Fish {
            swim(): void;
        }

        type Animal = Dog | Insect | Fish;

        (function doSomethingWithAnimal(animal: Animal) {
            (animal as Fish).swim();
        })
    }
}
// #endregion

// #region @데코레이터: 클래스를 수정하지 않고 클래스의 멤버들의 정의를 수정 및 기능을 확장할 수 있는 구조적 패턴

// 데코레이터는 일종의 함수로 코드 조각을 장식해 주는 역할을 하며, 
// 타입스크립트에서는 그 기능을 함수로 구현한 것입니다. 

// 메서드, 클래스, 프로퍼티, 등 위에 @로 시작하는 데코레이터를 선언하여 장식하면 코드가 실행됐을 때, 
// 데코레이터 함수가 실행되어, 장식한 멤버를 보다 많은 기능을 수행하게 만들어 주는 것입니다. 

// 데코레이터 팩토리 함수(decorator factory function)는 
// 데코레이터 함수를 감싸는 래퍼(wrapper) 함수입니다.
// 보통 데코레이터가 선언에 적용되는 방식을 원하는 대로 바꾸고 싶을 때 사용됩니다.

// 선언 파일(*. d.ts)과 선언 클래스에는 사용할 수 없습니다.

// 데코레이터 팩토리
{
    // Size 데코레이터 팩토리
    function Size() {
        console.log('Size(): 평가됨');
        // Size 데코레이터
        return function (target: any, prop: string, desc: PropertyDescriptor) {
            console.log('Size(): 실행됨');
        };
    }
    // Color 데코레이터 팩토리
    function Color() {
        console.log('Color(): 평가됨');
        // Color 데코레이터
        return function (target: any, prop: string, desc: PropertyDescriptor) {
            console.log('Color(): 실행됨');
        };
    }
    // Button 클래스 정의
    class Button {
        // 메서드에 멀티 데코레이터 적용
        @Size()
        @Color()
        pressed() { }
    }
    // Size(): 평가됨
    // Color(): 평가됨
    // Color(): 실행됨
    // Size(): 실행됨

    //@expression에서 expression 표현식을 함수로 평가하는 순서는 위에서 아래입니다.
    //하지만, expression이 함수로 평가된(데코레이터 팩토리) 후에, 실행 결과(데코레이터 함수)가 실행되는 순서는 아래에서 위가 됩니다.
}

// 클래스 데코레이터
{
    function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
        // Test 클래스의 constructor를 상속해서 new Test() 가 되면 추가된 생성자도 실행되도록 설정
        return class extends constructor {
            first_prop = 'override'; // 데코레이터에서 새로 프로퍼티를 덮어씌움
            new_prop = 'new property'; // 데코레이터에서 새로 프로퍼티를 추가
        };
    }

    @classDecorator
    class Test {
        first_prop: string;

        constructor(m: string) {
            this.first_prop = m;
        }
    }

    let t = new Test('abcdefg');
    console.log(t);
    console.log(t.first_prop); // 'override'

    // 데코레이터로 설정된 프로토타입 확장은 타입 단언(Type Assertion) 필요
    console.log((t as any).new_prop); // 'new property'
}
{
    // 데코레이터 팩토리
    function classDecorator(param1: string, param2: string) {
        // 데코레이터 함수
        return function <T extends { new(...args: any[]): {} }>(constructor: T) {
            return class extends constructor {
                new_prop = param1;
                first_prop = param2;
            };
        };
    }

    @classDecorator('안녕하세요', '반갑습니다')
    class Test {
        first_prop: string;

        constructor(m: string) {
            this.first_prop = m;
        }
    }

    let t = new Test('world');
    console.log(t);
    // 출력결과
    // Test { 
    //     first_prop: '반갑습니다', 
    //     new_prop: '안녕하세요' 
    // }
}
// 프로토타입(prototype)을 이용한 확장
{
    function classDecoratorFactory<T extends { new(...args: any[]): {} }>(constructorFn: T) {

        // 프로토타입으로 새로운 프로퍼티를 추가
        constructorFn.prototype.print2 = function () {
            console.log('this is print2');
        };
        constructorFn.prototype.gender = 'male';

        // 클래스를 프로퍼티에 상속시켜 새로운 멤버를 추가 설정
        return class extends constructorFn {
            public name = 'zenghyun';
            private _age = 27;

            constructor(...args: any[]) {
                super(args);
            }

            public print() {
                console.log('this is print');
            }
        };
    }

    @classDecoratorFactory
    class Test2 { }

    const test2 = new Test2();

    console.log(test2); // class_1 { name: 'zenghyun', _age: 27 }

    // 클래스 Test의 타입에는 print 함수가 없고, 데코레이터로 동적으로 추가된 형태이니, 타입 단언을 사용
    (test2 as any).print(); // this is print 
    (test2 as any).print2(); // this is print2 

    console.log((test2 as any).gender); // male

    //출력결과
    // Test2 { name: 'zenghyun', _age: 27 }
    // this is print
    // this is print2
    // male

}

// 메소드 데코레이터 :  메서드 선언 직전에 선언되는 데코레이터로 메서드 관찰, 수정 또는 대체하는 데 사용할 수 있습니다. 
// 설명
{
    //메서드의 속성 설명자(property descriptor)에 적용되고 메서드의 정의를 읽거나 수정할 수 있습니다. 
    //선언 파일(*. d.ts), 오버로드 메서드(overload method), 선언 클래스에 사용할 수 없습니다. 

    //Property Descriptor는 객체의 프로퍼티들을 기존보다 정교하게 정의할 수 있는 ES5의 스펙이며, 프로퍼티의 특성을 설명하는 역할을 하는 객체입니다.
    //이 Property Descriptor는 Object.getOwnPropertyDescriptor를 사용해서 가져올 수 있습니다.


    //메서드 데코레이터 함수가 전달받는 인자는 총 3가지로 다음과 같다. 

    // 첫 번째 argument: static 프로퍼티가 속한 클래스의 생성자 함수 또는 인스턴스 프로퍼티에 대한 클래스의 prototype 객체
    // 두 번째 argument: 해당 method의 이름
    // 세 번째 argument: 해당 method의 property descriptor
    function methodDecorator(
        target: any, // static 메서드라면 클래스의 생성자 함수, 인스턴스의 메서드라면 클래스의 prototype 객체
        propertyKey: string, // 메서드 이름
        descriptor: PropertyDescriptor // 메서드의 Property Descriptor
    ) {
        /** 내용 */
    } // return 값 무시됨


}
// 예제
{
    function myMethodDecorator() {
        return function (target: any, property: string, descriptor: PropertyDescriptor) {

            // descriptor.value는 test() 함수 자체를 가리킨다. 이 함수를 잠시 변수에 피신 시킨다.
            let originMethod = descriptor.value;

            // 그리고 기존의 test() 함수의 내용을 다음과 같이 바꾼다.
            descriptor.value = function (...args: any) {
                console.log('before');
                originMethod.apply(this, args); // 위에서 변수에 피신한 함수를 call, apply, bind 를 통해 호출
                console.log('after');
            };
        };
    }

    class Test {
        property = 'property';
        hello: string;

        constructor(m: string) {
            this.hello = m;
        }

        @myMethodDecorator()
        test() {
            console.log('test');
        }
    }

    let test = new Test("world")
    test.test()

    // 출력결과
    // before
    // test
    // after
}
// 예제: 데코레이터로 특정 메서드의 실행 전/후 로깅, 실행시간을 측정
{
    function methodTimeDecorator() {
        return function (target: any, property: string, descriptor: PropertyDescriptor) {

            // descriptor.value는 test() 함수 자체를 가리킨다. 이 함수를 잠시 변수에 피신 시킨다.
            let originMethod = descriptor.value;

            // 그리고 기존의 test() 함수의 내용을 다음과 같이 바꾼다.
            descriptor.value = function (...args: any) {
                let startTS = new Date().getTime();

                originMethod.apply(this, args); // 위에서 변수에 피신한 함수를 call,apply,bind 를 통해 호출

                let endTS = new Date().getTime();

                console.log(`실행시간: ${(endTS - startTS) / 1000} S`);
            };
        };
    }
    class Test {
        property = 'property';
        hello: string;

        constructor(m: string) {
            this.hello = m;
        }

        @methodTimeDecorator()
        test() {
            console.log('test');
        }
    }

    let test = new Test("world")
    test.test()
    // test
    // 실행시간: 0 S
}

// 접근자 데코레이터(accessor decorator)
{
    // 접근자 데코레이터 매개변수 

    // 첫 번째 argument: static 프로퍼티가 속한 클래스의 생성자 함수 또는 인스턴스 프로퍼티에 대한 클래스의 prototype 객체 
    // 두 번째 argument: 해당 method의 이름
    // 세 번째 argument: 해당 method의 property descriptor 
    function Enumerable(enumerable: boolean) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            descriptor.enumerable = enumerable;
        };
    }

    class Person {
        constructor(private name: string) { }

        @Enumberable(true)
        get getName() {
            return this.name;
        }

        @Enumberable(false)
        set setName() {
            this.name = name;
        }
    }

    const person = new Person('hello');
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
    // name: hello
    // getName: hello
    // => setName은 열거하지 못하게 되었기 때문에 출력되지 않음
}

// 속성 데코레이터(property decorator)
// 설명
{
    //  속성 데코레이터 매개변수

    //  첫 번째 argument: static 프로퍼티라면 클래스의 생성자 함수, 인스턴스 프로퍼티라면 클래스의 prototype 객체
    //  두 번째 argument: 해당 property의 이름

    // 접근자 데코레이터 리턴 값

    // Property Descriptor 형태
    // void
    function propertyDecorator(
        target: any, // static 프로퍼티라면 클래스의 생성자 함수, 인스턴스 프로퍼티라면 클래스의 prototype 객체
        propertyName: string, // 프로퍼티 이름
    ): any {
        /** 내용 */
    } // return하는 값이 Property Descriptor 형태 또는 void. 이로서 해당 property의 writable 등을 조작할 수 있음
}
// 예제 : 특정 프로퍼티가 열거가 가능할지 결정하는 데코레이터
{
    // 리턴 값으로 Object.defineProperty()를 반환함으로써, 이를 통해 속성의 부가적인 설정을 할 수 있습니다.
    // 예를 들어 다음과 같이, 앞의 데코레이터는 boolean 타입의 인자를 전달받아 writable로 설정하게 되는데
    // writable이 false일 경우 해당 속성은 값을 수정할 수 없게 됩니다
    function writable(isWritable: boolean) {
        return function (target: any, propertyName: any): any {
            return {
                writable,
            };
        };
    }

    class Test {
        property = 'property';

        @writable(false)
        public data1 = 0;

        @writable(true)
        public data2 = 0;
    }

    const t = new Test();
    t.data1 = 1000;
    t.data2 = 1000; // 런타임 에러 !! - data2는 writable이 false라서 값을 대입할 수가 없다.
}
// 예제2 : 속성 데코레이터 getter, setter
{
    function SetDefaultValue(numberA: number, numberB: number) {
        return (target: any, propertyKey: string) => {
            const addNumber = numberA * numberB;
            let value = 0;

            // 데코레이터가 장식된 DataDefaultType의 num 이라는 프로퍼티의 객체 getter / setter 설정을 추가한다.
            Object.defineProperty(target, propertyKey, {
                get() {
                    return value + addNumber; // 조회 할때는 더하기 시킴
                },
                set(newValue: any) {
                    value = newValue - 30; // 설정 할때는 30을 뺌
                },
            });
        };
    }

    class DataDefaultType {
        @SetDefaultValue(10, 20)
        num: number = 0;
    }

    const test = new DataDefaultType();

    test.num = 30;
    console.log(`num is 30, 결과 : ${test.num}`); // num is 30, 결과 : 200

    test.num = 130;
    console.log(`num is 130, 결과 : ${test.num}`); // num is 130, 결과 : 300

    // num is 30, 결과 : 200
    // num is 130, 결과 : 300
}

// 매개변수 데코레이터(parameter decorator) : 가로로 써도 인식되기 때문에 함수의 매개변수 왼쪽 옆에 명시해 주면 됩니다.
// 설명
{
    // 파라미터 데코레이터 매개변수

    // 첫 번째 argument: static 프로퍼티가 속한 클래스의 생성자 함수 또는 인스턴스 프로퍼티가 속한 클래스의 prototype 객체
    // 두 번째 argument: 매개변수가 들어있는 method의 이름
    // 세 번째 argument: 메서드 파라미터 목록에서의 index
    function parameterDecorator(
        target: any, // static 메서드의 파라미터 데코레이터라면 클래스의 생성자 함수, 인스턴스의 메서드라면 prototype 객체
        methodName: string, // 매개변수가 들어있는 메서드의 이름
        paramIndex: number // 매개변수의 순서 인덱스
    ) {
        /** 내용 */
    } // 리턴값은 무시됨
}
// 예제 : 제대로 된 값이 전달되었는지 확인
{
    import { BadRequestException } from '@nestjs/common';

    // 매개 변수 데코레이터 함수
    // target 클래스의 validators 속성에 유효성을 검사하는 함수 할당
    function MinLength(min: number) {
        return function (target: any, propertyKey: string, parameterIndex: number) {
            target.validators = {
                minLength: function (args: string[]) {
                    return args[parameterIndex].length >= min;
                }
            }
        }
    }

    // 메서드 데코레이터 함수
    function Validate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;

        // 설명자의 value에 유효성 검사 로직이 추가된 함수를 할당
        descriptor.value = function (...args) {
            // target에 저장해둔 validators를 모두 수행한다. 이때 원래 메서드에 전달된 인수들을 각 validator에 전달한다.
            Object.keys(target.validators).forEach(key => {
                if (!target.validators[key](args)) {
                    throw new BadRequestException();
                }
            })
            // 기존 함수를 실행
            method.apply(this, args);
        }
    }

    class User {
        private name: string;

        @Validate
        setName(@MinLength(3) name: string) {
            this.name = name;
        }
    }

    const t = new User();
    t.setName('hello');
    console.log('---------------');
    t.setName('hi');    // BadRequestException

}

//#endregion