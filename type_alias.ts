// TODO: 5강

// TODO: type Alias
// 타입 변수(별칭)
// 타입 변수 작명은 대문자 시작이 관습, 일반 변수와 차별화.
type Animal = string | number | undefined;

let animal: Animal;

animal = 123;
// animal = true; // Error

type AnimalType = { name: string; age?: number };

let animal2: AnimalType = { name: "dog", age: 3 };

const birthLocation: string = "seoul";

// TODO : object readonly
type place = {
  readonly region?: string; // = string | undefined
};

const where: place = {
  //   region: "seoul",
};

// where.region = "busan"; // Error

// TODO : type alias extend
// 1st
type Name = string;
type Age = number;
type person = Name | Age;
// 2nd
type PositionX = { x: number };
type PositionY = { y: number };

type NewPostion = PositionX & PositionY;

let postition: NewPostion = { x: 10, y: 20 };
// let wrongPosition: NewPostion = { x: "something", y: "20" }; // Error

// ! 같은 이름의 type 변수 재정의 불가능

//TODO : (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?

//그건 여러분들이 한번 테스트해보길 바랍니다.

type PositionZ = { x: number };
type PositionW = { x: number };
type PositionQ = { y: number };

type NewPostion2 = PositionW & PositionZ;

//TODO : (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.

// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
// type alias로 만들어보셈

type Color = { color?: string };
type Size = { size: number };
type Position = readonly number[];

// ? solution
type Square = {
  color?: string;
  size: number;
  readonly position: number[];
};

//TODO : (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.

// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

type ManName = { name: string };
type Phone = { phone: number };
type Email = { email?: string };

type Man = ManName & Phone & Email;
let man: Man = {
  name: "kim",
  phone: 123,
};

// ? solution
type User_ = { UserName: string; UserEmail?: string; UserPhone: number };
let 회원가입정보: User_ = {
  UserName: "kim",
  UserPhone: 123,
};

//TODO : (숙제4) 다음을 만족하는 type alias를 만들어보십시오.

// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// 3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.

type User__ = {
  UserName: string;
  UserEmail?: string;
  UserPhone: number;
  adult?: boolean;
};
let 회원가입정보_: User__ = {
  UserName: "kim",
  UserPhone: 123,
  adult: true,
};

// ? solution
type User___ = { name: string; email?: string; phone: number };
type Adult = { adult: boolean };

type NewUser = User___ & Adult;

let 회원가입정보___: NewUser = {
  name: "kim",
  adult: false,
  phone: 1234,
};
