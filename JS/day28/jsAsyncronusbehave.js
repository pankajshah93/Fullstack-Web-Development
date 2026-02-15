//javascript is single threaded synchronous language
// console.log("10");
// console.log("20");
// console.log("40");
//this all task execute line by line so its suncronus 


//js become a asyncronous 
// console.log("10");
//----this settimout is not js part its web api 
// setTimeout(()=>{
//     console.log("20")
// },2000)
// console.log("30");
// //in this code brhave as asyncronous because first execute 10 ,30 then after 20 



//single thread means one task executed at a time
//we can achive sam as timeout in this method
//this syncronous execute line by line
console.log("20")
const timer =Date.now();
//in timer older date present
while(Date.now()-timer<2000){
    //wait for 2 second
}
console.log("50")