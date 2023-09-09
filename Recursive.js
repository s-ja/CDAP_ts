let css = {
    "font-size": {
        "font-size": {
            "font-size": 14,
        },
    },
};
let css_recursive = {
    "font-size": {
        "font-size": {
            "font-size": 14,
        },
    },
};
// TODO : (숙제1) 다음 자료의 타입을 지정해보십시오.
let obj = {
    model: "k5",
    brand: "kia",
    price: 6000,
    year: 2030,
    date: "6월",
    percent: "5%",
    dealer: "김차장",
};
let obj2 = {
    "font-size": 10,
    secondary: {
        "font-size": 12,
        third: {
            "font-size": "14", // why not Error?
        },
    },
};
let obj2_solution = {
    "font-size": 10,
    secondary: {
        "font-size": 12,
        third: {
            "font-size": 14,
        },
    },
};
export {};
// 1. MyType을 만들었는데 여기 안엔 'font-size' 속성, 그리고 모든 문자 속성이 들어갈 수 있습니다.
// 2. 모든 문자 속성이 들어오면 number | MyType을 가져야한다고 타입지정해놨습니다.
// 그럼 이제 여러분들이 object 안에 object를 집어넣어도 MyType 타입과 비슷하게 생기면 통과시켜줍니다.
