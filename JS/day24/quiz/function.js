// const originans=["sachin tendulkar","west indies","sachin tendulkar"]
//in this type show error if you are not selected show ans is 0

//so you can convrery into objects

const originans={
    q1:"sachin tendulkar",
    q2:"west indies",
    q3:"sachin tendulkar",
}

const form=document.querySelector('form');

form.addEventListener('submit',(event)=>{

    event.preventDefault();

    const data=new FormData(form);
    


    // const ans = Array.from(data.values());
    // let result=0;
    // for(let i=0;i<ans.length;i++)
    // {
    //     if(ans[i]===originans[i])
    //         result++;
    // }


    //using object
    let result =0;
    for(let {key,value} of data.entries())
    {
        if(value===originans[key])
            result++;
    }

    const out=document.getElementById('out');
    out.innerHTML=`${result} out of 3 is correct`;

    // document.getElementById('container').append(out);
    // console.log(result);
    form.reset();
})