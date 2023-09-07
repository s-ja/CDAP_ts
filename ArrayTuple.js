let bowWow = ["dog", true, "asdf", false];
// tuple type
let bowWow2 = ["dog", true];
// let bowWow2: [string, boolean?, number] = ["dog", 123]; // !Error
function fnc3(...a) {
    console.log(a); // => array
}
fnc3(1, 2, 3, 4, 5, 6);
function fnc4(...a) {
    console.log(a); // => array
}
fnc4(1, "asd");
function fnc5(a, b) {
    console.log([a, b]);
}
let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
let arr6 = [...arr4, ...arr5];
// TODO : (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
// 오늘 배운 tuple 타입으로 타입지정합시다.
// 쉬워서 답은 생략합니다.
//(예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정하라는 소리입니다.
let 숙제1 = ["동서녹차", 4000, true];
// TODO : (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
// let arr = ["동서녹차", 4000, true, false, true, true, false, true];
// 몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다.
// tuple 타입과 spread 연산자를 써보도록 합시다.
let 숙제2 = [
    "동서녹차",
    4000,
    true,
    false,
    true,
    true,
    false,
    true,
];
// TODO : (숙제3) 함수에 타입지정을 해보도록 합시다.
// function 함수() {}
// 1. 이 함수의 첫째 파라미터는 문자,
// 2. 둘째 파라미터는 boolean,
// 3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다.
// 그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요?
// 오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.
// function 숙제3(a: string, b: boolean, c: number | boolean) {}
function 숙제3(...a) { }
// TODO : (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
// 파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
// 문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다.
// 함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다.
// (동작예시)
// 함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.
function 숙제4(...a) {
    let strArray = [];
    let numArray = [];
    a.map((value) => {
        if (typeof value === "string") {
            strArray.push(value);
        }
        else if (typeof value === "number") {
            numArray.push(value);
        }
        else {
            throw new Error("wrong parameter");
        }
    });
    return [strArray, numArray];
}
console.log(숙제4("b", 5, 6, 8, "a"));
// ? solution
function 숙제4_solution(...rest) {
    let result = [[], []];
    rest.forEach((a) => {
        if (typeof a === "string") {
            result[0].push(a);
        }
        else {
            result[1].push(a);
        }
    });
    return result;
}
console.log(숙제4_solution("b", 5, 6, 8, "a"));
export {};
// 1. 함수 만들었습니다. 파라미터는 몇개가 들어올지 몰라서 rest parameter 썼고 파라미터 타입은 (string|number)[] 이게 좋겠군요.
// 2. 결과를 저장할 result라는 변수를 만들었습니다. 기본값은 [[], []] 이렇게 만들었고 그거 타입지정은 tuple type을 활용해봤습니다.
// 3. rest 파라미터에 반복문 돌렸습니다. 타입이 string이면 result[0]에 추가해주고 number면 result[1]에 추가해줍니다.
// 4. return 해줌 근데 타입은 알아서 지정 잘 되어있어있군요
