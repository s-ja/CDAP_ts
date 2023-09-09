declare let a: number;
declare let b: string;
declare let c: string | number;
declare function testFnc2<TestType extends number>(x: TestType): number;
declare let d: number;
interface LengthCheck {
    length: number;
}
declare function testFnc3<TestType extends LengthCheck>(x: TestType): number;
declare let e: number;
interface HomeWorkLengthCheck {
    length: number;
}
declare function testFnc4<TestType extends HomeWorkLengthCheck>(a: TestType): number;
declare let solution1: number;
declare let solution2: number;
interface HomeWorkAnimal {
    name: string;
    age: number;
}
declare let data: string;
declare function testFnc5<TestType extends HomeWorkAnimal>(a: string): TestType;
interface AnimalSolution {
    name: string;
    age: number;
}
declare let dataSolution: string;
declare function 함수2(x: string): any;
declare let result: any;
interface SolutionAnimal {
    name: string;
    age: number;
}
declare let SolutionData: string;
declare let SolutionResult: SolutionAnimal;
declare class SolutionPerson<Type> {
    name: Type;
    constructor(a: Type);
}
declare let person: SolutionPerson<string>;
