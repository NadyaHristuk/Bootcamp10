let temperatureDegree = document.querySelector('.temperature-degree');
let temperatureDescription =  document.querySelector('.temperature-description');
let locationTimezone =  document.querySelector('.location-timezone');
let iconID = document.querySelector('.icon');
let temperatureSection = document.querySelector('.temperature-section');
let temperatureUnit = document.querySelector('.temperature-unit');
let onLoad = ()=> {
  
  let lat, long, celsus, tempBuffer;
  

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      long =  position.coords.longitude;

      let proxy = 'https://cors-anywhere.herokuapp.com/';

     let api = `${proxy}https://api.darksky.net/forecast/f9fe7205a67a360e338008aba15db943/${lat},${long}`;

      fetch(api)
        .then(response => response.json())
        .then(data => {
          console.log(data);          
          const {icon, summary, temperature} = data.currently;
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent=data.timezone;          
          celsus = 5/9*(temperature-32);
          setIcon(icon, iconID);
          tempBuffer = temperature;
          temperatureSection.addEventListener('click', setTemperature);
        })
        .then      
    })
  }

  function setTemperature (){
    if (temperatureUnit.textContent==='F'){
      temperatureUnit.textContent='C';
      temperatureDegree.textContent = Math.floor(celsus);
    } else {
      temperatureUnit.textContent='F';
      temperatureDegree.textContent = tempBuffer;
    }

  }

  function setIcon(icon, iconID){
    const skycons = new Skycons({color: "white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);    
  } 
   
}
window.addEventListener('load', onLoad);

let input 

https://restcountries.eu/rest/v2/name/${}?fullText=true


