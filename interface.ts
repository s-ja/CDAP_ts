// ? interface

// type Square_ = {
//   color: string;
//   width: number;
// };

interface Square_ {
  color: string;
  width: number;
}

let square: Square_ = {
  color: "red",
  width: 100,
};

// ? extends
// TODO : quiz

interface Student {
  name: string;
}
interface Teacher extends Student {
  name: string;
  age: number | undefined;
}

let student: Student = {
  name: "asj",
  //   age: 29,
};

// let teacher: Teacher = {
//   name: "CDAP",
//   age: undefined,
// };

// ? & 기호로 intersection type
// type alias로 extends 만드는 법.

// interface 또한 & 기호로 합칠 수 있음.

type Animal_ = { name: string };
type Cat = { age?: number } & Animal_; // type 교차, 두 타입을 모두 만족하는 경우 =/= 복사(확장)해주세요.(extends)

let teacher: Cat = {
  name: "CDAP",
  age: undefined,
};

// ? interface vs type

// interface = 중복 선언 가능 (합쳐짐 = 자동 extends) (유연함)
// type = 중복 선언 불가능 (엄격함)

interface Student {
  score?: number;
}

type Dog = { name: number } & Animal_;

// let dog: Dog = { name: 123 }; // Error : typeof name === never

// TODO : (숙제1) interface 이용해서 간단하게 타입을 만들어봅시다

/*let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }*/
// 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?
// 무슨 타입일지는 알아서 기입합시다.

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let product: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// ? solution

interface Product_ {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product_ = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// TODO : (숙제2) array 안에 object 여러개가 필요합니다.

// 쇼핑몰 장바구니를 구현하려고 하는데

/*let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] */

// 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?
// 오늘 배운 interface 문법을 써봅시다.

interface Product {
  price?: number;
}

let cart = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// ? solution
//array에 들어갈 수 있는 object의 타입을 interface로 만들어봤습니다.

interface Cart_ {
  product: string;
  price: number;
}

let 장바구니: Cart_[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// TODO : (숙제3) 위에서 만든 타입을 extends 해봅시다.

// 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.

// { product : '청소기', price : 7000, card : false }
// 위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.

interface Cart {
  card?: boolean;
}

// ? solution
// 혹은 속성이 겹치지않으면 & 연산자 써도 가능합니다.

interface NewCart extends Cart_ {
  card: boolean;
}

// TODO : (숙제4) object 안에 함수를 2개 넣고 싶은데요

// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.
// 이 object 자료를 어떻게 만들면 될까요?
// interface를 이용해서 object에 타입지정도 해보십시오.

interface Result {
  plus: number;
  minus: number;
}

// let plus_minus: Result = {
//   plus: function (a: number, b: number) {
//     return a + b;
//   },
//   minus: function (a: number, b: number) {
//     return a - b;
//   },
// };

// ? solution

interface MathObj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let 오브젝트: MathObj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
