//primitive data type and non primitive are changed
// if const use


// inprimitive not changed const value
const num=13;
// num=23;
console.log(num)



//in this non primitive data type changed their const value
//because only address store in stack
const obj={
    id:22
}
obj.id=23
console.log(obj)

let obj2={
    id:54
}
//location of obj2 is 800
//location obj is 6500
//adress can not changed
obj=obj2;
//error 