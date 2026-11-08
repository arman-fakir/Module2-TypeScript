//* typeof

let x = true;
console.log(typeof x);

//* Type Guard

const print = (value: string | number) =>{
    if(typeof value === "string"){
        return value.toUpperCase()
    }else{
        return value
    }
}
/*
const print = (value: string | number) =>{
    if(typeof value === "string"){
        return value.toUpperCase()
    }else if(typeof value === "number"){
        return value
    }else{
        return value
    }
}
*/
//* Truthiness
type User = {
    name: string;
    address:{
        street:string
    }
} | null

const loggedInUser : User = {
    name:"arman",
    address:{
        street:""
    }
    
}
const showAddress = (user : User) =>{
    if(user && user.address){
        console.log(user.address.street);
        return
    }
    throw new Error("user not found")
    
    
}
showAddress(loggedInUser)

/*
const showAddress = (user: User) =>{
    console.log(user?.address.street);
    
}
showAddress(loggedInUser)
*/
//* Equality

//* "in" operator

//* "instanceof" check

//* Discriminated union;
