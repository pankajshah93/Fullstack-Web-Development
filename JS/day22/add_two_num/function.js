const button=document.querySelector('button');

//entering data is a string form first we convert into number
button.addEventListener('click',()=>{
    //read input data
    const input1=document.getElementById('first')
    const number1=Number(input1.value);

    const input2=document.getElementById('second')
    const number2=Number(input2.value);
    if(isNaN(number1)||isNaN(number2)){
        return ;
     }
    //and display the output
    const result=number1+number2;
    const res=document.getElementById('result');
    res.textContent="Result:"+result;
})

//bmi calculator 
//dhaej calculator
//alimony calculator