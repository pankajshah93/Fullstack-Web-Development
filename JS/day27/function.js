//  function getZodiac() {
//       let name = document.getElementById("name").value;
//       let surname = document.getElementById("surname").value;
//       let date = parseInt(document.getElementById("date").value);
//       let month = parseInt(document.getElementById("month").value);

//       let zodiac = "";

//       if ((month == 3 && date >= 21) || (month == 4 && date <= 19))
//         zodiac = "Aries ♈";
//       else if ((month == 4 && date >= 20) || (month == 5 && date <= 20))
//         zodiac = "Taurus ♉";
//       else if ((month == 5 && date >= 21) || (month == 6 && date <= 20))
//         zodiac = "Gemini ♊";
//       else if ((month == 6 && date >= 21) || (month == 7 && date <= 22))
//         zodiac = "Cancer ♋";
//       else if ((month == 7 && date >= 23) || (month == 8 && date <= 22))
//         zodiac = "Leo ♌";
//       else if ((month == 8 && date >= 23) || (month == 9 && date <= 22))
//         zodiac = "Virgo ♍";
//       else if ((month == 9 && date >= 23) || (month == 10 && date <= 22))
//         zodiac = "Libra ♎";
//       else if ((month == 10 && date >= 23) || (month == 11 && date <= 21))
//         zodiac = "Scorpio ♏";
//       else if ((month == 11 && date >= 22) || (month == 12 && date <= 21))
//         zodiac = "Sagittarius ♐";
//       else if ((month == 12 && date >= 22) || (month == 1 && date <= 19))
//         zodiac = "Capricorn ♑";
//       else if ((month == 1 && date >= 20) || (month == 2 && date <= 18))
//         zodiac = "Aquarius ♒";
//       else if ((month == 2 && date >= 19) || (month == 3 && date <= 20))
//         zodiac = "Pisces ♓";

//       document.getElementById("result").innerHTML =
//         `Hello ${name} ${surname}<br>Your Zodiac Sign is <b>${zodiac}</b>`;
//     }
//size 12
const zodiacSigns = [
  "Capricorn ♑",
  "Aquarius ♒",
  "Pisces ♓",
  "Aries ♈",
  "Taurus ♉",
  "Gemini ♊",
  "Cancer ♋",
  "Leo ♌",
  "Virgo ♍",
  "Libra ♎",
  "Scorpio ♏",
  "Sagittarius ♐"
];
//size 31 based on day
const compliments = [
  "You have a great smile 😊",
  "You are very kind",
  "You are smart",
  "You have a positive vibe",
  "You look confident",
  "You are hardworking",
  "You have a good heart",
  "You are creative",
  "You are honest",
  "You are inspiring",
  "You are talented",
  "You have good manners",
  "You are brave",
  "You are thoughtful",
  "You are patient",
  "You are strong",
  "You are respectful",
  "You are calm",
  "You are friendly",
  "You are helpful",
  "You are unique",
  "You are amazing",
  "You have good energy",
  "You are reliable",
  "You are intelligent",
  "You are cheerful",
  "You are generous",
  "You are focused",
  "You are trustworthy",
  "You are charming",
  "You are awesome 🌟"
];
//size 20 based on month
const victimCompliments = [
  "You always do good for others, but you rarely get it back",
  "You give your best, even when people don’t appreciate it",
  "You care deeply, even when others take advantage of it",
  "You help everyone, but no one notices your effort",
  "You stay kind, even after being hurt",
  "You sacrifice a lot for others, without expecting much",
  "You put others first, even when you feel ignored",
  "You give support, even when you don’t receive any",
  "You keep trying, even when results are unfair",
  "You forgive easily, even when people don’t deserve it",
  "You are always there for others, but stand alone sometimes",
  "You do more than enough, yet get less in return",
  "You stay loyal, even when others walk away",
  "You give love freely, even when it isn’t returned",
  "You remain honest, even when people are not",
  "You keep your promises, even when others break theirs",
  "You understand others, even when no one understands you",
  "You stay patient, even when life tests you",
  "You try to keep peace, even at your own cost",
  "You continue to be good, even when the world is unfair"
];

//size 30
const lifeRecommendations = [
  "Feed street dogs whenever you can",
  "Help someone without expecting anything",
  "Speak kindly, even when you are angry",
  "Take care of your parents",
  "Respect people who help you",
  "Save a small amount of money regularly",
  "Wake up early and enjoy silence",
  "Exercise at least 20 minutes daily",
  "Drink enough water every day",
  "Avoid comparing your life with others",
  "Learn something new each day",
  "Be grateful for small things",
  "Spend time with family",
  "Help poor or needy people",
  "Keep your surroundings clean",
  "Listen more and talk less",
  "Forgive people to keep peace in your mind",
  "Be honest, even when it is hard",
  "Control anger, it saves energy",
  "Read good books",
  "Respect animals and nature",
  "Do charity when possible",
  "Sleep on time",
  "Avoid negative people",
  "Smile more, worry less",
  "Be patient, good things take time",
  "Take breaks for mental health",
  "Stay humble in success",
  "Never stop learning",
  "Trust yourself and keep going"
];

//size 20 
const futurePredictions = [
  "You will become a crorepati 💰",
  "Great success is coming your way",
  "Your hard work will pay off soon",
  "A big opportunity will change your life",
  "You will achieve financial freedom",
  "Your dreams will come true step by step",
  "You will make your family proud",
  "A positive phase will start soon",
  "Your career will grow strongly",
  "You will overcome current struggles",
  "You will gain respect and recognition",
  "You will travel to new places",
  "Good luck will support you",
  "You will build a peaceful life",
  "Your skills will bring big success",
  "You will receive good news soon",
  "Your future looks very bright"
];

const from=document.getElementById('astroform');
from.addEventListener('submit',(event)=>{

    event.preventDefault()
    // console.log("submitted")
    //choti choti chzo ko debug karke dekhna hoga
    const name=document.getElementById('name').value;
    const surname=document.getElementById('surname').value;

    // console.log(name,surname);
    //convert into number because its give string form
    const day=Number(document.getElementById('date').value)
    const month=Number(document.getElementById('month').value)
    const year=Number(document.getElementById('year').value)
    // console.log(name,surname,day,month,year)

    const result=document.getElementById('result')
    // result.innerHTML="hello everyone"
        // result.innerHTML=`hello${name} ${surname}`
       const first_message=`hello ${name} ${surname}`;
        const second_message =`your zodiac sign is ${zodiacSigns[month-1]}`//monthe is -1 because array start with 0
        const third_message=compliments[day-1];
        
        let index=Math.floor(Math.random()*20);
        const fourt_message =victimCompliments[index];


        index=(name.length * surname.length * year.length) % 30;
        const fifth_message=lifeRecommendations[index];
        console.log(lifeRecommendations[index]);

        index=(day*month*year)%20;
        const sixth_message= futurePredictions[index];

        result.innerHTML=`${first_message} ${second_message} ${third_message} ${fourt_message} our recomendation ${fifth_message}  "your future prediction"  ${sixth_message}`;
})
