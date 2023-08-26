// ? class

function maschine(x, a, b) {
  this.q = a;
  this.w = b;
}

var nunu = new maschine("consume", "snowball");
console.log(nunu);

var garen = new maschine("strike", "courage");
console.log(garen);

class Character {
  constructor(a, b) {
    this.q = a;
    this.w = b;
  }
}

// ? prototype

maschine.prototype.name = "asj";

console.log(nunu.name);

var array = [4, 2, 1]; // =
var array = new Array(4, 2, 1);

// array.sort();
array.length;

Array.prototype.customFnc = function () {
  let a = this[0];
  return a;
  // console.log("asj");
};

console.log(array.customFnc());
// console.log(array.prototype.customFnc());
console.log(array.prototype);
