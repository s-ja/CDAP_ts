let myName = "asj";
let myUsers = ["an", "kim", "yun"];
let testObject = { name: "asj" };
let testName = "an";
let typeTest = true;
function testFunction(x) {
    return x * 2;
}
// function testFunction(x: any): number | string {
//   return x * 2;
// }
testFunction(123);
let asj = [123, true];
let jhon = { name: "123", age: "123" };
class User {
    constructor(name) {
        this.name = name;
    }
}
// TODO: 2강
// *예제
// *Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
// 물론 타입도 알아서 지정해보십시오. 이건 쉬우니 답은 없습니다.
let myLastName = "seung ji";
let myAge = 28;
let myBirthPlace = "gwangju";
// 대부분의 경우 초기 기본값 설정에 따라 알아서 '쉴드'를 씌워주는 모양이다.
// *Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
// object 안엔 노래 제목과 가수이름이 들어가면 됩니다.
// 근데 제목과 가수는 문자만 들어올 수 있어야합니다.
let favSongAndArtist = {
    song: "vulture",
    artist: "pendulum",
};
// *Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
// let project = {
//   member : ['kim', 'park'],
//   days : 30,
//   started : true,
// }
// project 변수 우측에 적으면 됩니다.
// member 안엔 문자로 가득한 array만 들어올 수 있고
// days는 숫자, started는 true/false만 들어올 수 있습니다.
let project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
