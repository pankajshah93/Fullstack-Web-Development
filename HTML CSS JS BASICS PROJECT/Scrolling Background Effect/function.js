const bgimage=document.getElementById('bg-image')

window.addEventListener('scroll',()=>{
    updateimage();
})
function updateimage(){
    bgimage.style.opacity=1-window.pageYOffset/900;
    console.log(window.pageYOffset,1-window.pageYOffset/800);
    bgimage.style.backgroundSize=160-window.pageYOffset/12 + "%";
}