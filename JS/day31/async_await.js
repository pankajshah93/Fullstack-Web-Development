//promise ke sath async await ko  use kar sakte hai
//await is always use in async function

//async always return promise if formt do not specify format
async function anyone(){
    return "hello baccho";
    //not return then undefined show
}
anyone().then((value)=>console.log(value))

// const cart=["pizza","coffee","samosa"];
// function placeorder(cart){
//     console.log("talking with dominos");

//     const pr=new Promise(function(resolve,reject){
        
//         setTimeout(()=>{
//             const foodavailable=true;
//             if(foodavailable){
//         console.log("order placed successfully")
//         const order={orderid:221,food:cart,reastaurant:"Dominos",location:"bhilai"};
//        resolve(order);
//             }else{
//                 reject("items is not available")
//             }
//     },2000)
//     })
//     return pr;
// }
// // placeorder();
// function pizzapreparation(order){
//     console.log("pizza is preparing");
//     const pr=new Promise(function(resolve,reject){
//  setTimeout(()=>{
//         console.log("pizza is ready")
//         const fooddetails={token:12,reastaurant:order.reastaurant,location:order.location}
//   //      pickuporder(); this is hardcode not  use many times
//         resolve(fooddetails);
//     },5000)
// })
// return pr;
   
// }
// // pizzapreparation();

// function pickuporder(fooddetails){
//     console.log("reaching restro pickup order the order  by delivery boy")
//     const pr=new Promise(function(resolve,reject){
//          setTimeout(()=>{
//         console.log("order pickup succesfully")
//         const droplocation=fooddetails.location;
//         resolve(droplocation);
//     },3000)
// })
// return pr;
// }

   
// function deliverorder(droplocation){
//     console.log("on the way ")
//     setTimeout(()=>{
//         console.log("order delivered")
//     },5000)
// }

// //AWAIT ko direct use nahi kar sake isko async type ke function me dalna hoga 

// // const order = await placeorder(cart)//its give order //jab tak order me value nahi jayegin r=tab tak wait karenga
// // const fooddetails= await pizzapreparation(order);
// // const droplocation= await pickuporder(fooddetails);
// // deliverorder(droplocation);


// async function meet(){
//     const order = await placeorder(cart)//its give order //jab tak order me value nahi jayegin r=tab tak wait karenga
//      const fooddetails= await pizzapreparation(order);
//     const droplocation= await pickuporder(fooddetails);
// deliverorder(droplocation);
// }
// meet();

// placeorder(cart)
// .then(order=>pizzapreparation(order))
// .then(fooddetails=>pickuporder(fooddetails))
// .then(droplocation=>deliverorder(droplocation))
// .catch(error=>console.log(error))




//outside both are syncronus run

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello every first");
//     },8000)
// })
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello every second");
//     },5000)
// })

// console.log(pr)
// pr.then((Response)=>console.log(Response));//same method use async
// async function ex(){
//     const asc= await p1;
//     console.log(asc);
//     const asc2=await p2;
//     console.log(asc2);
// }
// ex();
//but in promise  use first kam time resolve and print afet more time
// p1.then((response)=>console.log(response))
// p2.then((anhy)=>console.log(anhy));

//binding into function
// function greet(){

//     const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello every first");
//     },8000)
// })
// return p1;
// }
// function greet2(){
//     const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello every second");
//     },5000)
// })
// return p2;
// }
// async function ex(){
//     const asc= await greet();
//     console.log(asc);
//     const asc2=await greet2();
//     console.log(asc2);
// }
// ex();