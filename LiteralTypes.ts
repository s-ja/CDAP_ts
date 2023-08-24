let test: "test";

// test = 123;
// test = "123";

let test2: "1" | 2;

// test2 = 3

function test3(a: "hello"): "world" | 0 | 1 {
  return "world";
}

// test2("world");

function RSP(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  if (a === "가위") {
    return ["바위"];
  } else if (a === "바위") {
    return ["보"];
  } else {
    return ["가위"];
  }
}

// RSP("scissor")
RSP("바위");

let info1 = {
  name: "kim", // type = string
};

function testFcn(a: "kim") {} // 'kim'이라는 자료만 들어올 수 있습니다 (x) // 'kim'이라는 타입만 들어올 수 있습니다 (d)

// testFcn(info1.name); // ! Error
// testFcn(info.name as "kim"); // cheat?

let info2 = {
  name: "kim", // type = string
} as const; // ? '이 객체는 리터럴 타입으로 취급함.'
testFcn(info2.name);

var info3: { name: "kim" } = {
  name: "kim",
};
testFcn(info3.name);
