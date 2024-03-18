// повтор урока
let loadButton = document.getElementById('loadButton')
loadButton.onclick = () => {
    
    async function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log('Широта:' + latitude);
        console.log('Долгота:' + longitude);

        let APIkey = 'a2906b093bfe0cb70f7c5e3e7b3baeb7'
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`)
        let resJson = await res.json()

        let nameElement = document.getElementById('name')
        nameElement.innerText = resJson.name
        let tempElement = document.getElementById('temp')
        tempElement.innerText = Math.round(resJson['main']['temp'] - 273) + 'C'
        console.log(resJson);
    }

    function error() {
        status.textContent = "Невозможно получить ваше местоположение";
    }

    if (!navigator.geolocation) {
        status.textContent = "Geolocation не поддерживается вашим браузером";
    } else {
        status.textContent = "Определение местоположения…";
        navigator.geolocation.getCurrentPosition(success, error);
    }
    // }

    // document.querySelector("#find-me").addEventListener("click", geoFindMe);
}

// Home Work 8 joker
// const apiKey = "97ed86b99fdcf738c7a080e0fa9fde20";
const apiKey = "a2906b093bfe0cb70f7c5e3e7b3baeb7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "Clouds.png"
    document.body.style.background =  'url(https://celes.club/uploads/posts/2022-10/1666831469_4-celes-club-p-oboi-na-telefon-nebo-oblaka-vkontakte-4.jpg)';
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "Sun.png"
     document.body.style.background =  'url(https://wallbox.ru/resize/1920x1200/wallpapers/main/201320/0ee723654abcf38.jpg)';
      
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "Mist.png"
    document.body.style.background =  'url(https://farm3.staticflickr.com/2859/32548598333_a0b47f0502_h.jpg)';
      
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "snow.png"
      document.body.style.background =  'url(https://farm3.staticflickr.com/2859/32548598333_a0b47f0502_h.jpg)';

  } else if (data.weather[0].main == "Smoke") {
    weatherIcon.src = "Smoke.png"
      document.body.style.background =  'url(https://farm1.staticflickr.com/751/32548626063_3fabc611f0_h.jpg)';

  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "Rain.png"
      document.body.style.background =  'url(https://farm4.staticflickr.com/3703/33207435722_6d170c0ac0_h.jpg)';

  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "https://www.freeiconspng.com/thumbs/cloud-rain-icons/cloud-rain-weather-icon-25.png"
      document.body.style.background =  'url(https://farm3.staticflickr.com/2888/33322297116_aac88d52fe_h.jpg)';
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
checkWeather();
