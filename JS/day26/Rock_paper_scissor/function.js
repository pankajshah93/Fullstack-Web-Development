const turn=["paper","rock","ceissor"];

let winnerb=[
    [1,0],[2,1],[0,2]
]
let winnera=[
    [0,1],[1,2],[2,0]
]
let draw=[
    [1,1],[0,0],[2,2]
]

function checkwinner(){
    for(let [index0,index1] of winnera){
        
    }
}

const cell=document.querySelector('.board');

cell.addEventListener('click',(event)=>{
    // console.log(event.target.id);
const element=event.target;
// element.innerHTML="paper";
const choice=Math.floor(Math.random()*turn.length);
element.innerHTML=turn[choice];

})