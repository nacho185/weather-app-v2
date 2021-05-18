/*let and const*/
const button = document.querySelector(".button-to-search");
let clientSearch = document.querySelector(".display-search-bar");
let feels = document.querySelector(".display-feels-like");
let temperature = document.querySelector(".display-temperature");
let desc = document.querySelector(".display-description");
let windSpeed = document.querySelector(".display-windspeed");
const ACCESS_KEY = "1424062b25fa9c1dbb01d67b4f382fa4";
let searchLocation = document.querySelector(".name-and-region");
let imageUrl = document.querySelector(".display-icon");
let urlPart1 = "https://api.openweathermap.org/data/2.5/weather?q=";
/*end let and const*/

button.addEventListener("click", () => {
  fetch(
    urlPart1 + clientSearch.value + "&units=metric" + "&appid=" + ACCESS_KEY
  )
    .then((response) => response.json())
    .then((data) => {
      let feelsLike = data["main"]["feels_like"];
      let temperatureDisplay = data["main"]["temp"];
      let description = data["weather"][0]["description"];
      let speedWind = data["wind"]["speed"];
      let searchName = data["name"];
      let Url =
        "https://api.openweathermap.org/img/w/" +
        data["weather"][0]["icon"] +
        ".png";
      let searchRegion = data["sys"]["country"];
      /**/
      feels.textContent = "Feels like: " + feelsLike.toFixed(1) + "℃";
      temperature.textContent = temperatureDisplay.toFixed(1) + "℃";
      desc.textContent = description;
      windSpeed.textContent = "WindSpeed: " + speedWind;
      searchLocation.textContent = searchName + ", " + searchRegion;
      imageUrl.src = Url;
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
/*//*/
let feels1 = document.getElementById("display-feels-like-1");
let temperature1 = document.getElementById("display-temperature-1");
let desc1 = document.getElementById("display-description-1");
let windSpeed1 = document.getElementById("display-windspeed-1");
let searchLocation1 = document.getElementById("name-and-region-1");
let imageUrl1 = document.getElementById("display-icon-1");

fetch(urlPart1 + "houston" + "&units=metric" + "&appid=" + ACCESS_KEY)
  .then((response) => response.json())
  .then((data) => {
    let feelsLike1 = data["main"]["feels_like"];
    let temperatureDisplay1 = data["main"]["temp"];
    let description1 = data["weather"][0]["description"];
    let speedWind1 = data["wind"]["speed"];
    let searchName1 = data["name"];
    let Url1 =
      "https://api.openweathermap.org/img/w/" +
      data["weather"][0]["icon"] +
      ".png";
    let searchRegion1 = data["sys"]["country"];
    /**/
    feels1.textContent = "Feels like: " + feelsLike1.toFixed(1) + "℃";
    temperature1.textContent = temperatureDisplay1.toFixed(1) + "℃";
    desc1.textContent = description1;
    windSpeed1.textContent = "WindSpeed: " + speedWind1;
    searchLocation1.textContent = searchName1 + ", " + searchRegion1;
    imageUrl1.src = Url1;
    console.log(data);
  });
/**/
let feels2 = document.getElementById("display-feels-like-2");
let temperature2 = document.getElementById("display-temperature-2");
let desc2 = document.getElementById("display-description-2");
let windSpeed2 = document.getElementById("display-windspeed-2");
let searchLocation2 = document.getElementById("name-and-region-2");
let imageUrl2 = document.getElementById("display-icon-2");

fetch(urlPart1 + "alabama" + "&units=metric" + "&appid=" + ACCESS_KEY)
  .then((response) => response.json())
  .then((data) => {
    let feelsLike2 = data["main"]["feels_like"];
    let temperatureDisplay2 = data["main"]["temp"];
    let description2 = data["weather"][0]["description"];
    let speedWind2 = data["wind"]["speed"];
    let searchName2 = data["name"];
    let Url2 =
      "https://api.openweathermap.org/img/w/" +
      data["weather"][0]["icon"] +
      ".png";
    let searchRegion2 = data["sys"]["country"];
    /**/
    feels2.textContent = "Feels like: " + feelsLike2.toFixed(1) + "℃";
    temperature2.textContent = temperatureDisplay2.toFixed(1) + "℃";
    desc2.textContent = description2;
    windSpeed2.textContent = "WindSpeed: " + speedWind2;
    searchLocation2.textContent = searchName2 + ", " + searchRegion2;
    imageUrl2.src = Url2;
  });
/**/
let feels3 = document.getElementById("display-feels-like-3");
let temperature3 = document.getElementById("display-temperature-3");
let desc3 = document.getElementById("display-description-3");
let windSpeed3 = document.getElementById("display-windspeed-3");
let searchLocation3 = document.getElementById("name-and-region-3");
let imageUrl3 = document.getElementById("display-icon-3");

fetch(urlPart1 + "california" + "&units=metric" + "&appid=" + ACCESS_KEY)
  .then((response) => response.json())
  .then((data) => {
    let feelsLike3 = data["main"]["feels_like"];
    let temperatureDisplay3 = data["main"]["temp"];
    let description3 = data["weather"][0]["description"];
    let speedWind3 = data["wind"]["speed"];
    let searchName3 = data["name"];
    let Url3 =
      "https://api.openweathermap.org/img/w/" +
      data["weather"][0]["icon"] +
      ".png";
    let searchRegion3 = data["sys"]["country"];
    /**/
    feels3.textContent = "Feels like: " + feelsLike3.toFixed(1) + "℃";
    temperature3.textContent = temperatureDisplay3.toFixed(1) + "℃";
    desc3.textContent = description3;
    windSpeed3.textContent = "WindSpeed: " + speedWind3;
    searchLocation3.textContent = searchName3 + ", " + searchRegion3;
    imageUrl3.src = Url3;
  });
let feels4 = document.getElementById("display-feels-like-4");
let temperature4 = document.getElementById("display-temperature-4");
let desc4 = document.getElementById("display-description-4");
let windSpeed4 = document.getElementById("display-windspeed-4");
let searchLocation4 = document.getElementById("name-and-region-4");
let imageUrl4 = document.getElementById("display-icon-4");

fetch(urlPart1 + "washington" + "&units=metric" + "&appid=" + ACCESS_KEY)
  .then((response) => response.json())
  .then((data) => {
    let feelsLike4 = data["main"]["feels_like"];
    let temperatureDisplay4 = data["main"]["temp"];
    let description4 = data["weather"][0]["description"];
    let speedWind4 = data["wind"]["speed"];
    let searchName4 = data["name"];
    let Url4 =
      "https://api.openweathermap.org/img/w/" +
      data["weather"][0]["icon"] +
      ".png";
    let searchRegion4 = data["sys"]["country"];
    /**/
    feels4.textContent = "Feels like: " + feelsLike4.toFixed(1) + "℃";
    temperature4.textContent = temperatureDisplay4.toFixed(1) + "℃";
    desc4.textContent = description4;
    windSpeed4.textContent = "WindSpeed: " + speedWind4;
    searchLocation4.textContent = searchName4 + ", " + searchRegion4;
    imageUrl4.src = Url4;
  });
