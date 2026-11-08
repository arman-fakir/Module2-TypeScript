// Generic

const wraInArray = <T>(value: T) => {
    return [value];
}
const stringArr = wraInArray<string>("arman")
const numberArr = wraInArray<number>(127705)
let upper = stringArr.map((item) => item.toUpperCase())
console.log(upper);

// 

interface User {
    name: string,
    roll: string

}
interface Blog {
    title: string,
    description: string
    date:string

}

interface ApiResponse<T> {
    data: T;
    success: boolean;
    statusCode: number;
}
type userRes = ApiResponse<User>
type BlogRes = ApiResponse<Blog>

const userRes : userRes = {
    statusCode: 251,
    success: true,
    data:{
        name:"arman",
        roll: "125"
    }

}