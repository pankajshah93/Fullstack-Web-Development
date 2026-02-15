document.body.addEventListener('click',(event)=>{

    const circle=document.createElement('div')
    circle.className='circle';
    // circle.classList.add('circle')
    circle.textContent="Hii";

        const X = event.clientX;
        const Y= event.clientY;
        // const X=event.pageX;
        // const Y=event.pageY;
    //    circle.style.position=' absolute';
        circle.style.left='${X-25X}px'
        circle.style.top='${Y-25Y}px'

        const color=["red","green","blue","white","purple","yellow","brown","gray"]
        circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)]

    document.body.appendChild(circle);

    setTimeout(()=>{
        circle.remove();

    },5000)
})