//comparison oprerator always answer gives true and false
//number to number
// let a1 = 1
// let a2 = 2
// console.log(a1==a2)

// // == both equal to
// // < less than .> greater then
// // <= less than equal to .>= greather than equal to

// let num =10
// let str="10" //int this case both are different data type but compiler convert same type and then compare
// //result is true type converyion hoga string to number
// //type convertion string to number ho=i hoga
// console.log(num==str)


// // ==== type check,then compare value
// console.log(num===str)
 



//null  ==  undefined //true
// null ===  undefined // false 
// null undefined kisi ke sath bhi equal nahi honge
// console.log(null==undefined)
// console.log(null===undefined)



// console.log(null==0) //rull defined only equal to undefined
// console.log(null>0) // type convertion null = to 0 then its false
// console.log(null<0)// type convertion null = to 0 then its false
// console.log(null<=0)// type convertion null = to 0 then its true
// console.log(null>=0)// type convertion null = to 0 then its true



// console.log(undefined==0); //rull defined only equal to undefined
// console.log(undefined>0) ;// type convertion null = to 0 then its false
// console.log(undefined<0);// type convertion null = to 0 then its false
// console.log(undefined<=0);// type convertion null = to 0 then its true
// console.log(undefined>=0);// type convertion null = to 0 then its true

// console.log(NaN==NaN)

// let a3="mohan"
// let a4="sohan"
// console.log(Number(a3))//NaN not a number
// console.log(Number(a3) == Number(a4))

// let abc1=123
// let abc2="123"
// let abc3=123//true
// console.log(abc1==abc2==abc3)//first two compare and give true then true is not equal to 123

// console.log(undefined!=null)
// console.log(undefined===null)
// console.log(undefined!==null)




//logical operator 

//&& || ! 
let age = 14
let money =400
console.log(age>=1&&money>200)
console.log(age>10||money>600)
console.log(!(age>10))



//bitwise operator
console.log(4&5)
console.log(4|5)
console.log(4^5)
console.log(5<<3)
//5 multiply by 2 kipower 3
//101.000000 left shift 3 bit then become 40
console.log(20>>3)
// right shift ,20 divided by 2 ki power 3
10100.0000