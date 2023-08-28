class User01 {
    constructor(a, b, c) {
        this.familyName = "kim";
        this.age = 29;
        this.familyName = a;
        this.name = b;
        this.age = c;
    }
    fnc() { }
}
let user01 = new User01("An", "seung ji", 18);
console.log(user01);
user01.name = "sj";
// user01.age = 19; // Error
console.log(user01);
class User02 {
    constructor(a) {
        this.familyName = ",kim";
        this.name = a + this.familyName;
    }
    changFamilyName() {
        this.familyName = "park,";
    }
}
let user02 = new User02("min su");
console.log(user02);
user02.name = "asj";
console.log(user02);
user02.changFamilyName();
console.log(user02);
class Person01 {
    constructor(name) {
        this.name = name;
    }
}
let person01 = new Person01("asj");
console.log(person01);
