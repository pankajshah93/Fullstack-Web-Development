const quotes = [
  "The only true wisdom is in knowing you know nothing.",
  "Life is what happens when you're busy making other plans.",
  "The unexamined life is not worth living.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "The journey of a thousand miles begins with one step.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "I find that the harder I work, the more luck I seem to have.",
  "People say nothing is impossible, but I do nothing every day.",
  "The best way to predict your future is to create it.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "Everything is funny, as long as it's happening to somebody else.",
  "Not all those who wander are lost.",
  "To love or have loved, that is enough.",
  "Whatever our souls are made of, his and mine are the same.",
  "The only way out of the labyrinth of suffering is to forgive.",
  "Creativity takes courage."
];

// function generatequote(){
// const text = document.getElementById("quote");

// const index=Math.floor(Math.random()*quotes.length);
// text.textContent=quotes[index];
// }
// setInterval(generatequote,3000)



const color = [
  "rgb(255, 0, 0)",     // Red
  "rgb(0, 255, 0)",     // Green
  "rgb(0, 0, 255)",     // Blue
  "rgb(255, 255, 0)",   // Yellow
  "rgb(255, 0, 255)",   // Magenta
  "rgb(0, 255, 255)",   // Cyan
  "rgb(128, 0, 0)",     // Maroon
  "rgb(128, 128, 0)",   // Olive
  "rgb(0, 128, 0)",     // Dark Green
  "rgb(128, 0, 128)",   // Purple
  "rgb(0, 128, 128)",   // Teal
  "rgb(0, 0, 128)",     // Navy
  "rgb(255, 165, 0)",   // Orange
  "rgb(255, 192, 203)", // Pink
  "rgb(165, 42, 42)",   // Brown
  "rgb(128, 128, 128)", // Gray
  "rgb(240, 230, 140)", // Khaki
  "rgb(230, 230, 250)", // Lavender
  "rgb(255, 127, 80)",  // Coral
  "rgb(64, 224, 208)"   // Turquoise]
];
// function generatecolor(){
// const col=document.getElementById("two")
// const index2=Math.floor(Math.random()*color.length)
// col.style.backgroundColor=color[index2]
// }
// setInterval(generatecolor,2000);

const button=document.querySelector('button');
button.addEventListener('click',(event)=>{ //single click then chjange
console.log(event.target)
console.log(event.type)
console.log(event.clientX)//horizontal x position me kitne se touch kiya hai exact position deta hai
console.log(event.clientY)
//mouse ki exact position in x or y direction


//show in console kisse target hua hai event
// button.addEventListener('dblclick',()=>{ //double click
// button.addEventListener('mousemove',()=>{ //mouse move in over the button then change
// button.addEventListener('mouseover',()=>{      
  const text = document.getElementById("quote");

const index=Math.floor(Math.random()*quotes.length);
text.textContent=quotes[index];

})


//any key press then change the  quote 
// document.addEventListener('keydown',()=>{
// document.addEventListener('keyup',()=>{
// const text = document.getElementById("quote");

// const index=Math.floor(Math.random()*quotes.length);
// text.textContent=quotes[index];
// })


// document.addEventListener('keyup',(event)=>{
  // console.log(event.key)
 //set any key to change the click event this event.key give all information
//  about keyboard 
//   if(event.key==="Enter"){
// const text = document.getElementById("quote");

// const index=Math.floor(Math.random()*quotes.length);
// text.textContent=quotes[index];
//   }
// })