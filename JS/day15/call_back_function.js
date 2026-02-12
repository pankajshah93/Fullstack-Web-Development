//in all function give three value
//first value,index,arr

//call back function


// function name(account){
//     console.log("hello pankaj",account)
//     account();
// }
// const geet=function(){
//     console.log("I a call vback function")
// }
// function geet(){
//     console.log("I a call vback function")
// }
// name(4);
//  name(geet);//function ke ander ek or function bhej rahe hai as an argument
//call back function 


//this way you also call direct function write in argument place
// name(function geet(){
//     console.log("I a call vback function")
// });

//arrow function call
// name(()=>{
//     console.log("I a call vback function")
//  });

//name(geet);in this way you can not call direct geet function you only reference store in this funtion calling 





//if you want to execute function in many time in fix interval using 
// function fetchdata(){
//     //big amunt of data are present and after some time 
//     console.log("hello how are you")
// }
// setInterval(fetchdata,5000)//repeat this function  in given time





//forEach not store answer in another variable(kuch bhi return nahi karta hai)
// let re=[2,3,4,5]
// let resu=re.forEach((num)=>
// {
//     return num;
// })
// console.log(resu)
//for  not return value  its show undefined



// let arr=[10,20,30,40];


//single argument number
//second argument means index pass
//third argument array ko bhi pass

// num argument me store in one by one
//arr.foreach (call back function)
// arr.forEach(function(num)//function (num) is call back function
// {
//     console.log(num)
// })

//this type you also write
// function greet(num){
//     console.log(num)
// }
// arr.forEach(greet)//call back function as reference

// // using arrow
// arr.forEach((num) => console.log(num))
// arr.forEach((num,index) => console.log(num,index))//print index and values
// arr.forEach(num => console.log(num))//single argument no brakets need

//array pass in third argument and modify 
// arr.forEach((num,index,a) => //third argument is array
//     {
//     a[index]=num*2;
// });
// console.log(arr)




//filter work as forEach function
// let arr=[23,54,67,34]
// arr.filter((num)=>
//     const result=arr.filter((num)=>
// {
//     return num%2==0;
// })
//sortcut way write
//  const result=arr.filter((num)=> num%2==0)//bydefault this is return the true and false value and give answer
//filter only check condition and true ans false then result store 
// console.log(result)




//real life example using filter
// const obj=[
//     {name:"pankaj",age:23,marks:45},
//     {name:"ankit",age:23,marks:65},
//     {name:"amaan",age:23,marks:75},
//     {name:"naman",age:23,marks:85},
// ]
// const result=obj.filter((obj)=>{
//     return obj.marks>50;
// })
//in sort form
// const result=obj.filter((obj)=> obj.marks >50) pura object compare
// const result=obj.filter((value)=> value.marks >50)

// using destructure only one value compare
// const result=obj.filter(({marks})=>marks>50)//using this show same result

// console.log(result)





//map work as filter but using map modify result
// const arr=[1,5,6,3,2,8]
// const result=arr.map((num)=>{
//     return num*num;
// })
// const result=arr.map((num)=> num*num)
// console.log(result)

// const result=arr.filter((num)=>num%2==0).map((num)=>num*num).map((num)=>num/2)
// console.log(result) 






//reduce