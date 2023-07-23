// TODO: type Narrowing

// function errorFunction(x: number | string) {
//   return x + 1;
// }

// errorFunction(123);
// !Error : x = union type("타입이 애매하다.") => need *type narrowing*

function narrowingFunction(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

narrowingFunction(123);
// console.log(narrowingFunction("asdf"));

function narrowingArray(x: number | string) {
  let array: number[] = [];

  if (typeof x === "number") {
    array[0] = x; // ! (x === union type) => NaN ==> need *type narrowing*
  } else {
    // if문 사용시 끝까지(else, else if) 작성 해주는 것이 좋음.
  }
}

// ? Narrowing 으로 판정해 주는 문법들. [typeof 변수, 속성명 in 오브젝트 자료, 인스턴스 instanceof 부모, ...]
// ? 현재 변수의 타입 ('그' 변수의 타입)이 무엇인지 특정지을 수 있으면 사용 가능

// TODO: type Assertion : 타입을 잠깐(?) 덮어 씌우는 문법

function assertingingArray(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}
assertingingArray(1234);
// assertingingArray(adsf);

// ? as 문법의 용도

// *1. Narrowing : 애매한(복잡한) 유니언 타입 변수의 타입을 '확정' 지을때만 사용할 것, 일반 변수의 타입을 그냥 바꾸는 것은 불가능
let var1: string = "asj";
// var1 as number // ! Error

// *2. 어떤 타입의 변수가 들어올지 100% 확실하게 알고 있을 때 사용하는 문법. // 굳이 쓸 이유가 없다.(?)
// 남의 코드 수정할 때 정도의 비상용(?)

assertingingArray("asdf"); // assertion 사용을 해뒀기 때문에 Error 캐치가 안됨.

// <number>var1 // ! Error : 옛날 as 문법 : html 태그와 햇갈려서 잘 안 씀.

// TODO: 5강 숙제

// *(숙제1) 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
// 모르는 부분은 구글검색해도 봐드림

function cleaning(x: (string | number)[]) {
  let finished: number[] = [];
  x.map((a) => {
    if (typeof a === "string") {
      finished.push(Number(a));
    } else {
      finished.push(a);
    }
  });
  return finished;
}

console.log(cleaning([1, "5", 3, "asdf"]));

// *solution
function 클리닝함수(a: (number | string)[]) {
  let 클리닝완료된거: number[] = [];

  a.forEach((b) => {
    if (typeof b === "string") {
      클리닝완료된거.push(parseFloat(b));
    } else {
      클리닝완료된거.push(b);
    }
  });

  return 클리닝완료된거;
}

console.log(클리닝함수([123, "3"]));

// TODO: (숙제2) 다음과 같은 함수를 만들어보십시오.

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.

// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고

// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.

// 철수쌤같은 선생님 object 자료를 집어넣으면
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다.

// (동작예시)

// 만들함수( { subject : 'math' } )  //이 경우 'math'를 return
// 만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
// 만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다
// Q. 이 자료가 array type 인지 어떻게 검사하냐고요? 구글에 물어보시면 됩니다.

function lastSubject(x: { subject: string | string[] }): string {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "그딴거 없다.";
  }
}

console.log(lastSubject(철수쌤));
console.log(lastSubject(민수쌤));
// console.log(lastSubject({ hello: "hi" }));
console.log(lastSubject({ subject: ["asdf", "fasdf"] }));

// *solution
function 만들함수(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "없쪄";
  }
}

console.log(만들함수({ subject: ["english", "art"] }));
