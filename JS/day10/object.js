// let obj={
//     id:101,//id is key and 101 is value
//            //id store in backend string format "id"
//     0:20,//number store as string
//     name:"pankaj",
//     account_number:2324,
//     "account number":212313,//space rahe bitch me to string format liko
//     //and string format me hi print hoga 
// }
// console.log(obj)
// console.log(typeof obj)
// console.log(obj.name)
// console.log(obj.id)//without space both method
// console.log(obj["name"])
// console.log(obj["account_number"])
// console.log(obj["account number"])
// console.log(obj["0"])
// console.log(obj)




// const obj={
//     0:1,
//     1:2,
//     2:3,
// }
// console.log(obj)

// let arr=new Array(1,2,3,4,6)
// // let arr=[2,3,4,5]
// console.log(arr)
// console.log(arr.length)//whitout using function braket 
// console.log(arr[0])
// //in array store as object 
// //key :value
// // const arr={
// //   0:1
// //   1:2
// //   2:3
// //   3:4
// //   4:5
// //   5:6
//     // length:5
// // }

// //array implementation as object both are access
// console.log(arr[0],obj[0])


// const obj2={
//     undefined:2121,//key value is not variable name its string so you can take ab=ny value
//     null:"dsada",
// }
// //null also accesible
// console.log(obj2)
// console.log(obj2.undefined)
// console.log(obj2[undefined])
// console.log(obj2["undefined"])




//create object second method
// const person = new Object();
// //add value in object
// person.name="pankaj";
// person.age=12;
// person.gender="male";

// //delete details
// delete person.age;

// console.log(person)

// //update or modify
// person.name="rohit"//name is not exist then new create
// person.game="karm"
// console.log(person)






//third method to use object
// class people{
//     constructor(na,ag,gen){
//     this.name=na; //per1.name=na
//     this.age=ag;  //per1.age=age
//     this.gender=gen;
//     }

// }
// let per1=new people("pankaj",67,"male")
// console.log(per1)  









let obj={
    name:"pankaj",
    age:21,
    gender:"male",
}

//key and values print
// const arr=Object.keys(obj);
// const arrs=Object.values(obj);
// console.log(arrs)
// console.log(arr)

//keys:values
// const arr2=Object.entries(obj)
// console.log(arr2)






// //assign use combine two object
const obj1={a:1,b:2};
const obj2={c:3,d:4};
// const obj3=Object.assign({},obj1,obj2);
// // assign(target box{} and other source yahi isi box me combine karke show karna )
// console.log(obj3) 

//using spread operator yhree dot ...
const obj5={...obj1,...obj2};
console.log(obj5)