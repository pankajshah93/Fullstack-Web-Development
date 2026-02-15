//add event listner print o x
let turn ='O';

let total_turn=0;

let winner=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],
    [1,4,7],[2,5,8],[0,4,8],[2,4,6]
]



let board_array =new Array(9).fill("E");//initialy all are empty
//  0,  1   2   3   4   5   6   7   8
//["E","E","E","E","E","E","E","E","E"]

function checkwinner(){
    // for(let i of winner){
    //     console.log(i);
    // }
    for(let [index0,index1,index2] of winner)
    {
        if(board_array[index0]!="E"&&board_array[index0]===board_array[index1]&&board_array[index1]===board_array[index2])
            return 1;
    }
    return 0;
}
const printer=(event)=>{
  const element=event.target;
    // element.innerHTML="O";
//if board is empty
    if(board_array[element.id]=="E"){

        total_turn++;

    if(turn ==='O'){
        element.innerHTML="O";
        //board_array me bhi O enter ho gaya
        board_array[element.id]="O";

        if(checkwinner()){
            document.getElementById('winnigmessage').innerHTML="winner is O"
            board.removeEventListener('click',printer)
            return;
        }
        turn ="X";

    }
    else{
                element.innerHTML="X";
            board_array[element.id]="X";
            if(checkwinner()){
            document.getElementById('winnigmessage').innerHTML="winner is X"
            board.removeEventListener('click',printer)
            return;

        }
        turn ="O";
    }
    if(total_turn===9){
         document.getElementById('winnigmessage').innerHTML="Match draw"
    }
}
}

// board.removeEventListener('click',callbackfunction)

const  board=document.querySelector('.board');
board.addEventListener('click',printer)

const restart=document.getElementById('Restartbutton')
restart.addEventListener('click',()=>
{
   const cell= document.getElementsByClassName('cell');
    Array.from(cell).forEach((value)=>{
        value.innerHTML=" ";
    })
    let turn ='O';

let total_turn=0;
board_array =new Array(9).fill("E");
board.addEventListener('click',printer)

})


//home work project Rock paper scissor