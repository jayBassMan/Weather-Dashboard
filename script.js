// Global Variables
const search = document.querySelector(".search");
const searchBtn = document.querySelector("#searchBtn");
const dashBoard = document.querySelector("#dashBoard");
const fiveDay = document.querySelector("#fiveDay");
const storage = document.querySelector("#storage");
const text = document.querySelector("#text");
const cityList = document.querySelector("#city-list");
// const storageBtn = document.querySelector("#storageBtn");
// const storageInput = localStorage.getItem('textInput')

let cityArray = [];

if(localStorage.getItem('cityArray')){
cityArray = JSON.parse(localStorage.getItem('cityArray'))
}

displayCityNames()
function displayCityNames(){
  cityList.innerHTML = ""
  for (let i = 0; i < cityArray.length; i++) {
    
    cityList.innerHTML += ` 
    <div class="list-group">
                <button class="storageBtn" class="btn btn-bg-gradient bg-dark ms-4 mb-1 text-white">${cityArray[i]}</button>
            </div>`
  }
  const storageBtn = document.querySelectorAll('.storageBtn');

  for (let i = 0; i < storageBtn.length; i++) {
        storageBtn[i].addEventListener('click', function(){
          generateWeather(this.textContent);
        })
    
  }
}

// Function to generate weather
function generateWeather(city) {
  //Get API key from weather api sight
  // local Variables
  const key = "d59885c116c94800136f7045f74ff77e";
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
  // Fetch function for api
  fetch(baseUrl)
    // Call back function for responce variable i made
    .then(function (response) {
      // Return response variable back in .json (javaScript Object Notation)
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // This is the five day data for weather api url
      const fiveDayUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude={part}&appid=${key}&units=imperial`;
      // Fetch method for five day url
      fetch(fiveDayUrl)
        //Call back fun
        .then(function (response) {
          return response.json();
        })
        .then(function (fiveDayData) {

           if(cityArray.indexOf(data.name) === -1){
             cityArray.push(data.name)
              localStorage.setItem("cityArray", JSON.stringify(cityArray)); 

           }

          
          dashBoard.innerHTML = `  
                    <h1 class="display-5 fw-bold"></h1>
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
                    <div class="city">City:<span>${data.name}</span></div>
                    <div class="date">Date:<span>${moment(data.dt, "X").format(
                      "MM/DD/YYYY"
                    )}</span></div>
                    <div class="temp">Temp:<span>${data.main.temp}</span></div>
                    <div class="wind">Wind:<span>${data.wind.speed}</span></div>
                    <div class="humidity">Humidity:<span>${
                      data.main.humidity
                    }</span></div>
                    <div class="uv-index">UV Index:<span>${
                      fiveDayData.current.uvi
                    }</span></div>`;

          console.log(fiveDayData);

          fiveDay.innerHTML = ` <div class="col-sm-2">
                    <Section class="container-0">
                        <main>
                            <img src="http://openweathermap.org/img/wn/${
                              fiveDayData.daily[1].weather[0].icon
                            }@2x.png"/>
                            <div class="date">Date:<span>${moment(
                              fiveDayData.daily[1].dt,
                              "X"
                            ).format("MM/DD/YYYY")}</span></div>
                            <div class="temp">Temp:<span>${
                              fiveDayData.daily[1].temp.day
                            }</span></div>
                            <div class="wind">Wind:<span>${
                              fiveDayData.daily[1].wind_speed
                            }</span></div>
                            <div class="humidity">Humidity:<span>${
                              fiveDayData.daily[1].humidity
                            }</span></div>
                        </main>
                    </Section>
                </div>
                <div class="col-sm-2">
                    <Section class="container-0">
                        <main>
                        <img src="http://openweathermap.org/img/wn/${
                          fiveDayData.daily[2].weather[0].icon
                        }@2x.png"/>
                            <div class="date">Date: <span>${moment(
                              fiveDayData.daily[2].dt,
                              "X"
                            ).format("MM/DD/YYYY")}</span></div>
                            <div class="temp">Temp:<span>${
                              fiveDayData.daily[2].temp.day
                            }</span></div>
                            <div class="wind">Wind:<span>${
                              fiveDayData.daily[2].wind_speed
                            }</span></div>
                            <div class="humidity">Humidity:<span>${
                              fiveDayData.daily[2].humidity
                            }</span></div>
                        </main>
                </div>
                <div class="col-sm-2">
                    <Section class="container-0">
                        <main>
                        <img src="http://openweathermap.org/img/wn/${
                          fiveDayData.daily[3].weather[0].icon
                        }@2x.png"/>
                            <div class="date">Date:<span>${moment(
                              fiveDayData.daily[3].dt,
                              "X"
                            ).format("MM/DD/YYYY")}</span></div>
                            <div class="temp">Temp:<span>${
                              fiveDayData.daily[3].temp.day
                            }</span></div>
                            <div class="wind">Wind:<span>${
                              fiveDayData.daily[3].wind_speed
                            }</span></div>
                            <div class="humidity">Humidity:<span>${
                              fiveDayData.daily[3].humidity
                            }</span></div>
                        </main>
                    </Section>
                </div>
                <div class="col-sm-2">
                    <Section class="container-0">
                        <main>
                        <img src="http://openweathermap.org/img/wn/${
                          fiveDayData.daily[4].weather[0].icon
                        }@2x.png"/>
                             <div class="date">Date:<span>${moment(
                               fiveDayData.daily[4].dt,
                               "X"
                             ).format("MM/DD/YYYY")}</span></div>
                            <div class="temp">Temp:<span>${
                              fiveDayData.daily[4].temp.day
                            }</span></div>
                            <div class="wind">Wind:<span>${
                              fiveDayData.daily[4].wind_speed
                            }</span></div>
                            <div class="humidity">Humidity:<span>${
                              fiveDayData.daily[4].humidity
                            }</span></div>
                        </main>
                    </Section>
                </div>
                <div class="col-sm-2">
                    <Section class="container-0">
                        <main>
                        <img src="http://openweathermap.org/img/wn/${
                          fiveDayData.daily[5].weather[0].icon
                        }@2x.png"/>
                            <div class="date">Date:<span>${moment(
                              fiveDayData.daily[5].dt,
                              "X"
                            ).format("MM/DD/YYYY")}</span></div>
                            <div class="temp">Temp:<span>${
                              fiveDayData.daily[5].temp.day
                            }</span></div>
                            <div class="wind">Wind:<span>${
                              fiveDayData.daily[5].wind_speed
                            }</span></div>
                            <div class="humidity">Humidity:<span>${
                              fiveDayData.daily[5].humidity
                            }</span></div>
                        </main>
                    </Section>
                </div>`;
                displayCityNames()

        });
    });
}

 
// Search button
searchBtn.addEventListener("click", function () {
  generateWeather(search.value);
});
