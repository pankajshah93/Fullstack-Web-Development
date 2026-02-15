// console.log("hello")
// function greet(){
//     console.log("call greet function")
// }
// function meet(){
//     console.log("call meet function")
//     greet();
//     console.log("after  greet");
// }
// meet();
// console.log("end");

//all execute in call stack 
//1 GEC global excution context //all code in gec
//firt run hello 
//after that function so call function first execute meet
//and then greet call after greet then print after greet



//WEB API 
// console.log("HELLO GOOD evening")

// setTimeout(()=>{
//     const a=2+4;
//     console.log(a);
// },5000)//this is goes to callback query and then stack query 

// let b=20;
// let arr=[2,3,4];
// for(let i of arr){
//     console.log(i*b);
// }
// HELLO GOOD evening
// 40
// 60
// 80
// 6
//Web Api this present in browser
//settimeout ,setinterval,fetch dom ,console



setTimeout(()=>{
    const a=2+4;
    console.log(a);
},5000)
setInterval(()=>{
    console.log("i am fast")
},2000)
let b=20;
let arr=[2,3,4];
for(let i of arr){
    console.log(i*b);
}
//microtask queue  isko first priority milti hai(iskeander jate hai promises)
// after call back queue
