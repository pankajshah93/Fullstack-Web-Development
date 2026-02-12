//string creating method
// let str="hello pankaj"
// let str2='hello friends'
// let str3=`hello dosto`//modern method
// console.log(str,str2,str3)

// //if value change in backend then print so use backtick
// let price=80
// //use backtick for print let variable value
// console.log(`price of the ${price}`)//this is better way to write mainly used
// console.log("price of thid",price,"collect")//this is not effective


//string concatentaion
// let str1="hello"
// let str5="  guru";
// let str6=str1+str5
// console.log(str6)
// console.log(str6.length)
// // console.log(str1+str5)



//"this is my bag"
// console.log('"helo"')

// //'this is your bag'
// console.log("'this is your bag'")



//string next line property
// let str="hello dosto ,\n i am your friens you also \nmy friend"
// console.log(str)


//escape character \
//hello dosto ,\n i am your friens you (print same as then \\n)
// let str2="hello dosto ,\\n i am your friens you also \nmy friend"
// console.log(str2)



// //printing character in string
// let special="Oops"
// console.log(special[3])//string start at 0
// console.log(special.charAt(3))



//to lowercase
//to uppercase
//  console.log(special.toLowerCase())//original string can not be changed
//  //give new string
//  let strtemp=special.toLocaleUpperCase()
//  console.log(strtemp)//not changed origin string
//   console.log(special)




//   //special types property index wise
//   let hero = "hello coder guru coder"
//   console.log(hero.indexOf("coder"))
//   console.log(hero.lastIndexOf("coder"))
//     console.log(hero.indexOf("Coder"))//not present -1
//     console.log(hero.includes("Coder"))//check if present then true other wise false


    //slice of string print needed character
    let newstr = "hello this is my room"
                //01234
                //-5-4-3-2-1
    // console.log(newstr.slice(0,3));
    // console.log(newstr.slice(-4,4))//start index hamesa pehle hona chahiye end index ke
    //we can take negative index also in slice
    // console.log(newstr.substring(1,3))
    // let string1="dkskkf".substr
    console.log(newstr.substr(1,4))



    let str10="hello ji kaise ho"
    console.log(str10.replace("ji","money"))
        console.log(str10.replaceAll("ji","money"))//all ji are replaed




        let str11="money! honey! dhuni! gyana"//conver to array
        console.log(str11.split("! "))

    let str12="    hello sir"
    console.log(str12)
    console.log(str12.trim())//space removed from starting to end




    //new way to create string but its not used
    let lateststring=new String("hello coder army");
    console.log(lateststring)//typeof is object
