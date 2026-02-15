//let arr=[10,20,30,10]
//set me unique value present
//multiple value me first value ko preference deta hai
// const set1= new Set([10,20,30,10])
// console.log(set1)

// const set2=new Set();
// set2.add(4);
// set2.add(2);
// set2.add("pankaj");

// set2.delete(4);
// console.log(set2)

//real life example of set uniqe ness
// set ke ander unique value hoti hai agar koi naya user come then use not existing Id
// if user id present is set then is not use
// const user_id=new Set(["pankaj_12","aman_12","kamal","sohan"])
// let new_user="pankaj_12";
// console.log(user_id.has(new_user))//has means is set ke ander pankaj_12 present hai ki nahi check karna 


// user_id.clear();
// console.log(user_id)




//backend se array ke form me data aa rhah hai to set me 
//convert karke uniqe element check

//array se duplicate element ko hatane ke liye use  and then convert array 
// let arr=[10,20,30,40,20]
// const set1=new  Set(arr);
// console.log(set1);
// //set ko array me convert after uniqe element
// arr=[...set1]//spread operator obtain value one by one
// console.log(arr);


//union of two set by uniqe value present
let set1= new Set([10,20,30,40]);
let set2=new Set([10,40,60,40,91]);

//union
// let set3=new Set([...set1,...set2]);
//let set3=new Set([10,20,30,40,10,40,60,70]);
// console.log(set3)



//intersection
//filter:array
//arr.filter(callbackfunction)
//[...set1 ] is convert to array because filter only work on array
// const result=   [...set1].filter((num)=>set2.has(num));
//after this result is an array so convert in set
// const result=  new Set( [...set1].filter((num)=>set2.has(num)));
// console.log(result)



//iterate over set
//for of loop iterator of set
// for(let value of set1)
//     console.log(value);
// for(let keys of set1)
//     console.log(keys);



//for each
//set name .foreach(call back function)
set1.forEach((value)=>console.log(value));