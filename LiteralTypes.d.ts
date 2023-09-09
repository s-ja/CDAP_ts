declare let test: "test";
declare let test2: "1" | 2;
declare function test3(a: "hello"): "world" | 0 | 1;
declare function RSP(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[];
declare let info1: {
    name: string;
};
declare function testFcn(a: "kim"): void;
declare let info2: {
    readonly name: "kim";
};
declare var info3: {
    name: "kim";
};
