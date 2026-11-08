//* some caveat of type Guard
const handleSearch = (filters) => {
    if (Array.isArray(filters)) {
        for (let str of filters) {
            console.log(str);
        }
    }
    else if (typeof filters === "string") {
        console.log(filters);
    }
    else {
        console.log("Showing all products default");
    }
};
handleSearch("");
//* Equality
const printAll = (x) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                console.log(str);
                return;
            }
        }
        console.log(x);
        return;
    }
    console.log("");
};
printAll('');
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
//* "instanceof" check
// const date = new Date();
// const err = new Error("Something Went Wrong");
// console.log(date instanceof Date);
// console.log(err instanceof Error);
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date();
    console.log(date.toISOString());
};
showDate("12/12/2026");
const getArea = (shape) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
};
export {};
