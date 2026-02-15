const grandparent=document.getElementById('grandparent')
const parent=document.getElementById('parent')
const child=document.getElementById('child')


//event bubling and event capturnig

//in event lisstener three property are present in 
// /addEventListener(first_event,useCallback,capture)
//by default bublinng is work if capture us false then
//bubling is work

//by default this is false
// child.addEventListener('click',()=>{
//     console.log('child Clicked');
// },false)

// parent.addEventListener('click',()=>{
//     console.log('parent Clicked');
// },false)

// grandparent.addEventListener('click',()=>{
//     console.log('grandparent Clicked');
// },false)


// if this true then capture prperty  work
child.addEventListener('click',(event)=>{
    event.stopPropagation();//jaha lagate hain vahi tak bubling hogi
    // console.log('child Clicked');
    // console.log(event.target)//vo value jisne event ko target kiya hai
},false)

parent.addEventListener('click',(event)=>{
    console.log('parent Clicked');
        // console.log(event.currentTarget)//curenttarget se khud kon sa event hai vo pata chal jata hai

},false)

grandparent.addEventListener('click',()=>{
    console.log('grandparent Clicked');
},false)

