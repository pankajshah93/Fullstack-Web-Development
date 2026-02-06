const btnE=document.getElementById('btn')
const bmiinpute=document.getElementById('BMI-calculate')
const span=document.getElementById('weight-condition')

function calculatebmi(){
    // console.log("clicked")
    const heightvalue=document.getElementById("Height").value/100
    const weightvalue=document.getElementById("weight").value
    const bmivalue=weightvalue/(heightvalue*heightvalue)
    bmiinpute.value=bmivalue
    if(bmivalue<18.5){
        span.innerText="Under weight"
    }else if(bmivalue>=18 && bmivalue<=24.9){
        span.innerText="normal weight"
    }
    else if(bmivalue>=25 && bmivalue<=29.9){
        span.innerText="over weight"
    }
    else if(bmivalue>=30){
        span.innerText="obesity";
    }
   
}

btnE.addEventListener('click',calculatebmi)