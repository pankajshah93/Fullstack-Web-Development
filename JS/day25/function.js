// data store>>
// 1:store the question 
// 2:otion ko store karna
// 3:options

const Questionbank = [
    {
        question: "Who has the most centuries in international cricket?",
        option: ["sachin tendulkar", "virat kohli", "ricky ponting", "jacques kallis"],
        answer: "sachin tendulkar"
    },
    {
        question: "Which player holds the record for the most centuries in ODI cricket?",
        option: ["sachin tendulkar", "virat kohli", "rohit sharma", "kumar sangakkara"],
        answer: "virat kohli"
    },
    {
        question: "Who has scored the most centuries in Test cricket history?",
        option: ["sachin tendulkar", "steve smith", "ricky ponting", "jacques kallis"],
        answer: "sachin tendulkar"
    },
    {
        question: "As of early 2026, which active player has the second-most international centuries?",
        option: ["rohit sharma", "joe root", "steve smith", "kane williamson"],
        answer: "joe root"
    },
    {
        question: "Which Australian captain has the most international centuries for his country?",
        option: ["steve smith", "allan border", "ricky ponting", "steve waugh"],
        answer: "ricky ponting"
    },
    {
        question: "Who is the only player to score 100 international centuries?",
        option: ["virat kohli", "sachin tendulkar", "brian lara", "ricky ponting"],
        answer: "sachin tendulkar"
    },
    {
        question: "Which South African all-rounder has more than 60 international centuries?",
        option: ["ab de villiers", "hashim amla", "jacques kallis", "graeme smith"],
        answer: "jacques kallis"
    },
    {
        question: "Who holds the record for the most centuries in T20 Internationals?",
        option: ["rohit sharma", "glenn maxwell", "babar azam", "suryakumar yadav"],
        answer: "rohit sharma"
    },
    {
        question: "Which Sri Lankan legend has the most international centuries for his nation?",
        option: ["mahela jayawardene", "kumar sangakkara", "sanath jayasuriya", "aravinda de silva"],
        answer: "kumar sangakkara"
    },
    {
        question: "Who was the first player to score a double century in men's ODI cricket?",
        option: ["virender sehwag", "chris gayle", "sachin tendulkar", "martin guptill"],
        answer: "sachin tendulkar"
    },
    {
        question: "Which English batter reached 41 Test centuries by early 2026?",
        option: ["alastair cook", "joe root", "kevin pietersen", "ben stokes"],
        answer: "joe root"
    },
    {
        question: "Which West Indian legend holds the record for the highest individual score in Tests (400*)?",
        option: ["viv richards", "chris gayle", "brian lara", "clive lloyd"],
        answer: "brian lara"
    },
    {
        question: "Who has the most centuries in a single edition of the ICC Cricket World Cup (5)?",
        option: ["sachin tendulkar", "rohit sharma", "quinton de kock", "kumar sangakkara"],
        answer: "rohit sharma"
    },
    {
        question: "Which player is known as the 'fastest to 50 ODI centuries'?",
        option: ["sachin tendulkar", "virat kohli", "hashim amla", "ab de villiers"],
        answer: "virat kohli"
    },
    {
        question: "Which batsman has the highest batting average in Test cricket (min. 50 innings)?",
        option: ["don bradman", "steve smith", "kane williamson", "kumar sangakkara"],
        answer: "don bradman"
    },
    {
        question: "Who has the most international centuries among active opening batsmen in 2026?",
        option: ["david warner", "rohit sharma", "shubman gill", "quinton de kock"],
        answer: "rohit sharma"
    },
    {
        question: "Which Pakistani player has the most centuries in T20 International cricket?",
        option: ["mohammad rizwan", "fakhar zaman", "babar azam", "saeed anwar"],
        answer: "babar azam"
    },
    {
        question: "Who holds the record for the fastest century in ODI cricket (31 balls)?",
        option: ["corey anderson", "shahid afridi", "ab de villiers", "glenn maxwell"],
        answer: "ab de villiers"
    },
    {
        question: "Which player has scored the most centuries in winning causes for India in ODIs?",
        option: ["sachin tendulkar", "virat kohli", "rohit sharma", "sourav ganguly"],
        answer: "virat kohli"
    },
    {
        question: "Who has the most centuries in international cricket across all three formats among New Zealanders?",
        option: ["ross taylor", "kane williamson", "brendon mccullum", "martin guptill"],
        answer: "kane williamson"
    }
];
function randamquestion(){

    // const ans=[];

//     const data = new Set();//in set only unique element present
//     while(data.size!=5){
//    const index= Math.floor(Math.random()*20);
//    data.add(Questionbank[index]);
//     }
//     //convert set into array
//     return [...data];
//randamly sort karenge  question ko 
//agar ander se negative value ati hai to b,a

// time complexity nlogn  fisher algorithm is time o(n)
// Questionbank.sort((a,b)=>Math.random()-0.5);//if this generate negative value then b,a

// Questionbank.slice(0,5);


//second approach to solve
const arr=[];
let length=Questionbank.length();

for(let i=0;i<5;i++)
{
    const index = Math.floor(Math.random()*length);
    arr.push(Questionbank[index]);

    //swap 
    [Questionbank[index],Questionbank[length-1]]=  [Questionbank[length-1],Questionbank[index]]
    length--;
}
return arr;

} 

//select the form and insert all element into it

const form =document.querySelector('form');



const problem = randamquestion();

const originans={};
//key value


problem.forEach((obj,index)=>{

    const div_element=document.createElement('div');
div_element.className='question';
originans[`q${index+1}`]=obj['answer'];

const para=document.createElement('p')
para.textContent=`${index+1},${obj['question']}`;

div_element.appendChild(para);

//create four options

obj['options'].forEach((data)=>{

    const label=document.createElement('label');
    const input = document.createElement('input');
    input.type="radio";
    input.name = `q${index+1}`;
    input.value=data;

    label.appendChild(input);
   label.appendChild( document.createTextNode(data))
   div_element.appendChild(label);
   div_element.appendChild(document.createElement('br'));
})

form.appendChild(div_element);
})

const button=document.createElement('button')
button.type='submit';
button.className="submit-btn"
button.textContent="submit";


//check the submitted form


form.addEventListener('submit',(event)=>{

    event.preventDefault();

    const data=new FormData(form);
     let result =0;
    for(let {key,value} of data.entries())
    {
        if(value===originans[key])
            result++;
    }

    const out=document.getElementById('out');
    out.innerHTML=`${result} out of 3 is correct`;

    // document.getElementById('container').append(out);
    // console.log(result);
    form.reset();
})