// let arr=[2,34,23,8,"rohit","pankaj",8,true]
// console.log(arr)//all element print 
// console.log(arr[0],arr[1])//only require element
// console.log(arr.at(4))//according to index
// // at is latest negative index is also accept
// console.log(arr.at(-1));
// console.log(arr.length)
//no of element is called length of array

// const newarr=arr;
// console.log(newarr==arr)//its give true is same address value


//helpfull structuredclone
//but change newarr adress clone of arr
// const newarr=structuredClone(arr);
// console.log(newarr==arr)//its give false is different  address value create clone of the same data element



// element push  in array add element at end
// arr.push(30);
// arr.push(50);
// console.log(arr)
// //pop last element of array delete element at end
// arr.pop();
// console.log(arr)



// //ushif,add element at start
// arr.unshift(10)
// arr.unshift(40)
// console.log(arr)
// //shift,delete element at start
// arr.shift()
// arr.shift()
// console.log(arr)


// //delete operation
// delete arr[0]
// console.log(arr)
// //this delete element create hole means not free space provide its always occupied




//index of
// console.log(arr)
// console.log(arr.indexOf(8))//if two element are same than first index is show
// console.log(arr.lastIndexOf(8))//last index of any number
// console.log(arr.includes(45))//check number is present or not


//slice original array can not be changed
// console.log(arr)
// a=arr.slice(2,5)
// console.log(a)
// console.log(arr)


//splice  strong element to use 
// console.log(arr)
// console.log(arr.splice(2,5))//removed element in original array
// console.log(arr)
//splice(starting_index,total element delete)
// arr.splice(2,3,"money",90)//delete at 2 index end add new element in 2 index
// arr.splice(2,0,"money",90)//whithout deleteting add new value in any position
// console.log(arr)


//bothe are convert to string
// console.log(arr.toString());
// console.log(arr.join("*"))//print any things between two  ummbers writes netween  double 



//concat add two array
// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8,9]
// let arr4=[12,3,4,33,23]
// // let arr3=arr1.concat(arr2,arr4)
// // console.log(arr3)

// arr1.push(arr4,arr2)
// console.log(arr1);//convert 2d array
// console.log(arr1[5][0]);







//1d array [2,5,6,9]
//2d array  [[2,5,6,9],[1,3,5,6]] array inside one array
//3d array  [[2,5,6,[3,5,6]],[5,7,4]] 2d array ke ander array

//create 2d array
let arr2d=[[2,3,4,2],[5,3,2,1],[3,9,9,7]]
// console.log(arr2d[0])
//     0 1 2 3
//  0 [2,3,4,2]
//  1 [5,3,2,1]
//  2 [3,9,9,7]
let arr3d=[[2,3,[3,5,4],2],[5,3,2,1],[3,9,9,7]]
// console.log(arr2d[0][2])
// console.log(arr2d[0][0])//first 0 is row and second is column
console.log(arr3d[0][2][0])




//convert into any dimentional to 1dimention then use flat() by 
// default there value is 1 you can increase or you do not know the dimention then write flat(Infinity) 


//convert3d to 1d
// console.log(arr3d.flat(2))
console.log(arr3d.flat(Infinity))


//convert 2d to 1d array
// let newarr=arr2d.flat()
// console.log(newarr)



//backend se kuch data aata hai usko janne ke liye ki vo array hai 
// nahi use this 
let abc=[2,4,5,3]
console.log(Array.isArray (abc))




//if single element then tell size of array and multiple element
// create an array 

let newmethodarray= new Array(5,4,56,7)
// let newmethodarray= new Array(5)
console.log(newmethodarray)
console.log(newmethodarray.length)
