type Test1Type = (a: string) => number;
declare let test1: Test1Type;
declare let test2_: {
    name: string;
    age: string;
    plusOne(a: number): number;
    changName: () => void;
};
declare function fnc1(a: any): void;
declare function fnc2(): void;
type test2_solution = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};
declare function cutZero(a: string): string;
declare function removeDash(a: string): number;
type CutType = (x: string) => string;
declare let cutZero_solution: CutType;
declare function removeDash_solution(x: string): number;
declare function total(a: string, cutZero_solution: any, removeDash_solution: any): any;
declare function total_solution(a: any, func1: any, func2: any): any;
