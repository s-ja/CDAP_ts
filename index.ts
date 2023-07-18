let myName: string = "asj";

let myUsers: string[] = ["an", "kim", "yun"];

let testObject: { name?: string } = { name: "asj" };

let testName: string | number = "an";
// union type

type TestType = string | number | boolean;

let typeTest: TestType = true;

function testFunction(x: number): number {
  return x * 2;
}
// function testFunction(x: any): number | string {
//   return x * 2;
// }

testFunction(123);

type Member = [number, boolean];
let asj: Member = [123, true];
// tuple type

type NewMember = {
  name: string;
  [key: string]: string;
};

let jhon: NewMember = { name: "123", age: "123" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
