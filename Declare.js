// js로 만든 라이브러리 사용시 변수, 함수 등을 declare로 재 정의 하기도 함.
// console.log(declare_a + 1); // 작동하지만 Error
// let ambient = 10; // (./AmbientModule.ts)
// console.log(ambient + 1); // 개발자 도구 콘솔에서는 Error, 편집기에서는 에러 X
// ! 모든 ts 파일은 ambient module(글로벌 모듈)
// = 다른 파일에서의 변수 선언 이후 재 정의 불가능
// ? 로컬 모듈
// 파일에 import 혹은 export 가 하나라도 있으면 해당 파일은 자동으로 로컬 모듈화
let ambient = 10;
// ? 로컬 모듈에서 글로벌 변수를 만들어야 할 때?
let global_a = 5; // 전역 변수 초기화
export {};
