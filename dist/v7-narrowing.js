//* typeof
let x = true;
console.log(typeof x);
//* Type Guard
const print = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value;
    }
};
const loggedInUser = {
    name: "arman",
    address: {
        street: ""
    }
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error("user not found");
};
showAddress(loggedInUser);
export {};
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
