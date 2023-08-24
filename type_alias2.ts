type Test1Type = (a: string) => number;

// function test1() {}
let test1: Test1Type = function (a) {
  return 3;
};

let test2_ = {
  name: "kim",
  age: "29",
  plusOne(a: number): number {
    return a + 1;
  },
  changName: () => {},
};

test2_.plusOne(1);

// callback explanation

function fnc1(a) {
  //   a();
}
function fnc2() {}

fnc1(fnc2());

// homework1
// ? solution
type test2_solution = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

// homework2
//TODO : 숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.
// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.

function cutZero(a: string): string {
  return a.replace("0", "");
}

function removeDash(a: string): number {
  return parseFloat(a.replace("-", ""));
  //   let result = a.replace("-", "");
  //   return parseFloat(result);
}

// ? solution
type CutType = (x: string) => string;

let cutZero_solution: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};
function removeDash_solution(x: string): number {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}
// homework3
//TODO : (숙제3) 함수에 함수를 집어넣고 싶습니다.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
// 이 함수는 어떻게 만들면 될까요?
// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

function total(a: string, cutZero_solution, removeDash_solution) {
  return removeDash_solution(cutZero_solution(a));
}

total("010-1111-2222", cutZero, removeDash);

// ? solution

function total_solution(a, func1, func2) {
  let result = func1(a);
  let result2 = func2(result);
  return result2;
  //   console.log(result2);
}
total_solution("010-1111-2222", cutZero_solution, removeDash_solution); //1011112222 출력잘됨

console.log(
  total_solution("010-1111-2222", cutZero_solution, removeDash_solution)
);

console.log(total("010-1111-2222", cutZero, removeDash));

// console.log(cutZero("010-1111-2222"));
console.log(removeDash("010-1111-2222"));
console.log(removeDash_solution("010-1111-2222"));
