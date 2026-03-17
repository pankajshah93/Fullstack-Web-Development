"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj = {
    name: "pankaj",
    age: 23,
    add: "gautam nagar",
};
let obj2 = {
    name: "pankaj",
    age: 23,
    add: "gautam nagar",
};
// using partial all vraible become a optional 
// if not fill then not show error
// 1.partial (optional)
// 2.required(mandatory)
// 3.readonly(you can only read this can not change after assign)
let acc = {
    name: "pankaj",
};
let acc2 = {
    name: "pankaj",
    age: 34,
    add: "nagar"
};
let acc3 = {
    name: "pankaj",
    age: 98,
    add: "janah"
};
;
let arr4 = [{ name: "pankaj", age: 34 }, { id: 23, token: 12 }];
let obj5 = {
    position: "manager",
    salary: 233,
    name: "pankaj",
    age: 23,
    add: "age"
};
let coll = {
    name: "pankaj",
    age: 32,
    salry: 234,
    id: 23,
    add: "gautam",
};
//function in ts
// function meet(a){
//     console.log(a);
//     return a+5;
// }
// if you not mention type of parameter then its automatically take any  so mention there type 
function meet(a) {
    console.log(a);
    return a + 5;
}
// in this function return as number return sonmting also give there type
meet(5);
// function geet(msg:string,val:number){
//     console.log(msg,val);
// }
// geet("pankaj",23);
// this function not return then its type is void
function geet1(msg, val) {
    console.log(msg, val);
}
geet1("pankaj", 23);
// funtions parameter
function neet(s = "name") {
    console.log(s);
}
// neet();//in this print name if not pass value default parameter
neet("pankaj"); //any word pass and  then its print
//optional parameter
function git(s) {
    console.log(s || "mohan");
}
git();
git("pankaj");
//arrow funtion 
const sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 6));
// function placeholder(order:number,callback:(amount:number)=>void){
//     const amount:number = order+20;
//     callback(amount);
// }
// placeholder(10,(amount)=>{
//     console.log(amount);
// })
function placeholder(order, callback) {
    const amount = order + 20;
    callback(amount);
}
placeholder(10, (amount) => {
    console.log(amount);
});
//rest parameter
function tota(...arr) {
    let ans = 0;
    arr.forEach((val) => ans + val);
    console.log(ans);
}
tota(23, 4, 3, 52);
//# sourceMappingURL=secind.js.map