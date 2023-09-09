interface Square_ {
    color: string;
    width: number;
}
declare let square: Square_;
interface Student {
    name: string;
}
interface Teacher extends Student {
    name: string;
    age: number | undefined;
}
declare let student: Student;
type Animal_ = {
    name: string;
};
type Cat = {
    age?: number;
} & Animal_;
declare let teacher: Cat;
interface Student {
    score?: number;
}
type Dog = {
    name: number;
} & Animal_;
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let product: Product;
interface Product_ {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let 상품: Product_;
interface Product {
    price?: number;
}
declare let cart: {
    product: string;
    price: number;
}[];
interface Cart_ {
    product: string;
    price: number;
}
declare let 장바구니: Cart_[];
interface Cart {
    card?: boolean;
}
interface NewCart extends Cart_ {
    card: boolean;
}
interface Result {
    plus: number;
    minus: number;
}
interface MathObj {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let 오브젝트: MathObj;
