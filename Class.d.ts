declare class User03 {
    private x;
    protected y: number;
}
declare class NewUser03 extends User03 {
    y: number;
    doSomething(): void;
}
declare let human: NewUser03;
declare class User04 {
    private static x;
    y: number;
}
declare let child: User04;
declare class User05 {
    static skill: string;
    intro: string;
}
declare let asj01: User05;
declare let asj02: User05;
declare class HomeWorkUser {
    private static x;
    static y: number;
    static addOne(a: any): void;
    static printX(): void;
}
declare class UserSolution {
    private static x;
    static y: number;
    static addOne(파라미터: number): void;
    static printX(): void;
}
declare class HomeWorkSquare {
    x: any;
    y: any;
    color: any;
    constructor(a: any, b: any, c: any);
    draw(): void;
}
declare let 네모: HomeWorkSquare;
declare class SquareSolution {
    width: number;
    height: number;
    color: string;
    constructor(width: number, height: number, color: string);
    draw(): void;
}
declare let Square: SquareSolution;
