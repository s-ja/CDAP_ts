// class Car_implements {
//   model: string;
//   price: number = 1000;
//   constructor(a: string) {
//     this.model = a;
//   }
// }
class Car_implements {
    tax(a) {
        ///a 파라미터는 any 타입
        return a * 0.1;
    }
    constructor(a) {
        //   model; //any 타입
        this.price = 1000;
        this.model = a;
    }
}
let 붕붕이 = new Car_implements("morning");
