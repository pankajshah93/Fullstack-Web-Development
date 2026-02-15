//this check its present or not its give true and false
let obj={
    name:"pankaj",
    age:23,
    orange:1,
}
// const result=obj.hasOwnProperty("name")
// console.log(result)

// let curr="name"
// console.log(obj.hasOwnProperty(curr))

// let curr="orange";
//obj["orange"]++
// if(obj.hasOwnProperty(curr))
//     obj[curr]++;
// console.log(obj)

//if element is not present in object
let curr="apple"
// obj.apple=1
// obj["apple"]=1
// pbj[curr]=1;
if(obj.hasOwnProperty(curr))//if element is not present then  else part work 
    obj[curr]++;
else
    obj[curr]=1;//isse apple me one ho jayega
console.log(obj)