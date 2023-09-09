// class Car_implements {
//   model: string;
//   price: number = 1000;
//   constructor(a: string) {
//     this.model = a;
//   }
// }

interface CarType {
  model: string;
  price: number;
  tax: (price: number) => number;
}

class Car_implements implements CarType {
  model: string;
  //   model; //any 타입
  price: number = 1000;
  tax(a) {
    ///a 파라미터는 any 타입
    return a * 0.1;
  }
  constructor(a: string) {
    this.model = a;
  }
}

let 붕붕이 = new Car_implements("morning");
