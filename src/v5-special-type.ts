//* Top types
//? any type
let x:any = "hello world";
x= 451
console.log(x);

//? unknown type
 let something : unknown = 451
let some : number = something as number
console.log(some);

//  something.length

let myName : unknown = "arman"
let info : string = myName as string
console.log(info);


//*Core types
let something2 : unknown;
const num : number = 165;
something2 = num


//*Nullish types

interface User {
    name:string;
}
type LoggedInUser = User | null
const currentUser : LoggedInUser = null
console.log(currentUser);


//*Unit type
const greet = ()=>{
    console.log("hello world");
    
}
greet()

//*Sub-type of unit type

const anotherGreet = (): undefined=>{
    console.log("hello world");
    
}
anotherGreet()

//*Bottom type

let getError = (msg: string)=>{
    throw new Error(msg);
}

