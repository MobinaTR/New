//time and date
now = new Date();
let weekDay = document.querySelector(".weekDay");
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
weekDay.innerHTML = day;
let timeElement = document.querySelector(".time");
let hours = now.getHours();
if (hours<10){
    hours = `0${hours}`
}
let minutes = now.getMinutes();
if (minutes<10){
    minutes = `0${minutes}`
}
timeElement.innerHTML = `${hours}:${minutes}`;

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );}
function searchCity(city) {
  let apiKey = "6e6ec494746b5229a9f2d526478c924c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}`).then(displayWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", handleSubmit);