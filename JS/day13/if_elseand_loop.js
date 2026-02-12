//if else
// let age=23;

// if(age>=18){
//     console.log("eligible for voye");
// }
// else{
//     console.log("not eligible");
// }


//if else if
// let age=19;
// if(age<18){
//     console.log("kids")
// }
// else if(age>45){
//     console.log("old")
// }
// else{
//     console.log("young")
// }



//multiple condition switch
// let day= 10;
// switch(day){
//     case 0:
//     console.log("sunday");
//     break;
//     case 1:
//     console.log("monday")
//     break ;
//     case 2:
//         console.log("tuesday")
//         break;
//          case 3:
//         console.log("wednesday")
//         break;
//          case 4:
//         console.log("thursday")
//         break;
//          case 5:
//         console.log("friday")
//         break;
//          case 6:
//         console.log("saturday")
//         break;
//         default:
//             console.log("not valid day")
// }




//loop:baar bar print karvana

// for(let i=0;i<20;i++){
// console.log("hello pankaj shah")
// }

//sum of 10 natural no.
//js is slow compare to c++ bexause
// every time i and sum value  new space allocate so time increase
// let sum =0
// for(let i=1;i<=10;i++){
//     sum+=i;
// }
// console.log(sum)



//nested for loop
//12345
//12345
//12345
// for(let j=0;j<5;j++){
// for(let i=1;i<=5;i++){
//     console.log(i);
// }}


//while loop
// let i=1;
// while(i<6){
//     console.log(i);
//     i++;
// }


//do while loop




let arr=[6,2,3,4]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

const obj={
    name:"pankaj",
    city:"sur",
    age:12
}
// const a=Object.values(obj);
// console.log(a)
const keys=Object.keys(obj);
console.log(keys)
for(let i=0;i<keys.length;i++){
    // console.log(obj.name)
    console.log(obj[keys[i]])
}