document.getElementById('get-weather').addEventListener('click', () => {

   const place = document.querySelector('.location').value;

   fetch(`http://api.weatherapi.com/v1/current.json?key=38967ec038b749c3a0390806261402&q=${place}&aqi=yes
`)
   .then(response => response.json())
   .then(data => {
        updatedata(data);
   })
   .catch(error => {
        console.log(error);
   });

});

function updatedata(data){
   const element = document.getElementById('get-weather-info');
   element.innerHTML = `Today temperature ${data.current.temp_c}°C`;
}
