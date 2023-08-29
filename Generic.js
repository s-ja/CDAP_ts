function testFnc(a) {
    // TestType = generic 함수 : type 을 parameter 로 입력 가능
    return a[0];
}
let a = testFnc([1, 2, 3]); // a's type = unknown
// console.log(a + 1); // Error // 함수 내부에서 narrowing 을 해주던가 as 키워드를 사용 || generic 함수 사용
// console.log(typeof a);
// console.log(a + 1);
let b = testFnc(["1", "a"]);
let c = testFnc([1, "a"]);
function testFnc2(x) {
    return x - 1; // Error
}
let d = testFnc2(100);
function testFnc3(x) {
    return x.length;
}
let e = testFnc3([12, 3, 5, 6, 7]);
function testFnc4(a) {
    return a.length;
}
// console.log(testFnc4<string>("hello"));
// console.log(testFnc4<string[]>(["kim", "park"]));
// ? solution
function 함수(x) {
    return x.length;
}
let solution1 = 함수("hello");
let solution2 = 함수(["kim", "park"]);
console.log(solution1);
console.log(solution2);
let data = '{"name" : "dog", "age" : 1 }';
//   그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다.
//   data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
//   근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
//   오늘 배운 Generic을 이용해서 구현해보도록 합시다.
//   (동작 예시)
//   함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 Animal임
function testFnc5(a) {
    return JSON.parse(a);
}
console.log(testFnc5(data));
let dataSolution = '{"name" : "dog", "age" : 1 }';
function 함수2(x) {
    return JSON.parse(x);
}
let result = 함수2(data);
console.log(result);
let SolutionData = '{"name" : "dog", "age" : 1 }';
function 함수(x) {
    return JSON.parse(x);
}
let SolutionResult = 함수(data);
console.log(SolutionResult);
// 이렇게 하면 result가 진짜로 Animal 타입을 가지게 됩니다.
// 이게 다 타입파라미터 덕분입니다.
// Q. as 쓰면 더 쉽지 않나요 return 값 오른쪽에 as Animal 하드코딩 해놓으면 <> 필요없겠네
// A. 들킴
// 근데 확장성이 없을 수 있습니다. Generic 쓰시면 Animal 말고도 다른 타입으로 변환이 가능하잖아요
// TODO: 숙제3) class 를 수정해봅시다.
/*class HomeworkPerson {
  name;
  constructor(a) {
    this.name = a;
  }
}
let a = new HomeworkPerson("어쩌구");
a.name; //any 타입이 되었넹
*/
//   지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
//   이게 싫어서 파라미터에 string을 집어넣으면 string 타입
//   number를 집어넣으면 number 타입
//   string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요?
//   오늘 배운 Generic을 이용해봅시다.
// class HomeworkPerson {
//   name;
//   constructor<Type>(a: Type) {
//     this.name = a;
//   }
// }
// let a = new HomeworkPerson<string>("어쩌구");
// a.name; //any 타입이 되었넹
// ? solution
class SolutionPerson {
    constructor(a) {
        this.name = a;
    }
}
let person = new SolutionPerson("어쩌구");
person.name;
