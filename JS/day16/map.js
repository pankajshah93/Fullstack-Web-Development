 //key value pair:key should be uniqe
//  const map1=new Map();
//  map1.set(3,90);
//  map1.set("rohit",23);
//  map1.set(20,"mohit");
//  //key value is first element
//  map1.set("rohit",20);//second time you give value then its update the value
//  console.log(map1)

//  map1.delete(3);
// console.log( map1.has("rohit"))//if rohit is present then give true
//  console.log(map1)
//  console.log(map1.size);


//map creating in this type  as 2d array
// const map1=new Map([
//     [4,"pankaj"],
//     ["mohan","rohan"],
//     [30,9],


// ]);
const map1=new Map([[4,"pankaj"], ["mohan","rohan"],[30,9],]);

console.log(map1)


//iterate 
//for of loop
// for(let value of map1 )
//     console.log(value)
// //using destructure key and value print
// for(let [key,value] of map1 )
//     console.log(key,value)


//object :
//keys: string or symbol
//maps:
//keys:number ,string,object


//foreach
map1.forEach((value,key)=>(console.log(value,key)))