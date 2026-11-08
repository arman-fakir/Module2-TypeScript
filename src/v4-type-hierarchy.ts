 type Person = {
  name: string;
};

type Student = {
  name: string;
  roll: number;
};

const myStudent : Student = {
    name:"arman",
    roll:135
}

const myAll : Person = myStudent
console.log(myAll);
