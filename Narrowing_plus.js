function fnc(a) {
    if (a && typeof a === "string") {
    }
}
function animal01(animal) {
    if ("swim" in animal) {
        animal.swim;
    }
    else if ("fly" in animal) {
        animal.fly;
    }
}
function vehicle(a) {
    if (a.wheel === "4ea") {
        console.log("car is " + a.color);
    }
    else if (a.wheel === "2ea") {
        console.log("bike is " + a.color);
    }
}
