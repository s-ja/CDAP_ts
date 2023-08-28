function fnc(a?: string | undefined) {
  if (a && typeof a === "string") {
  }
}

type Fish = { swim: string };
type Bird = { fly: string };

function animal01(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  } else if ("fly" in animal) {
    animal.fly;
  }
}

// obj instanceof parentClass

// let date = new Date();
// if (date instanceof Date) {
//   console.log(date);
// }

type Car01 = {
  wheel: "4ea";
  color: string;
};

type Bike01 = {
  wheel: "2ea";
  color: string;
};

function vehicle(a: Car01 | Bike01) {
  if (a.wheel === "4ea") {
    console.log("car is " + a.color);
  } else if (a.wheel === "2ea") {
    console.log("bike is " + a.color);
  }
}
