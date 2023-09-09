declare class Person {
    data: number;
    name: string;
    age: number | undefined;
    expert: boolean;
    constructor(a: string, c: boolean, b?: number);
    testFnc(): number | undefined;
    hello(a: string): string;
}
declare let user1: Person;
declare let user2: Person;
declare class Car {
    model: string;
    price: number;
    constructor(a: string, b: number);
    tax(): number;
}
declare let sonata: Car;
declare class Car_solution {
    model: string;
    price: number;
    constructor(a: string, b: number);
    tax(): number;
}
declare let car1: Car_solution;
declare class Word {
    num: number[];
    str: string[];
    constructor(...param: (number | string)[]);
}
declare let obj: Word;
