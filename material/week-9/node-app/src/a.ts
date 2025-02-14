let x = 3;
let y: number = 4;
console.log(x, y);

//_______________________________________________________________________________________________________________________________

function greet(firstName: string) {
    console.log("Hello "+ firstName);
}
greet("Chaitanya")

//_______________________________________________________________________________________________________________________________


function isLegal(age: number) : boolean {
    return age >= 18 ? true: false;
}
console.log(isLegal(13));
console.log(isLegal(40));

//_______________________________________________________________________________________________________________________________


function callBack(cbFn: (firstName: string) => void, name: string) {
    setTimeout(() => cbFn(name), 1);
}
callBack(greet, "Elon Musk") 

//_______________________________________________________________________________________________________________________________


interface User {
    firstName: string,
    lastName: string,
    age: number,
    emai ?: string,
}
function isLegal2(user: User) {
    return user.age >= 18 ? true: false;
}
console.log(isLegal2({firstName: "Satya", lastName: "Nadella", age: 45}));

//_______________________________________________________________________________________________________________________________


type StringOrNumber = string | number;
function printId(id: StringOrNumber) {
    console.log(`ID: ${id}`);
}
printId(101); // ID: 101
printId("202"); // ID: 202

//_______________________________________________________________________________________________________________________________


type Employee = {
    name: string;
    startDate: Date;
};
type Manager = {
    name: string;
    department: string;
};
type TeamLead = Employee & Manager;
const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
};


//_______________________________________________________________________________________________________________________________


type keyInput = "up" | "down" | "left" | "right";
enum Direction {
    Up, Down, Left, Right
}
function move(keyPress : Direction) {
    if (keyPress == Direction.Up) console.log("moving up");
    else console.log("not moving up");
}
move(Direction.Down);
move(Direction.Up);


//_______________________________________________________________________________________________________________________________
// Generics

function getFirst<T>(arg: T[]) {
    return arg[0];
}
const val = getFirst(["Elon", "Steve", "Zuck", "Sam"]) // val is a string
const val1 = getFirst([3,5,2]) // val is a number
console.log(typeof(val), val, typeof(val1), val1);