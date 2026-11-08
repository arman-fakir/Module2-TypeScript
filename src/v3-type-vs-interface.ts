// * type alias vs interface

// ? interface is generally connected to objects
// ? type alias is more connected to literals, union, tuples, primtives

//  Todo : type
type Id = number
// ! interface dia primtives variable declear kora possible na

type Role = "admin" | "member";
// ! iterface dia union kora possible na


// ! interface use kore object banay then union type create kora possible
interface User {
    name: string;
    id: Id;
    role: Role
    roles: "arman" | "rana" // --> Literal Union 2ta option theke ekta
}
const user : User = {
    name:"arman",
    id:125,
    role:"member",
    roles:"arman"
}


// Todo : interface

// interface extend kora jay
interface ID {
    id: number
}
interface Information extends ID {
    name: string;

}

const student : Information = {
    name: "arman",
    id:154
}
console.log(student)

// type extend 
type Vhicle = {
    brand: string
}
type Car = Vhicle & { 
    //? type alias use Intersection operator "&"
    model:string
    
}
const car : Car = {
    brand:"Corolla",
    model:"x199"
}


// ! type redeclear kora jayna kintu interface redeclear kora jay and 2ta merge hoia jay

// interface
interface IEmployee {
    name:string;
}
interface IEmployee {
    id:number;
}
const employee : IEmployee = {
    name:"arman",
    id:1354
}
console.log(employee);

// type 
// ! this is not valid
// type TEmployee = {
//     name: string;
// }
// type TEmployee = {
//     id:number;
// }
