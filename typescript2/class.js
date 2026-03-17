"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class person {
    constructor(n1, n2) {
        this.name = "n1";
        this.age = n2;
    }
    //in class function/method define 
    //in this not write ahead function 
    //function ko samne nahi likhte hai class me jab
    //function banate hai to
    meet() {
        console.log(`hi ${this.name}`);
    }
}
//after that create obj multiple time create
const obj1 = new person("pankaj", 23);
const obj2 = new person("brij", 45);
console.log(obj2);
console.log(obj1);
//public private protected
//in  js only public 
//but in ts all are avilable
class customer {
    //only child class access protected 
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    //this function also set as public private protected
    //do not acces in outsinde
    geet() {
        this.age = this.age + 10;
        return this.age;
    }
    meet() {
        console.log("hello");
        return 10;
    }
}
const objs = new customer("pankaj", 23, 3455);
console.log(objs.name);
//using private any one can not change value outside the class
//using objs.name only change in class
console.log(objs.geet());
// console.log(objs.balance)
//in this class inherit the prperty of another class using extemd
class employee extends customer {
    constructor(salary, name, age, balance) {
        super(name, age, balance);
        this.salary = salary;
    }
    //another class can not acces private member
    // geet():number{
    //     this.age = this.age + 10;
    //     return this.age;
    //   }
    //but protected can be acces by another class 
    //member function
    geet() {
        this.balance = this.balance + 10;
        return this.balance;
    }
    meet() {
        console.log("hello");
        return 11;
    }
}
const p1 = new employee(234, "pankaj", 23, 456);
console.log(p1);
console.log(p1.meet());
//# sourceMappingURL=class.js.map