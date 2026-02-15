//the this keyword in javascript as a special keyword that refers to
//the context in which the curent code is being executed 
//its value depends on how the function where this is used is called .


//1:gloabal context (outside any function)
//in browsers window 
//in node.js modules exports object 

// this keyword global scope me window ko point karta hai
// let a =10;
// const b=20
// console.log(this)//provide empty space
// console.log(this==window)

//2.inside a function 
//i:(non strict mode)
// when this is used inside a regular function it resfers to the global object
//1i:strict mode 
//this will be undeffines inside a function  

"use strict"
//by default its non strict
function greet(){
    console.log(this)
}
// greet();
// window.greet();

"use strict"
//using strict our code is less bugs 
//using this strict you can not run without defined variable
//  a=10;
// console.log(a)

// let obj={
//     name:10,
// }

// Object.freeze(obj);
// obj.name=30;
// console.log(obj);


//3:inside a method(object context )
//when this is used inside an object method  it refers to the object that 

// const obj={
//     name:"pankaj",
//     age:20,
//      meet:function(){
//         console.log(this);
//     }
// }
// obj.meet();


//arrow function dont have their own this 
//indtead, they inherit this from the surrounding (lexicall)scope


// let obj={
//     name:"pankaj",
//     age:11,
//     greet:()=>{
//         console.log(this);
//     }
// }
// obj.greet();

// let obj={
//     name:"pankaj",
//     age:11,
//     greet:function(){

//         let ab=()=>{
//         console.log(this);
//     }
//     ab();
// }
// }
// obj.greet();




//inside a constructor or class
//in cinstructors and classes this refers to the instance of the object  being created

// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
//this is point to a 
//a.name="rohit"
// let a=new person("rohit",20);
// console.log(a);

// let is not part of global object
"use strict"
let user=function(){
    console.log(this)
}
window.user();