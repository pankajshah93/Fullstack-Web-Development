const btnEl=document.querySelector('.submit')
const inputE=document.getElementById('input')
const copyicon=document.querySelector('.fa-copy')
const alert_container =document.querySelector('.alert_container')
btnEl.addEventListener('click',()=>{
    // console.log(event.target.id)
    createPassword();
})
function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    console.log(randomNum,password)
  }
  inputE.value=password;
  alert_container.innerHTML=password+"copied";
}
copyicon.addEventListener('click',()=>{
    // if passwordis not then not copied so if condition 
    if(inputE.value){
    copypassword();
    alert_container.classList.remove('active');
    setTimeout(()=>{
        alert_container.classList.add("active");
    },2000);}

})
function copypassword(){
    inputE.select();
    inputE.setSelectionRange(0,999);
    navigator.clipboard.writeText(inputE.value);
}