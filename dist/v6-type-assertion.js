//* Type assertion
//! type assertion joto kom use kora jay better and use korar age jante hobe je kano use korchi use na koratay better
const someStatus = "Pending";
const showStatus = (status) => {
    console.log("Your current Aplication status is " + status);
};
showStatus(someStatus);
const config = {
    port: 5000,
};
// const currentPort : number = config.port!
const currentPort = config.port;
//* constant assertion
const configration = {
    port: 8080,
    prefix: "api/v2"
};
export {};
