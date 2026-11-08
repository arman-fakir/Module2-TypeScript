//* Type assertion
//! type assertion joto kom use kora jay better and use korar age jante hobe je kano use korchi use na koratay better


//* "as" syntax
type Status = "Pending" | "Approved" | "Rejected"

const someStatus : string = "Pending";

const showStatus = (status : Status) => {
    console.log("Your current Aplication status is " + status);
    
}
showStatus(someStatus as Status)


//* non-null assertion
interface Config{
    port?: number
}
const config : Config = {
    port:5000,
}
// const currentPort : number = config.port!
const currentPort : number = config.port as number

//* constant assertion
const configration =  {
    port:8080,
    prefix: "api/v2"
} as const