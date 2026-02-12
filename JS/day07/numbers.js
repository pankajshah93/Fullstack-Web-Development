let num1=231;
// let num2=new String(231)//new is create a object is heap memory
// let num3=new String(231)
// console.log(num1)
// console.log(typeof num2)
// console.log(num1==num2)//true num1 is number type and num2 is object but it type convert to number and then compare
// console.log(num2==num3)//false beacause object are direct compare so there address not be same



// let num=231.56
// console.log(num.toFixed(1))//round of  number
// console.log(num.toPrecision(3))//kitne digit chahiye
// console.log(num.toExponential(2))//pont ke basd kitne digit chahiye
// console.log(typeof num.toString())//convert string
// console.log(num.valueOf())




//Math

// console.log(Math.E)
// console.log(Math.LN10)
// console.log(Math.PI)


//floor and ceil
// let num=23.32;
// console.log(Math.floor(num))//lowest value represent 

// console.log(Math.ceil(num))//largest value

// console.log(Math.floor(Math.random()*10))
// //0<=value<1 only give 0.000 to 0.9999
// //0-9 generate randam value in 0-9


// //1-10 genrate
// console.log(Math.floor(Math.random()*10)+1)


// //11-20
// console.log(Math.floor(Math.random()*10)+11)


// //min =40 ,max=50
// console.log(Math.floor(Math.random()*(max-min+1)+min));


//0-10
// console.log(Math.floor(Math.random()*11))

//1-11
// console.log(Math.floor(Math.random()*11+1))
 
//30-40
console.log(Math.floor(Math.random()*(40-30+1)+30))



//1-6
console.log(Math.floor(Math.random()*(6-1+1)+1))

//random is not used for otp beacause its predictable in system clock 