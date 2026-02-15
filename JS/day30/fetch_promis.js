//async Task 
//weather api

//promise three state[ pending, resolve, reject] 

// const obj= fetch(`http://api.weatherapi.com/v1/current.json?key=38967ec038b749c3a0390806261402&q=London&aqi=yes`);
// this fetch operation  take some time so this obj print pending
//console.log(obj);//Promise { <pending> }
//using this time interval obj print but not know what time data execute
// setTimeout(()=>{
//     console.log(obj)
// },3000)

//formate to call this asycncronus fetch 
// obj.then((data)=>{
//     console.log(data);//its provide heeader part but we want to body part info part
// }).catch((error)=>{//if any error with api then show the error message
//     console.log(error);
// })

//this obj is promis 
//jab tak obj me value nahi aa jati tab tak run nahi karega 
//this is called promise

// obj.then((data)=>{
//     // console.log(data.json());//promise pending
//     const prom=data.json();
//     prom.then((data2)=>{
//     console.log(data2);
//     })
// })



// const prom=obj.then((data)=>{
//    return data.json();
// })
// prom.then((data2)=>{
//     console.log(data2)
// }) this code also writen as
// obj.then((data)=>{
//    return data.json();//return value direct catch and then execute
// }).then((data2)=>{
//     console.log(data2)
// })
// obj//promises shortcut to write this not need to write return above code sort way write
// .then(data=>data.json())
// .then(data2=>console.log(data2))

fetch(`http://api.weatherapi.com/v1/current.json?key=38967ec038b749c3a0390806261402&q=London&aqi=yes`)
// .then(data=>data.json())
// .then(data2=>console.log(data2))
// .catch(error=>console.log(error));//catch common for all
//in body section all are object and you acccess
.then(data=>data.json())
.then(data2=>console.log(data2.current.temp_f))
.catch(error=>console.log(error));