import { type } from "os";

export {};

let obj = { name: "asj", age: 29 };

Object.keys(obj); // [name, age]

interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person; // 'age' | 'name'
let a: PersonKeys = "age";
let b: PersonKeys = "name";
// let c: PersonKeys = 1; // Error

interface Person_indexSignature {
  [key: string]: number;
}

type Person_indexSignature_key = keyof Person_indexSignature; // string | number
let c: Person_indexSignature_key = "name";
let d: Person_indexSignature_key = 1;
// let e: Person_indexSignature_key = true; // Error

// ?타입변환 Mapping(?)

type Car = {
  color: boolean;
  model: boolean;
  price: boolean | string;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};

type NewType = TypeChanger<Car>; // 모든 값에 대한 타입이 string 으로 바뀜

// TODO : (숙제1) 다음 타입을 변환기 돌려보십시오.

type Bus = {
  color: string;
  model: boolean;
  price: number;
};

//   동료가 잘못 만든 타입입니다.
//   color, model, price 속성은 전부 string 또는 number 타입이어야합니다.
//   1. 변환기 하나 만드시고
//   2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.

type BusChanger<MyType> = {
  [key in keyof MyType]: string | number;
};

type NewBusType = BusChanger<Bus>;

// TODO : (숙제2) 이런 변환기는 어떻게 만들어야할까요?

// object안에 들어있는 모든 속성을
// string, number 이렇게 고정된 타입으로 변환해주는게 아니라
// 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.

type NewTypeChanger<MyType, T> = {
  [key in keyof MyType]: T;
};

type NewBus = NewTypeChanger<Bus, boolean>;
type NewBus2 = NewTypeChanger<Bus, string[]>;
