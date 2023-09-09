interface CarType {
    model: string;
    price: number;
    tax: (price: number) => number;
}
declare class Car_implements implements CarType {
    model: string;
    price: number;
    tax(a: any): number;
    constructor(a: string);
}
declare let 붕붕이: Car_implements;
