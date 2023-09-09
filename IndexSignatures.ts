export {};

// interface stiringOnly {
//   name: string;
//   age: string;
//   location: string;
// }
interface stiringOnly {
  //   age: number; // Error
  age: "20";
  [key: string]: string | number;
  [key: number]: number;
  //   [key: number]: number | string | boolean; // Error
}

let user: stiringOnly = {
  name: "kim",
  age: "20",
  location: "seoul",
  //   0: "kim", // Error
  1: 123,
  //   2: true,
};

console.log(user[0]);
