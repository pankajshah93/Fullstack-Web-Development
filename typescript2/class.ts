class person{
    name:string;
    age:number;
    constructor(n1:string,n2:number){
        this.name = "n1";
        this.age = n2;
    }
    //in class function/method define 
    //in this not write ahead function 
    //function ko samne nahi likhte hai class me jab
    //function banate hai to
    meet():void{
        console.log(`hi ${this.name}`)
    } 
    //blueprint of object
}
//after that create obj multiple time create
const obj1 = new person("pankaj",23);
const obj2 = new person("brij",45);
console.log(obj2);
console.log(obj1);




//public private protected

//in  js only public 
//but in ts all are avilable
class customer{
    //by default public
   public name:string;
   private age:number;
   protected balance:number;
   //only child class access protected 

      constructor(name:string,age:number,balance:number){
        this.name = name;
        this.age = age;
        this.balance = balance;
      }
      //this function also set as public private protected
      //do not acces in outsinde
      geet():number{
        this.age = this.age + 10;
        return this.age;
      }
      meet():number{
        console.log("hello");
        return 10;
      }
}
const objs = new customer("pankaj",23,3455);
console.log(objs.name);
//using private any one can not change value outside the class
//using objs.name only change in class
console.log(objs.geet());
// console.log(objs.balance)


//in this class inherit the prperty of another class using extemd
class employee extends customer{
    salary:number;

    constructor(salary:number,name:string,age:number,balance:number){
        super(name,age,balance)
        this.salary = salary;
    }
    //another class can not acces private member
    // geet():number{
    //     this.age = this.age + 10;
    //     return this.age;
    //   }
    
    //but protected can be acces by another class 
    //member function
    geet():number{
        this.balance = this.balance + 10;
        return this.balance;
      }
       meet():number{
        console.log("hello");
        return 11;
      }

}

const p1  = new employee(234,"pankaj",23,456);
console.log(p1);
console.log(p1.meet());//function overloading so first meet run then after parent class






//generic template 
// Why use Generics

// reusable code

// type safety

// less duplicate code
// In TypeScript, Generics = write one template code that works with many types.

// function value(a:number|string|number[]|boolean){
//     return a;
// }
function value<t>(a:t):t{//this function become a generic
    return a;
}
//jaisa value bhejoge ous type se judge karega or lega
console.log(value(10));
console.log(value("pankaj"));
console.log([2,3,4,5])
console.log(true);
//if you write different type value then write every type and then write 
//using create generic template 



//interference use this generic template
// multiple template pass
interface aamadmi<t,u>{
    name:string;
    age:number;
    aadhar:t;
    salary:u;
}

//aadhar type decide in create object
//multiple template pass
const r1:aamadmi<number,number> = {
    name:"string",
    age:23,
    aadhar:23,
    salary:23
}
//if any one can store aadhar as dtring
const r2:aamadmi<string,number> = {
     name:"string",
    age:23,
    aadhar:"dsds",
    salary:23,
}


