const container=document.querySelector('.container')

const careers=["youtuber","freelancer","web devloper","instructer"]
let careeIndex=0
let characterIndex=0;
updateText();
function updateText(){
// container.innerHTML=`<h1>hello i am ${careers[careeIndex].slice(0,characterIndex)}</h1>`;
container.innerHTML=`<h1>hello i am ${careers[careeIndex].slice(0,1)==="I" ? "an" : "a "}${careers[careeIndex].slice(0,characterIndex)}</h1>`;

characterIndex++;
if(characterIndex===careers[careeIndex].length){
    careeIndex++
    characterIndex=0;
}
if(careeIndex==careers.length){
    careeIndex=0;
}
setTimeout(updateText,400)

}