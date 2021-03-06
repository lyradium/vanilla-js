const API_KEY = "85603840a4dc885755e8f9a8f9870e41";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

      const weahterImg = document.createElement("img");

      weahterImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      document.querySelector("#weather").append(weahterImg);
    });
}

function onGeoError() {
  alert("Cat't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
