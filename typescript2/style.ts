// //number
// let a:number = 23;
// let b:number = 34;  

// //string
// let str:string ="pankaj";

// //bolean
// let isexit:boolean = true;
// isexit =false;

// //big int
// // let bignu:bigint = 12334433432343n;

// //null
// let abc:null = null;
// let bcd:undefined =  undefined;
// //in this variable you can not assign any value f you asssign then 
// // show error 
//  let name:string = "pankaj shah"
//  let num:number = 23



//in this type script normal
let a = 23;
a = 20;//number store 
// a = "rohit" //string not store
//if one time you declare a variable in integer then
// thnn your compiler automatically create a variable that type



//if declare variabel but not assign after assing 
//its type is any any value assign
let other;//by default let other:any;
other = 23;
other = "name";
console.log(other.toUpperCase);


//in this also not declare type any value assinged
let name:unknown;
name = 23;
name = "rohit";

if(name === "string")
console.log(name.toUpperCase);


//non primitve 
//array

let arr:number[] = [2,4,1,5];
let arr2 = [4,6,7,8];//in array automaticaly declare and known about there type

let  arr3:(string | number)[] = ["name",3,"sohan",34];//if string and number are mix then also infer there type
let arr4 = ["name",53,"soh",34];

let arr5:(string | number | boolean)[]= ["name",true,45];
let arr6 = ["name",true,56];

//tuple fixed size array
let tuple:[string, number]  = ["pankaj" , 34]
let karm:[string,number,boolean] = ["name",34,true];

//object 
//inline declare
//in this object are also take type
let obj:{name:string,age:number,add:string} = {
    name : "pankaj",
    age: 34,
    add: "gautam nagar"
}

//its mandatory to fill all given ttpe
let person:{name:string,age:number};
person={
    name : "pankaj",
    age : 23,

}


//first define type and create object
type customer= {
    name:string,
    age:number,
    add:string,
}
let c1:customer ={
    name:"pankaj",
    age:56,
    add:"weew",
}


//using interface create object
interface acc{
    name:string,
    accc:number,
    add:string,
}
interface acc{
    id:number,
}
let objs:acc={
    name:"pankaj",
    accc:34,
    add:"sds",
    id:34,
}

