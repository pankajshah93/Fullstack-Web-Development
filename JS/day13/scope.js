//scop of variable
//global scope,   local scope (function scope),block scope


//its global scope accesible for every where fumction loop 
// let a=10
// var b=20
// const c=30

// function geet(){
//     console.log(a);
//     console.log(b)
//     console.log(c)
// }
// geet()




// //local scope functional
// function greet(){
//     let a=10;
//     var b=20;
//     const c=34;
//     console.log("hello");
//     console.log(a,b,c);
// }
// greet();
// console.log(a) can not access out of function





//block scope
// {

// }
//in var variable changed so this is not use
// var amount=30;
// var amount =20;
// var amount=40;
// console.log(amount)


// if(true){
//        let a=10
//        var b=20;
//        const c=34;
//    }
// console.log(b)

//for loop block element
// for(let i=0;i<5;i++){
//     console.log(i);
// }
//i do not acces out side

//global scope
// let amount =30

//block scope
// if(true){
//     let amount=30
//     console.log(amount)
// }




// greet();
// //if you create function in two types

// //in this type function create you can acces function any where before function
// function greet(){
//     console.log("hello world")
// }


// //in this method create function only call after this function
// let meet=function(){
//     console.log("hello meet")
// }
// meet();