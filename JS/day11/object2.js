//copy object always use structure clone  different reference


// //shallow copy same address store
// const obj={
//     a:1,
//     b:2,
// }
// let obj2=obj;
// //shallow copy only adress copy 
// // if one value is changed in any object then both cahnged;
// obj2.a=12,
// console.log(obj2,obj)

// //deep copy different address structuredclone only changed cloned object
// let obj3=structuredClone(obj)
// obj3.a=20,
// console.log(obj3,obj)





// nested object
// const user ={
//     name:"Rohit",
//     balance:420,
//     adress:{
//         pincode:490023,
//         city:"bhilai",
//     }

// }
// //assign create deep copy of individual element and 
//shallow copy of nested element

//using assign nested object(pincode,city) changed when you copy 
//but name balance are not change if copy object changed
// console.log(user.adress.pincode)
// console.log(user.adress["pincode"])

// const user2=Object.assign({},user);
// console.log(user2);
// user2.adress.pincode=12345;
// user2.name="anil";
// console.log(user.adress.pincode)
// console.log(user.name)








//Destructuring of an Object

// const obj ={
//     name:"Rohit",
//     balance:420,
//     adress:"bhilai",
//     adhar:"2312312",
// }
// const {name,balance,adress}=obj;
// console.log(name, balance,adress);

// //wants to chasnged ther name 

// const {name:full_name,balance:account_bal,adress:full_adress}=obj;
// console.log(full_name,full_adress,account_bal)
// //chaned there name then this name was accesible


//rest of the element in obj1 
// const{name,age,...obj1}=obj;
// console.log(obj1)

// Array destructuring
// const arr=[2,5,3,6,5];
// const [first,second]=arr;
//not display the third element in array the make blank space
// const [first,second,,third]=arr;
//first two element and rest of the third me store 
// const[first,second,...third]=arr;
// console.log(first,second,third)

// //destructing nested objects
// let obj={
//     name:"pankaj",
//     age:20,
//     arr:[1,2,3,4,],
//     address:{
//         pincode:23213,
//         city:"dasdas",
//         state:"cg"
//     }        
// };
// const {name}=obj;
// console.log(name)
// const {address:adds}=obj;
// console.log(adds)
// const {address:{pincode,city,state}}=obj;
// console.log(pincode,state,city)

// //access array using destructur in objec
// const {arr:[first]}=obj
// //const [first]=arr2;
// console.log(first)



//object ke andar function
let user={
    name:"pnkaj",
    amount:10,
    geek:function(){
        console.log("pankaj shah")
    },
    meet: function(){
        return 20;
    }
}
user.geek();
console.log(user.meet());