function timing(){
    const time=document.getElementById("beat");
        const time2=document.getElementById("beat2");
            const time3=document.getElementById("beat3");
                const time4=document.getElementById("beat4");

const date1=new Date();
const date2=new Date("2028-09-14T00:00:00")
const date = date2-date1;
const days= Math.floor(date/(1000*60*60*24));
const hour=Math.floor((date/(1000*60*60))%24)
const minute=Math.floor((date/(1000*60))%60)
const second=Math.floor((date/(1000))%60)
time.innerHTML=days;
time2.innerHTML=hour;
time3.innerHTML=minute;
time4.innerHTML=second;


}
setInterval(timing,1000)

 const time=document.getElementById("beat");
 const time2=document.getElementById("beat2");
 const time3=document.getElementById("beat3");
const time4=document.getElementById("beat4");
const display=document.getElementById("all");


const date1=new Date();
const date2=new Date("2028-09-14T00:00:00")
const date = date2-date1;
const days= Math.floor(date/(1000*60*60*24));
const hour=Math.floor((date/(1000*60*60))%24)
const minute=Math.floor((date/(1000*60))%60)
const second=Math.floor((date/(1000))%60)
time.innerHTML=days;
time2.innerHTML=hour;
time3.innerHTML=minute;
time4.innerHTML=second;
//using css property in cs
display.style.height="100vh";
display.style.fontSize="100px";
display.style.display="flex";
display.style.justifyContent="center";
display.style.alignItems="center";



