 const obj={
    name:"ankit",
    city:"agartala",
    gender:"male",
    age:12,
 };


 //for in loop,i can iterate over keys in an object

//  for(let key in obj)
//  {
//     console.log(key,obj[key])
//  }

// //object .keys(obj)
// console.log(Object.keys(obj))


let obj2=Object.create(obj);//obj inherit to obj2
obj2.money=12;
obj2.id=12;
// console.log(obj2)
// console.log(obj2.name)//acces first object
console.log(Object.keys(obj2))//only print obj2 key not print inherit keys

// using for in loop print inherit property also
for(let key in obj2){
    console.log(key)
}