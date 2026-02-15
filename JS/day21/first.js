//  <li>ts</li> 

//create an element 
// const element =document.createElement("li");
// element.innerHTML="ts";

// const parent =document.getElementById("root");
// parent.appendChild(element);

//if we add more then create function 
// function attach(consts){
// const element =document.createElement("li");
// element.innerHTML=consts;

// const parent =document.getElementById("root");
// parent.appendChild(element);
// }
// attach("ks");
// attach("node");

//multiple element you attach
// function attach(consts){
// const element =document.createElement("li");
// element.innerHTML=consts;

// const element2 =document.createElement("li");
// element2.innerHTML=consts+"V2.0";

// const parent =document.getElementById("root");
// parent.append(element,element2);//add all you want to enter
// }
// attach("ks");
// attach("node");




//create text node without attach any tags

// const element=document.createTextNode("hello brij kumar");
// const parent=document.getElementById("root");
// parent.append(element);


 
//attribute node create id or class add //

// const element=document.createAttribute("id");
// element.value="first";

//access first list
// const curr_list=document.querySelector('li');
// curr_list.setAttributeNode(element);

//access to second list 
// const parent =document.getElementById("root");
// parent.children[1].setAttributeNode(element);





//access attribute of a element
// const element=document.getElementById("root")
// console.log(element.getAttribute("id"));
// console.log(element.getAttribute("class"));
// console.log(element.getAttribute("style"));

//set attribute 
// element.setAttribute("custom","20");
// element.setAttribute("class","20");//already existing attribute update
// //remove the attributes
// element.removeAttribute("custom");







//add nodes to the dom
// const parent=document.getElementById('root');//first acces parent

// const element = document.createElement('li');//create element
// element.innerHTML="TS";

// parent.prepend(element);//element add in first 
// parent.append(element);//element add last

//element add in midle of any child 
// const child2=parent.children[1];
// parent.insertBefore(element,child2);
// parent.replaceChild(element,child2)


const parent =document.getElementById("root");
// // parent.innerHTML="TS";
// parent.innerHTML +="<li>TS</li>";





//create element jo app addkarna chahte ho
const element=document.createElement("div");
element.innerHTML="hello coder army";

// parent.insertAdjacentElement("beforebegin",element)
parent.insertAdjacentElement("afterbegin",element)





//delete any node
document.querySelector('li').remove()

