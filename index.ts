let num: number = 5;
let msg: string = "hello!";
let isDone: boolean = true;
let numarrr: number[] = [1, 2, 3];
let tuple: [string, number] = ["Rahul", 50];


enum Color {
    Red, Yellow, Green
}

let active: Color = Color.Green
let no: any = 4;


function statususer(): void {
    console.log('This is active')
}


let greet = "hello";

function add(x: number = 0, y: number = 0): number {
    return x + y;
}


// #interfaces
interface User{
    name:string;
    age:number;
}

let user:User = {
    name:"Rahul",
    age:30
}

interface addoperation{
    (a:number,b:number):number;
}
let x=2;
let y=2;

let addfun:addoperation = (x,y) => x + y;

