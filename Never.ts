function fnc05(): never {
  // 끝나지 않는 함수 (end point 가 없는 함수)
  //   throw new Error(); // 함수 실행이 중단됨 (끝난것은 아님)
  while (true) {}
}

function fnc06(): void {
  console.log("void");
}

function fnc07(parameter: string) {
  if (typeof parameter == "string") {
    console.log(parameter);
  } else {
    console.log(parameter); // type of parameter === 'never'
  }
}

let fnc08 = function () {
  throw new Error();
}; // return => never
