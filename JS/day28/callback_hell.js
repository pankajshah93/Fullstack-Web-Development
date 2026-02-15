//call back hell

//see the example order dominos pizza

//cALLBACK WORK
// callback= ()=>{
//     pizzapreparation();
// })
// callback(); call the next function

function placeorder(callback){
    console.log("talking with dominos");
    setTimeout(()=>{
        console.log("order placed successfully")
        callback();
    },2000)
}
// placeorder();
function pizzapreparation(callback){
    console.log("pizza is preparing");
    setTimeout(()=>{
        console.log("pizza is ready")
  //      pickuporder(); this is hardcode not  use many times
        callback();
    },5000)
}
// pizzapreparation();

function pickuporder(callback){
    console.log("reaching restro pickup order the order  by delivery boy")
    setTimeout(()=>{
        console.log("order pickup succesfully")
        callback();
    },3000)
}
function deliverorder(){
    console.log("on the way ")
    setTimeout(()=>{
        console.log("order delivered")
    },5000)
}
// placeorder();
// pizzapreparation();
//this two funtion call then work both first call
//but i want to execute first action is complete then execute second
// talking with dominos
// pizza is preparing
// order placed successfully
// pizza is ready

//using call back hell
// placeorder(pizzapreparation); in this writen as aero funtion 
placeorder(()=>{
    pizzapreparation(()=>{
        pickuporder(()=>{
            deliverorder();
        });
    });
})
//this is called call back hell

