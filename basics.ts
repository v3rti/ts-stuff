let user: string = "Amine";
let hasLoggedIn: boolean = true;
let num :number = 10;

let regexVariable: RegExp = /bar/;

const users: string[] = user.split(" ");

const values: Array<number> = [1,4,5,9];

const myUser: {firstName: string; lastName: string, isCoding: boolean} = {
  firstName: "Amine",
  lastName: "Saad",
  isCoding: false
}

interface User {
  firstName: string;
  lastName: string;
}

const newUser: User = {
  firstName: "Amine",
  lastName: "Said"
}

const ids: Record<number, string> = {
  15: "a",
  30: "b"
}

ids[45] = "ab";

if (ids[45] === "ab"){
  
}

for (let i = 0; i < 5; i++){
  console.log(i);
}

const output: number[] = [3,4,5].map((n) => n * 10);
const secOutput: string[] = [3,4,5].map((n) => `${n * 10}`); /* output of the map is a string in this case unlike the one before */ 