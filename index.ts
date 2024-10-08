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
interface User {
    name: string;
    age: number;
}

let user: User = {
    name: "Rahul",
    age: 30
}


function addcart(name: string, quantity: number, price: number): any {
    price = price + 10;
    let invoice = { name, price, quantity };
    return invoice
}


interface addoperation {
    (a: number, b: number): number;
}
let x = 2;
let y = 2;

let addfun: addoperation = (x, y) => x + y;

// Classes

class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
    public move(distance: number = 0) {
        console.log(`${this.name} move ${distance} meters`)
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    bark() {
        console.log('Bowwwww');
    }
}
class Puppy extends Dog {
    pow() {
        console.log('powwwww');
    }
}

let kutta = new Dog("Rahul");
let puppy = new Puppy("Rahul Puppy");
kutta.bark();

puppy.pow();
puppy.move(50);

kutta.move(100);

// type alias
type StringOrNumber = string | number;

let id: StringOrNumber = 123;
id = "abc";
// union type
let value: string | number;
value = "hello";
value = 23;

// generics
function form<T>(arg: T): T {
    return arg;
}

let form1 = form<string>("my string");


// Advnced

let some: any = "advance@mail.com";
let strlen: number = (some as string).length;
console.log(strlen);

// Readonly
interface UserRahul {
    readonly id: number;
    name: string;
}

let userrahul: UserRahul = { id: 10, name: "Rahul" };
userrahul.name = "cool dude";
console.log(userrahul.id);

// intersection types
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface UserData {
    data: { name: string };
}

type ApiResponse = ErrorHandling & UserData;

const response: ApiResponse = {
    success: true,
    data: { name: "Rahul" },
};


export class Student {
    constructor(public name: string) {
    }
}