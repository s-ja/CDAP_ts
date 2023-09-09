declare let arr1: number[];
declare let arr2: number[];
declare let arr3: number[];
declare let arr: (string | number)[];
declare let arr01: string | number, arr02: string | number;
declare let student01: boolean, age01: number;
declare let obj01: {
    student01: boolean;
    age01: number;
};
declare function fnc01(a: any, b: any): void;
declare function fnc02({ student01, age01 }: {
    student01: boolean;
    age01: number;
}): void;
declare function max1(...a: number[]): number;
declare function max2(...a: number[]): number;
declare function 최댓값(...x: number[]): number;
declare function fnc03({ user, comment, admin }: {
    user: any;
    comment: any;
    admin: any;
}): void;
type UserType = {
    user: string;
    comment: number[];
    admin: boolean;
};
declare function fnc04([a, b, c]: [any, any, any]): void;
type 어레이 = (number | string | boolean)[];
declare function 함수_([a, b, c]: 어레이): void;
