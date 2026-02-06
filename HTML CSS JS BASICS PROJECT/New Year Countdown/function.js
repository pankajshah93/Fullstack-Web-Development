const dayE=document.getElementById('day')
const hourE=document.getElementById('hour')
const minuteE=document.getElementById('minute')
const secondE=document.getElementById('second')

const newyeartime=new Date("jan 1,2027 00:00:00").getTime();
updatecountdown()

function updatecountdown(){
    const now =new Date().getTime();
    // console.log(now,newyeardate)
    const gap= newyeartime-now;
    // console.log(gap)
    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;
    const d=Math.floor(gap/day)
    const h=Math.floor((gap%day)/hour);
    const m=Math.floor((gap%hour)/minute);
    const s=Math.floor((gap%minute)/second);
    dayE.innerText=d;
    hourE.innerText=h;
    minuteE.innerText=m;
    secondE.innerText=s;
    setTimeout(updatecountdown,1000)
    // console.log(d,h)
}