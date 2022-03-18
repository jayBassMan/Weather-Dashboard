const search = document.querySelector(".search");
const searchBtn = document.querySelector("#searchBtn");
const dashBoard = document.querySelector("#dashBoard");
const fiveDay = document.querySelector("#fiveDay");

function generateWeather(city) {
  //Get API key from weather api sight
  const key = "d59885c116c94800136f7045f74ff77e";
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;

  fetch(baseUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      const fiveDayUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude={part}&appid=${key}&units=imperial`;
      fetch(fiveDayUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (fiveDayData) {

           dashBoard.innerHTML = `  
                    <h1 class="display-5 fw-bold"></h1>
                    <div class="city">City:<span>${data.name}</span></div>
                    <div class="date">Date:<span>${moment(data.dt,'X').format("MM/DD/YYYY")}</span></div>
                    <div class="temp">Temp:<span>${data.main.temp}</span></div>
                    <div class="wind">Wind:<span>${data.wind.speed}</span></div>
                    <div class="humidity">Humidity:<span>${data.main.humidity}</span></div>
                    <div class="uv-index">UV Index:<span>${fiveDayData.current.uvi}</span></div>`;

          console.log(fiveDayData);

          fiveDay.innerHTML = ` <div class="col-sm-2">
                    <Section class="container-0">
                        <main>
                            <div class="date">Date:<span>${moment(fiveDayData.daily[1].dt,'X').format("MM/DD/YYYY")}</span></div>
                            <div class="temp">Temp:<span>${fiveDayData.daily[1].temp.day}</span></div>
                            <div class="wind">Wind:<span>${fiveDayData.daily[1].wind_speed}</span></div>
                            <div class="humidity">Humidity:<span>${fiveDayData.daily[1].humidity}</span></div>
                        </main>
                    </Section>
                </div>
                <div class="col-sm-2">
                    <Section class="container-0">
                        <main>
                            <div class="date">Date: <span>${moment(fiveDayData.daily[2].dt,'X').format("MM/DD/YYYY")}</span></div>
                            <div class="temp">Temp:<span>${fiveDayData.daily[2].temp.day}</span></div>
                            <div class="wind">Wind:<span>${fiveDayData.daily[2].wind_speed}</span></div>
                            <div class="humidity">Humidity:<span>${fiveDayData.daily[2].humidity}</span></div>
                        </main>
                </div>
                <div class="col-sm-2">
                    <Section class="container-0">
                        <main>
                            <div class="date">Date:<span>${moment(fiveDayData.daily[3].dt,'X').format("MM/DD/YYYY")}</span></div>
                            <div class="temp">Temp:<span>${fiveDayData.daily[3].temp.day}</span></div>
                            <div class="wind">Wind:<span>${fiveDayData.daily[3].wind_speed}</span></div>
                            <div class="humidity">Humidity:<span>${fiveDayData.daily[3].humidity}</span></div>
                        </main>
                    </Section>
                </div>
                <div class="col-sm-2">
                    <Section class="container-0">
                        <main>
                             <div class="date">Date:<span>${moment(fiveDayData.daily[4].dt,'X').format("MM/DD/YYYY")}</span></div>
                            <div class="temp">Temp:<span>${fiveDayData.daily[4].temp.day}</span></div>
                            <div class="wind">Wind:<span>${fiveDayData.daily[4].wind_speed}</span></div>
                            <div class="humidity">Humidity:<span>${fiveDayData.daily[4].humidity}</span></div>
                        </main>
                    </Section>
                </div>
                <div class="col-sm-2">
                    <Section class="container-0">
                        <main>
                            <div class="date">Date:<span>${moment(fiveDayData.daily[5].dt,'X').format("MM/DD/YYYY")}</span></div>
                            <div class="temp">Temp:<span>${fiveDayData.daily[5].temp.day}</span></div>
                            <div class="wind">Wind:<span>${fiveDayData.daily[5].wind_speed}</span></div>
                            <div class="humidity">Humidity:<span>${fiveDayData.daily[5].humidity}</span></div>
                        </main>
                    </Section>
                </div>`;
        });
    });
}

searchBtn.addEventListener("click", function () {
  generateWeather(search.value);
});

