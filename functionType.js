function testFunction2(x) {
    return x * 2;
}
function testFunction3(x) {
    1 + 1;
    // return x * 3; // Error
}
// ? : option = 그 값이 있을수도 없을수도 있음, 없어도 Error가 나오지 않음(객체형 자료에도 사용할 수 있음.).
// ? = [어떤 자료형] | undefined :
testFunction2(30);
// testFunction2("asdf"); // Error
// testFunction3() // Error
function testFunction4(x) {
    // *type narrowing
    // if (typeof x == number) {
    //   return x + 2;
    // }
    // 유니언 타입이기 때문에 숫자 연산 불가. (string + number / number + number 는 가능)
}
// TODO: 4강 숙제
// *(숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다.
function hello(x) {
    if (x) {
        console.log(`hello ${x}`);
    }
    else {
        console.log(`no name`);
    }
}
function hello2(x) {
    if (x) {
        console.log(`hello ${x}`);
    }
    else {
        console.log(`no name`);
    }
}
hello("asj");
// *(숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다
function characterCounter(x) {
    return x.toString().length;
}
function characterCounter2(x) {
    if (typeof x == "number") {
        return x.toString().length;
    }
    else {
        return x.length;
    }
}
// *(숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
// (예시)
// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.
function marryAvailability(x, y, z) {
    let score = x;
    if (y === true) {
        score = score + 500;
    }
    else if (z === "상") {
        score = score + 100;
    }
    if (score >= 600) {
        return "available";
    }
}
// *해답
function 결혼가능하냐(money, house, charm) {
    let score = 0;
    score += money;
    if (house === true) {
        score += 500;
    }
    if (charm === "상") {
        score += 100;
    }
    if (score >= 600) {
        return "결혼가능";
    }
}
// console.log(결혼가능하냐(100, true, "상"));
