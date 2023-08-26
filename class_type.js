class Person {
    constructor(a, c, b) {
        this.data = 0;
        this.name = a;
        this.age = b;
        this.expert = c;
    }
    testFnc() {
        return this.age;
    }
    hello(a) {
        console.log("hello " + a);
        return "hello " + a;
    }
}
let user1 = new Person("asj", false, 29);
let user2 = new Person("cdap", true);
console.log(user1.data);
console.log(user2);
console.log(user2.age);
console.log(user1.testFnc());
console.log(user1.hello("asj"));
// console.log(user1.hello(123));
// TODO: (숙제1) Car 클래스를 만들고 싶습니다.
// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
// 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.
// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.
/*(동작 예시)
let car1 = new Car('소나타', 3000)
console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()) //콘솔창 출력결과는 300*/
class Car {
    constructor(a, b) {
        this.model = a;
        this.price = b;
    }
    tax() {
        return this.price / 10;
    }
}
let sonata = new Car("Sonata", 3000);
console.log(sonata);
console.log(sonata.tax());
//? solution
class Car_solution {
    constructor(a, b) {
        this.model = a;
        this.price = b;
    }
    tax() {
        return this.price * 0.1;
    }
}
let car1 = new Car_solution("소나타", 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
// TODO: (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면
// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고
// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈
/*(동작 예시)
let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']*/
//? solution
class Word {
    constructor(...param) {
        let 숫자들 = [];
        let 문자들 = [];
        param.forEach((i) => {
            if (typeof i === "string") {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
}
let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
console.log(obj);
/* 지금 100만개 들어온 파라미터가 대체 무슨 타입인지 검사해서

각 속성에 집어넣으면 됩니다.

1. class Word를 만들고 constructor를 만들었는데
2. 그 안에는 rest parameter가 들어올 수 있다고 만들었습니다. 이제 new Word() 할 때 파라미터 개많이 입력가능
3. rest parameter는 array로 들어옵니다. 그걸 반복문 돌려서 하나하나 검사해봅니다.
4. 파라미터 타입이 문자면 문자들 [] 에 추가, 숫자면 숫자들 [] 에 추가합니다.
5. this.num = 숫자들 array, this.str = 문자들 array 이렇게 해줬습니다.

테스트해보니 잘 됩니다. */
