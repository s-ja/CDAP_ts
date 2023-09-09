let a; // typeof a = string
let b; // typeof b = unknown
let age1;
let age2;
let age1_;
let age2_;
export {};
// 이러면 a라는 타입이 number로 잘 남습니다.
// 참고로 함수만 들어올 수 있게 제한을 두고 싶으면
// 언제나 T 라는 함수 파라미터 만들 때 extends로 제한을 두면 됩니다.
