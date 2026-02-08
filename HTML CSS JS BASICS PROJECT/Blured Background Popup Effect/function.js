const containerE=document.querySelector('.container')
const btnE=document.querySelector('.btn')
const popupcontainer=document.querySelector('.Popup_container')
const closeicon=document.querySelector('.close_icon')

btnE.addEventListener('click',()=>{
    containerE.classList.add("active")
    popupcontainer.classList.remove("active")
})
closeicon.addEventListener('click',()=>{
     containerE.classList.remove("active")
    popupcontainer.classList.add("active")
})