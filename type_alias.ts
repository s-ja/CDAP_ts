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
  readonly region: string;
};

const where: place = {
  region: "seoul",
};

// where.region = "busan"; // Error
