//select id
const id=document.querySelector('#first');
id.innerHTML="hello  mini";//its changed select content

//select class
const header = document.querySelector('.header2')
// console.log(id2)
id.style.backgroundColor="pink";

//its sek=lect all heading tag 
const dom=document.getElementsByTagName('h1');console.log(dom)
console.log(dom)

//using in array type
const team=document.getElementsByTagName('li');
team[0]

//select parent element and li
// const list=document.querySelector('li');
// console.log(list.parentElement);

//its give parent of list element
// const list=document.querySelector('ul');
// console.log(list);

// const list=document.querySelector('ul');
// console.log(list.childNodes);//nodelist represent

//html collection give only html element collection
// const list=document.querySelector('ul');
// console.log(list.children);

//its provide first list element
const list=document.querySelector('ul');
console.log(list.firstElementChild);


//accesing using innerhtmlplace
// document.getElementById('first').innerHTML
// 'hello  mini'
// document.getElementById('first').textContent
// 'hello  mini'



//difference between innerhtml is show all element in this tag adding tag also show
//but textcontent is not show  all element only 
// document.getElementById('second').innerHTML
// 'topics <strong>pa</strong>covered so far '
// document.getElementById('second').textContent
// 'topics pacovered so far '