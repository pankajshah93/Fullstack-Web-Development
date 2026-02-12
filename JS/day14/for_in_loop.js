//for in l;oop isko array ke sath nahi lete hai
//arr is object
// 0:10
// 1:20
// 2:34
// name:pankaj
// arr store as index as integer but its also accesiblr so not use for in loop
const arr=[10,20,34];
arr.name="pankaj";
for(let key in arr){
    console.log(key,arr[key]);
}
//for in loop only if enumerator true then see key and value and print

//normal loop is print only index value 
for(let index=0;index<arr.length;index++){
    console.log(index,arr[index])
}