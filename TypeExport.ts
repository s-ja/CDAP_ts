export let name02 = "asj";
export let age02 = "29";

export type Name02 = string;

let nametest: Name02 = name02;

namespace namespaceTest {
  // 타입을 숨기기 위해? 이름이 겹침을 방지.
  export type Name = string | number;
}
namespace namespaceTest2 {
  export type Name = string | number;
}

let test: namespaceTest.Name = "asj";

export interface interfaceTest {}

// module namespaceTest {} // namespace 보다 예전 사용법

// TODO: (숙제1) Car 그리고 Bike 타입을 만들었는데 너무 길어요

export type Car = {
  wheel: number;
  model: string;
};
export interface Bike {
  wheel: 2;
  model: string;
}

// TODO : (숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다

export function testFnc(a) {}

// ? solution
export type ObjFunction = (a?: object) => void;

// TODO : 
