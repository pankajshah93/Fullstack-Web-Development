// let obj={};

// obj.name="pankaj";
// //key value writable enumerable configurable
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// //writable = true you can change value
// obj.name="mohit";
// console.log(obj)
//configurable=true if this is true then you change writable and enumarable

// let obj = {};
// Object.defineProperties(obj, 'name', 
//     {
//         value:"rohit",
//        writable:true,
//         enumerable:true,
//         configurable:true,
//     })
//     //if configurable false then you can change any one
//     Object.defineProperty(obj,"name",
//         {
//             writable:false,
//         }
//     )
// console.log(obj);


const obj1={
    name:"pankaj",
    age:23,
    account_number:12345,
}

Object.defineProperty(obj1,'account_number',{
    writable:false,
})

obj1.account_number=20000;
console.log(obj1.account_number)


//in for in loop print inherit property but condion when enumerable false then you not 
// access the property

//defineproperties


// let user={
//     name:"pankaj",
//     age:23,

// }
// // console.log(Object.getOwnPropertyDescriptor(user,"name"))
// Object.defineProperty(user,'name',
//     {
//         writable:false,
//     }
// )
// //accidental change hone se bachne ke liye
// //kisi se galti se change mat ho jaye
// console.log(Object.getOwnPropertyDescriptor(user,"name"))
// user.name="mohit";