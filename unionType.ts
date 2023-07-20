// TODO: 3강- 타입을 미리 정하기 애매할 때(union type, any, unknown)

// *union type
let testVar: number | string = "kim";
testVar = 1234;

let members: (number | string)[] = [1, "2", 3];

let testObject2: { a: string | number } = { a: "string" };
testObject2 = { a: 123 };

// *any type

let testAny: any = undefined;
testAny = 1234;
testAny = { a: 123, b: "asdf" };

let testUnknown: unknown = null;
testUnknown = {};

// testUnknown - 1
// Error : 타입스크립트는 간단한 수학 연산 또한 타입이 맞아야 함.

let testType: number | string;

// testType + 1
// Error : union type 은 새로운 타입을 하나 만들어 낸 것, union type 으론 수학 연산이 불가능

let testUnknown2: unknown = 1;
// testUnknown2 - 1;
// Error : unknown 타입이긴 하나, 담겨있는 것이 number, 즉 같은 number 로만 연산이 가능함.

// 기존의 JS와 같이 자유로운 코드 작성이 불가능 = Narrowing/Assertion 과 같은 스킬 필요.

// TODO: 3강 문제(union type)

// *(숙제1) 다음 변수 4개에 타입을 지정해봅시다.
let user: string = "kim";
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

// *(숙제2) 학교라는 변수에 타입지정해보십시오.

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
