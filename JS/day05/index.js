let a=5
let b=a
b=30;
console.log(a)
console.log(b)
// primitive data type is immutable not chanfge every where


let obj1={
    id:30,
    pass:123,
}
let obj2=obj1
obj1.id=20
console.log(obj1)
console.log(obj2)
//non primitive data type changed every where if you changed value