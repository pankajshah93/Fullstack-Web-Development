//function

// function greet(){
//     console.log("hello ")
//     console.log("hello dosto ky hal hai")
// }
// greet();
// greet();
// greet();
//print many times just called function name



// //parameter
// function sum(number1 , number2){
//         console.log(number1+number2)
// }
//function call,pass argument
// sum(3,4);
// sum(10,23);


// //multiply using function
// function multiply(number1,number2)
// {
//     // console.log(number1*number2);
//     return number1*number2;
// }
// multiply(4,5)
// // let result =multiply(4,5)
// // console.log(result)
// console.log(multiply(4,5))//print return statement



// const fun=function(){
//     console.log("hello pankaj shah")
//     console.log("how are you")
//     return "hello";
// }
// // fun();
// console.log(fun())




//Arrow function not use nameoffunction
// const fun =(number1 ,number2)=>{
//     console.log("hello")
//     return number1*number2
// }
// console.log(fun(3,4));
//advantage of Arrow function sort our code not write return

// const fun =(number1 ,number2)=>number1*number2;
// // const fun =(number1 ,number2)=>{
// //      return number1*number2
// //  } above lines is write in sort way in first row
// console.log(fun(3,4));
// const func =number1=>number1*number1;//single value pass remove brakets


//spread and rest operator
// let arr=[1,2,5,6];
// let arr2=[...arr]//spread


//more value you pass parameter using rest operator catch one by one
// const sum=function(...number){
//     //for loop sum nikal sakte hai
//     console.log(number)
// }
// sum(1,2,4,6,4)
// sum(3,5,7,3,5,4,5,6,6)
// sum(2,7,8,9)



let obj={
    name:"pankaj",
    age:22,
    amount:232
}
//destructure
// const{name,amount}=obj
// console.log(name,amount)

// function fun(obj1){
//     console.log(obj1.name,obj1.amount)
// }
function fun(name,amount)//using destructure
{
     console.log(name,amount)
 }
fun(obj);




greet();
//if you create function in two types

//in this type function create you can acces function any where before function
function greet(){
    console.log("hello world")
}


//in this method create function only call after this function
let meet=function(){
    console.log("hello meet")
}
meet();