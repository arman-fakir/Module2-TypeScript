// Literal Type 
type Status = 'pending' 
const userStatus : Status = 'pending'

// Basic Union
type Identity = string | number
const id : Identity = "arman135"
console.log(id)
// Literal Union -->--> 3ta value theke jekono ekta chose korbe bahire theke nite parbe na
type Role = "user" | "admin" |"manager"
const userRole : Role = "admin"
//  Object Union

type Admin = {id:number, role:"admin", privileges: string[]}
type Member = {id:number, role:"member", plans: string[]}
type User = Admin | Member
const user : User = {id:125,role:"member",plans:['ads']}
console.log(user)