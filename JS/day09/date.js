// let d=new Date();//current time
// console.log(d)

// let D=new Date(1000);
// console.log(D)

// let e=new Date(156346436000);
// console.log(e)

//1 second == 1000 milisecond

//date is originally calculate milisecond and then convert time
//its calculate milisecnd in 1970-01-01 


// console.log(d.toDateString())
// console.log(d.toString())
// console.log(d.toISOString())
//its fetch time is in your system
// console.log(typeof d)



// console.log(d.getDate())
// console.log(d.getDay())
//sun mon tus wed thur fri sat sun
//0   1    2   3   4    5   6   7
// console.log(d.getMonth())
//jan/feb/march
//0  1   2
// console.log(d.getMilliseconds())
// console.log(d.getMinutes())


// console.log(d.getTime())//time in milisecond after 1-01-1970
// const now=Date.now();
// console.log(now)//milisecond



// const d=new Date("2022-10-20T10:10:00")
// //year/ month /date /hour /minute /second /milisecond
// let date=new Date(2024,4,25,10,12,45,123)
// console.log(d.toDateString())
// console.log(date.toString())



//set dete
// let  d=new Date();
// d.setDate(20)
// d.setMonth(3)
// d.setFullYear(2027)
// console.log(d)
// console.log(d.toDateString()) 
// console.log(d.toLocaleString())




//date calculation

// const date1=new Date();//curent date
// const date2=new Date("2025-04-21")

// console.log(date1-date2)//><
//difference in milisecond


//countdown timer for olympic
//days , hour , minute , second
const date1=new Date();
const date2=new Date("2028-09-14T00:00:00")
const date = date2-date1;
const days= Math.floor(date/(1000*60*60*24));
const hour=Math.floor((date/(1000*60*60))%24)
const minute=Math.floor((date/(1000*60))%60)
const second=Math.floor((date/(1000))%60)


console.log(days)
console.log(`countdown timerdays:${days} hour:${hour} minute:${minute} second:${second}`)
