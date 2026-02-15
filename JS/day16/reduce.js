//reduce
//reduce means you want to obtain final result in array 
//single value me its can be object number value  array ke form me data ha
// const arr=[10,20,30,40]

//const result=arr.reduce(call back function,initialization)
// const result =arr.reduce((acc,curr)=>{ //curr(current ke ander arr ki value jayegi ek ek karke)
//     console.log(acc,curr);
//     acc=acc+curr;//acc ke ander intialy 0 hota hai 
//     return acc;
// },0)
// //in sortcut
// const result =arr.reduce((acc,curr)=>acc+curr,0)
// console.log(result)
// //acc curr
// 0 10 
// 10 20
// 30 30
//result
// 60


//example

let arr=["orange","grapes","bananan","orange","grapes","bananan","grapes"]
//final result ek object ke form 
//orange 2;
//grapes=3;
//banan=2
//acc={}
// orange :1
//acc["orange"]
// acc[curr]

// const result= arr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr))
//         acc[curr]++;
//     else
//         acc[curr]=1;
//     return acc;
// },{})

//same code in sort form
const result= arr.reduce((acc,curr)=>{
    acc.hasOwnProperty(curr)? acc[curr]++ : acc[curr]=1;

     return acc;
 },{orange:1})//{}in this place you also initialize value
//intial value give in this bracket

console.log(result)
// first is not present then create and then increase
//orange:1 first value
//grapes:1
// bananan:1;
// after that its presennt in own prperty and then increase
