//callback function
//in backend multiple times give data as obj form


//without callback function in this code you only print username
//if you want to print age then again write this function and call
// function fetchdata(name){
//     console.log("fetching the user details....")
//     setTimeout(()=>{
//         console.log("data fetched succesfully");
//         //data fetched from backend
//         //    const name="pankaj";
        //      const obj={
        //     name:"pankaj",
        //     age:22,
        // }
//         // greet("pankaj")
//         // callback(name)//using this callback function this code write once time
//         //use only argument pass
//     },2000)
// };

// function greet(obj){
//     console.log(`hello ${obj.name}`);
// }
//without callback problem
//if user all data you have
//perform many operations
//1:greet 2:meet 3:edit 4:age

//function ke ander dusre function ko bhejna as a argument is called callback funtion

function fetchdata(callback){
    console.log("fetching the user details....")
    setTimeout(()=>{
        console.log("data fetched succesfully");
        //data fetched from backend
        //    const name="pankaj";
        const obj={
            name:"pankaj",
            age:22,
        }
        callback(obj)//call back me jo value bhejoge vo print hoga
        // greet("pankaj")
        // callback(name)//using this callback function this code write once time
        //use only argument pass
    },2000)
};
// fetchdata();
// function greet(name){
//     console.log(`hello ${name}`);
// }
// function meet(name){
//     console.log(`hello ${name} i will meet you`)
// }

// function edit(name){
//     console.log(`edit name ${name} change`)
// }

function greet(obj){
    console.log(`hello ${obj.name}`);
}
function meet(obj){
    console.log(`hello ${obj.name} i will meet you`)
}

function edit(obj){
    console.log(`edit name ${obj.age} change`)
}

//user ko jo chahiye use vo call karke karsakta hai 
//multiple time use

//using callback code write once time 
fetchdata(greet);
fetchdata(meet);
fetchdata(edit);//multiple function call you can do