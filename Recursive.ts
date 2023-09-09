export {};

interface CssType {
  "font-size": {
    "font-size": {
      "font-size": number;
    };
  };
}

let css: CssType = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

// ?recursive

interface CssType_recursive {
  "font-size": CssType_recursive | number;
}

let css_recursive: CssType_recursive = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

// TODO : (숙제1) 다음 자료의 타입을 지정해보십시오.

let obj: Obj = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};
//   귀찮으니까 한번에 지정하기 위해 index signature 이걸 써봅시다.

interface Obj {
  [key: string]: string | number;
}

// TODO : (숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오.

interface Obj2 {
  [key: string]: Obj2 | number;
}

let obj2 = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": "14", // why not Error?
    },
  },
};
//   object 안에 object 안에 object가 들어있습니다.
//   타입지정 해보도록 합시다. 물론 비슷한 object들이 더 중첩되어도 가능하게 recursive한 타입을 써보는건 어떨까요.

// ?solution

interface Obj2_solution {
  "font-size": number;
  [key: string]: number | Obj2_solution;
}

let obj2_solution: Obj2_solution = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};

// 1. MyType을 만들었는데 여기 안엔 'font-size' 속성, 그리고 모든 문자 속성이 들어갈 수 있습니다.
// 2. 모든 문자 속성이 들어오면 number | MyType을 가져야한다고 타입지정해놨습니다.
// 그럼 이제 여러분들이 object 안에 object를 집어넣어도 MyType 타입과 비슷하게 생기면 통과시켜줍니다.
