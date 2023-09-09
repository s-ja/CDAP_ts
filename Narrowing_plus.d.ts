declare function fnc(a?: string | undefined): void;
type Fish = {
    swim: string;
};
type Bird = {
    fly: string;
};
declare function animal01(animal: Fish | Bird): void;
type Car01 = {
    wheel: "4ea";
    color: string;
};
type Bike01 = {
    wheel: "2ea";
    color: string;
};
declare function vehicle(a: Car01 | Bike01): void;
