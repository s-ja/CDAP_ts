export {};

type Age<T> = T;
let a: Age<string>; // typeof a = string

type name<T> = T extends string ? string : unknown;

let b: name<number>; // typeof b = unknown

// type FirstItem<T> = T extends string[] ? string : any;

type FirstItem<T> = T extends any[] ? T[0] : any;

let age1: FirstItem<string[]>;
let age2: FirstItem<number>;

type Person<T> = T extends infer R ? R : unknown;

type a = Person<string>;

type TypeInfer<T> = T extends (infer R)[] ? R : unknown;

type b = TypeInfer<string[]>; // typeof b = string

type TypeInfer2<T> = T extends () => infer R ? R : unknown;

type c = TypeInfer2<() => void>; // typeof b = string

type d = ReturnType<() => void>;

// TODO : (숙제1) 타입 파라미터로

// 1. array 타입을 입력하면
// 2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고
// 3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?

// (동작예시)

// let age1 :Age<[string, number]>;
// let age2 :Age<[boolean, number]>;
// 이러면 age1의 타입은 string, age2의 타입은 unknown이 되어야합니다. (array나 tuple이나 그게 그거임)
// 이걸 만족하는 type Age를 만들어봅시다.

// type Age_<T> = T extends (infer R)[] ? R : any;

// ?solution
type Age_<T> = T extends [string, ...any] ? T[0] : unknown;
let age1_: Age_<[string, number]>;
let age2_: Age_<[boolean, number]>;

// TODO : (숙제2) 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오.
// 타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
// 타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음
// 아무튼 함수의 파라미터타입이 남아야합니다.

// ?solution
type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;
type a_ = 타입뽑기<(x: number) => void>;

// 이러면 a라는 타입이 number로 잘 남습니다.
// 참고로 함수만 들어올 수 있게 제한을 두고 싶으면
// 언제나 T 라는 함수 파라미터 만들 때 extends로 제한을 두면 됩니다.
