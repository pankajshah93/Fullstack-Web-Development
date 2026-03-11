function greet(){

    const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello every first");
    },8000)
})
return p1;
}
function greet2(){
    const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello every second");
    },5000)
})
return p2;
}
//error handle using try 
// async function ex(){
//     try{
//     console.log("hello jo")
//     const asc= await greet();
//     console.log(asc);
//     const asc2=await greet2();
//     console.log(asc2);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
//if you want to run parallel then do this create array

async function ex(){
    try{
    console.log("hello jo")
    const [asc,asc2]= await Promise.all([greet(),greet2()]);//in this both output come together if time difference then max time take
    console.log(asc);
    console.log(asc2);
    }
    catch(error){
        console.log(error);
    }
}
ex();
// console.log("hello i am good");
// console.log("after first line");