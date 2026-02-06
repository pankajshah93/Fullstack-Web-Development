
// const currencyfirstE1=document.getElementById("Currency-first")
// const worthfirstE2=document.getElementById("worth-first")
// const currencysecondE1=document.getElementById("Currency-second")
// const worthsecondE2=document.getElementById("worth-second")
// const exchangerateE1=document.getElementById("exchange_rate")


// function updaterate(){
//      fetch(
//     `https://v6.exchangerate-api.com/v6/9e8f035a93858ed7ca7650f9/latest/${currencyFirstEl.value}`
//   )
//     .then((res) => res.json())
//     .then((data) =>{
//         const rate=data.conversion_rates[currencysecondE1.value];
//         console.log(rate);
//         exchangerateE1.innerHTML=`1 ${currencyfirstE1.value}=${ rate +" " + currencysecondE1.value}`;
//         worthsecondE2.value=(rate*worthfirstE2).toFixed(2)//in this field of tofixed changed decimal value
// });
//     //reqst ko jshon formate me convert
//     // .then((res)=>res.json())
//     // .then((data)=>console.log(data));
// }
// currencyfirstE1.addEventListener('change',updaterate)
// // currencysecondE1.addEventListener('change',updaterate)
// // worthfirstE2.addEventListener('input',updaterate)



const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");

const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate()

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/9e8f035a93858ed7ca7650f9/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      console.log(rate);
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;

      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
    });
}

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);


