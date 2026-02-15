// const red=document.getElementById('red')
// const blue=document.getElementById('blue')
// const orange=document.getElementById('orange')
// const green=document.getElementById('green')
// const purple=document.getElementById('purple')

// //access body
// const body=document.body;
// // document.querySelector('body')

// red.addEventListener('click',()=>
// {
//     body.style.backgroundColor='red'
// })
// blue.addEventListener('click',()=>
// {
//     body.style.backgroundColor='blue'
// })
// orange.addEventListener('click',()=>
// {
//     body.style.backgroundColor='orange'
// })
// green.addEventListener('click',()=>
// {
//     body.style.backgroundColor='green'
// })
// purple.addEventListener('click',()=>
// {
//     body.style.backgroundColor='purple'
// })



// const button=document.querySelectorAll('button')//acces all button
// const body=document.body;
// //for ek ek karke sare button ka acces mil gaya
// button.forEach((button)=>{
//     console.log(button)
//     // button.addEventListener('click',(event)=>{
//         button.addEventListener('click',()=>{
//         // console,log(event.target)
//         // console.log(button.id)
//         body.style.backgroundColor=button.id;
//     })

// })


//event bubling concept used


const root=document.getElementById('root');

root.addEventListener('click',(event)=>{
    if(event.target.tagName==='BUTTON'){   
         document.body.style.backgroundColor=event.target.id;}
    // console.log(event.target.id);
})