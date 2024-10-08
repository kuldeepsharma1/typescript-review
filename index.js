"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var num = 5;
var msg = "hello!";
var isDone = true;
var numarrr = [1, 2, 3];
var tuple = ["Rahul", 50];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var active = Color.Green;
var no = 4;
function statususer() {
    console.log('This is active');
}
var greet = "hello";
function add(x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return x + y;
}
var user = {
    name: "Rahul",
    age: 30
};
var x = 2;
var y = 2;
var addfun = function (x, y) { return x + y; };
// Classes
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("".concat(this.name, " move ").concat(distance, " meters"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Bowwwww');
    };
    return Dog;
}(Animal));
var Puppy = /** @class */ (function (_super) {
    __extends(Puppy, _super);
    function Puppy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Puppy.prototype.pow = function () {
        console.log('powwwww');
    };
    return Puppy;
}(Dog));
var kutta = new Dog("Rahul");
var puppy = new Puppy("Rahul Puppy");
kutta.bark();
puppy.pow();
puppy.move(50);
kutta.move(100);
var id = 123;
id = "abc";
// union type
var value;
value = "hello";
value = 23;
// generics
function form(arg) {
    return arg;
}
var form1 = form("my string");
// Advnced
var some = "advance@mail.com";
var strlen = some.length;
console.log(strlen);
var userrahul = { id: 10, name: "Rahul" };
userrahul.name = "cool dude";
console.log(userrahul.id);
var response = {
    success: true,
    data: { name: "Rahul" },
};
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    return Student;
}());
exports.Student = Student;
