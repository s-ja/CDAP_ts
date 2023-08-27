function testFnc(...a: number[]) {
  console.log(typeof a, a);
}

testFnc(1, 2, 3, 4, 5, 6, 7, 8);

// ? spread operator vs rest parameter

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// ? destructuring

let arr = ["hello", 100];
// let arr0 = arr[0];

let [arr01, arr02] = arr;

console.log(arr01, arr02);

// let { student: student01, age: age01 } = { student: true, age: 20 };
let { student01, age01 } = { student01: true, age01: 20 };
let obj01 = { student01: true, age01: 20 };

console.log(student01, age01);

function fnc01(a, b) {
  console.log(a, b);
}

fnc01(obj01.student01, obj01.age01);

function fnc02({ student01, age01 }: { student01: boolean; age01: number }) {
  console.log(student01, age01);
}

fnc02(obj01);

// TODO :(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈

function max1(...a: number[]): number {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > result) {
      result = a[i];
    }
  }
  return result;
}

function max2(...a: number[]): number {
  let result = 0;
  for (let b of a) {
    if (b > result) {
      result = b;
    }
  }
  return result;
}

// ? solution

function 최댓값(...x: number[]): number {
  let result = 0;
  x.forEach((i) => {
    if (result < i) {
      result = i;
    }
  });
  return result;
}
console.log(최댓값(4, 6, 3, 2));

// TODO : (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
// 함수( { user : 'kim', comment : [3,5,4], admin : false } )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.

function fnc03({ user, comment, admin }) {
  console.log(user, comment, admin);
}

fnc03({ user: "kim", comment: [3, 5, 4], admin: false });

// ? solution

type UserType = {
  user: string;
  comment: number[];
  admin: boolean;
};

function 함수({ user, comment, admin }: UserType): void {
  console.log(user, comment, admin);
}

함수({ user: "kim", comment: [3, 5, 4], admin: false });

// TODO : (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
// 함수( [40, 'wine', false] )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.

function fnc04([a, b, c]) {
  console.log(a, b, c);
}

fnc04([40, "wine", false]);

// ? solution

type 어레이 = (number | string | boolean)[];

function 함수_([a, b, c]: 어레이) {
  console.log(a, b, c);
}

함수_([40, "wine", false]);
