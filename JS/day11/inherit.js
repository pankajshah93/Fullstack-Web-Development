let user1={
    name:"mohit",
    age:20,
}
let user2={
    amount:20,
    money:50,
};
//all property of user1 is inherit to user2
// user2.__proto__=user1;
//object.prototype(tostring to value)
// console.log(user2.name)
let arr = [1,2,3,4];
//proto type chaining
console.log(arr.__proto__== Array.prototype)
console.log(arr.__proto__.__proto__== Object.prototype)
console.log(arr.__proto__.__proto__.__proto__== null)

// Array. prototype,