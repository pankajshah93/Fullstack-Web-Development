// const cart=["pizza","coffee","samosa"];
// function placeorder(Cart,callback){
//     console.log("talking with dominos");
//     setTimeout(()=>{
//         console.log("order placed successfully")
//         const order={orderid:221,food:cart,reastaurant:"Dominos",location:"bhilai"};
//         callback(order);
//     },2000)
// }
// // placeorder();
// function pizzapreparation(order,callback){
//     console.log("pizza is preparing");
//     setTimeout(()=>{
//         console.log("pizza is ready")
//         const fooddetails={token:12,reastaurant:order.reastaurant,location:order.location}
//   //      pickuporder(); this is hardcode not  use many times
//         callback(fooddetails);
//     },5000)
// }
// // pizzapreparation();

// function pickuporder(fooddetails,callback){
//     console.log("reaching restro pickup order the order  by delivery boy")
//     setTimeout(()=>{
//         console.log("order pickup succesfully")
//         const droplocation=fooddetails.location;
//         callback(droplocation);
//     },3000)
// }
// function deliverorder(droplocation){
//     console.log("on the way ")
//     setTimeout(()=>{
//         console.log("order delivered")
//     },5000)
// }
// placeorder(cart,(order)=>{
//     pizzapreparation(order,(fooddetails)=>{
//         pickuporder(fooddetails,(droplocation)=>{
//             deliverorder();
//         });
//     });
// })

// placeorder(cart)
// pizzapreparation(order)
// pickuporder(fooddetails)
// deliverorder(droplocation);
//without callback using promises;
// const prom=placeorder(cart);
// prom.then((order)=>{
//     pizzapreparation(order)
// })


//using promises not use callback 
const cart=["pizza","coffee","samosa"];
function placeorder(cart){
    console.log("talking with dominos");

    const pr=new Promise(function(resolve,reject){
        
        setTimeout(()=>{
            const foodavailable=false;
            if(foodavailable){
        console.log("order placed successfully")
        const order={orderid:221,food:cart,reastaurant:"Dominos",location:"bhilai"};
       resolve(order);
            }else{
                reject("items is not available")
            }
    },2000)
    })
    return pr;
}
// placeorder();
function pizzapreparation(order){
    console.log("pizza is preparing");
    const pr=new Promise(function(resolve,reject){
 setTimeout(()=>{
        console.log("pizza is ready")
        const fooddetails={token:12,reastaurant:order.reastaurant,location:order.location}
  //      pickuporder(); this is hardcode not  use many times
        resolve(fooddetails);
    },5000)
})
return pr;
   
}
// pizzapreparation();

function pickuporder(fooddetails,callback){
    console.log("reaching restro pickup order the order  by delivery boy")
    const pr=new Promise(function(resolve,reject){
         setTimeout(()=>{
        console.log("order pickup succesfully")
        const droplocation=fooddetails.location;
        callback(droplocation);
    },3000)
})
return pr;
}

   
function deliverorder(droplocation){
    console.log("on the way ")
    setTimeout(()=>{
        console.log("order delivered")
    },5000)
}
placeorder(cart)
.then(order=>pizzapreparation(order))
.then(fooddetails=>pickuporder(fooddetails))
.then(droplocation=>deliverorder(droplocation))
.catch(error=>console.log(error))





//crfeating promise
// const pr=new Promise(function(resolve,reject){

// })
// return pr;