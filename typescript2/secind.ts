interface person{
    name:string,
    age:number,
    add:string
}
let obj:person = {
    name:"pankaj",
    age:23,
    add:"gautam nagar",
}

interface person{
    name:string,
    age:number,
    add:string
    addhar?:number
}
let obj2:person = {
    name:"pankaj",
    age:23,
    add:"gautam nagar",
}


interface customer{
    name:string,
    age:number,
    add:string
}
// using partial all vraible become a optional 
// if not fill then not show error
// 1.partial (optional)
// 2.required(mandatory)
// 3.readonly(you can only read this can not change after assign)
let acc:Partial<customer> = {
    name:"pankaj",
}
let acc2:Required<customer> = {
    name:"pankaj",
    age:34,
    add:"nagar"
}
let acc3:Readonly<customer> = {
    name:"pankaj",
    age:98,
    add:"janah"
}
// acc3.name  =  "kunal" in this can not assing 

//arr of object
// let arr = [{name:"pankaj",age:"76"}];

// let arr2:{name:string,age:number}[] = [{name:"pankaj", age:76}]

interface people {name:string,age:number};
// let arr3:people[] = [{name:"pankaj",age:34},{name:"kunal",age:43}]

interface guest{id:number,token:number}
let arr4 = [{name:"pankaj",age:34},{id:23,token:12}]


//extend keyword
interface person{
    name:string,
    age:number
}
interface human extends person{
    salry:number,
    id:number,
}
interface bankemployee extends person{
    position:string,
    salary:number
}
let obj5:bankemployee = {
    position:"manager",
    salary:233,
    name:"pankaj",
    age:23,
    add:"age"

}
let coll:human ={
    name: "pankaj",
    age: 32,
    salry: 234,
    id: 23,
    add: "gautam",
}




//function in ts

// function meet(a){
//     console.log(a);
//     return a+5;
// }
// if you not mention type of parameter then its automatically take any  so mention there type 
function meet(a:number):number{
    console.log(a);
    return a+5;
}
// in this function return as number return sonmting also give there type
meet(5);


// function geet(msg:string,val:number){
//     console.log(msg,val);
// }
// geet("pankaj",23);
// this function not return then its type is void

function geet1(msg:string,val:number):void{
    console.log(msg,val);
}
geet1("pankaj",23);


// funtions parameter
function neet(s:string = "name"){
    console.log(s);
}
// neet();//in this print name if not pass value default parameter
neet("pankaj");//any word pass and  then its print

//optional parameter

function git(s?:string){
    console.log(s||"mohan")
}
git();
git("pankaj");


//arrow funtion 

const sum = (a:number,b:number):number=>{
    return a+b;
}
console.log(sum(5,6));

// (amount)=>{
//     console.log(amount);
// })
// in this is callback function mention type

// (amount:number)=>void//place of this use type
type chill= (amount:number)=>void;

// function placeholder(order:number,callback:(amount:number)=>void){
//     const amount:number = order+20;
//     callback(amount);
// }
// placeholder(10,(amount)=>{
//     console.log(amount);
// })
function placeholder(order:number,callback:chill){
    const amount:number = order+20;
    callback(amount);
}
placeholder(10,(amount)=>{
    console.log(amount);
})



//rest parameter

function  tota(...arr:number[]){
    let ans:number = 0;
    arr.forEach((val:number) => ans+val)
        console.log(ans)
    
}
tota(23,4,3,52);

