// Generic
const wraInArray = (value) => {
    return [value];
};
const stringArr = wraInArray("arman");
const numberArr = wraInArray(127705);
let upper = stringArr.map((item) => item.toUpperCase());
console.log(upper);
const userRes = {
    statusCode: 251,
    success: true,
    data: {
        name: "arman",
        roll: "125"
    }
};
export {};
