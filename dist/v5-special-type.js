//* Top types
//? any type
let x = "hello world";
x = 451;
console.log(x);
//? unknown type
let something = 451;
let some = something;
console.log(some);
//  something.length
let myName = "arman";
let info = myName;
console.log(info);
//*Core types
let something2;
const num = 165;
something2 = num;
const currentUser = null;
console.log(currentUser);
//*Unit type
const greet = () => {
    console.log("hello world");
};
greet();
//*Sub-type of unit type
const anotherGreet = () => {
    console.log("hello world");
};
anotherGreet();
//*Bottom type
let getError = (msg) => {
    throw new Error(msg);
};
export {};
