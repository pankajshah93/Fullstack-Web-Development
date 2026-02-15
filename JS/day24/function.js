const form=document.querySelector('form')

// form.addEventListener('click',(event)=>{
//     // console.log(event.target.id) in this place you want to value 
//     //then
//     //if you enter value click on input box then value enter
//     //if 
//     console.log(event.target.value)
// })
// form.addEventListener('change',(event)=>{
//     //in this if you change input box then value is enter
//  console.log(event.target.value)
// })

// form.addEventListener('focusin',(event)=>{
//     //in this focus enter the value after that you click then its show value
//     console.log(event.target.value)
// })

// form.addEventListener('submit',(event)=>{
//     //using this form is submitted
//     console.log("form submitted")
// })

// form.addEventListener('reset',()=>{
//     //using this form is submitted
//     console.log("form Reset")
// })


form.addEventListener('submit' ,(event)=>{

    event.preventDefault();
    //refersh karne se rokta hai
    //prevent default is not then page automatialy refresh 
    //is goping to backend  its showing in browser do this 

    // const first=document.getElementById("first");
    // console.log(first.value);

    // const second=document.getElementById("second");
    // console.log(second.value);

    //    const third=document.getElementById("third");
    // console.log(third.value);
    
    //if give multipal input form and then take input then write this command 
    //reapetly so this problem can be solve by 
    //there are lots of input box present

    // const data=new FormData(form)
    // console.log(data);//this is formdata present in key and value form
    // const data=new FormData(form)
    // console.log(data.keys());//using this form iterator in  this form data

    // const data=new FormData(form)
    // console.log(Array.from(data.keys()));//its array form
    // console.log(Array.from(data.values()));

    // const data=new FormData(form)
    // for(let key of data.keys())
    //     console.log(key)//this is acces the keys
    // const data=new FormData(form)
    // for(let key of data.entries())
    //     console.log(key)//this enteries retriw both value as key and value form array firm
    
    const data=new FormData(form)
    for(let [key,value] of data.entries())//in this line destruct the values of data
        console.log(key,value)


    //in data value present in key and value form

//     const result=document.getElementById('result');
//    result.innerText = `${first.value} ${second.value} is a good boy`;

//     document.append(result);
})

