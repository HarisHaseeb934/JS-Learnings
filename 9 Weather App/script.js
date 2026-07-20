// https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=45a37725c7f874154ae9327c30ebc123&units=imperial

const elements = document.querySelectorAll(
  "#location, #temperature, #description, .detail-card strong, #weather-icon",
);

document.getElementById("search-btn").addEventListener("click", async (e) => {
  let cityName = document.getElementById("city-input").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.trim().toLowerCase()}&appid=45a37725c7f874154ae9327c30ebc123&units=metric`;
  await weather(url);
});

async function weather(url) {
  elements.forEach((el) => {
    el.classList.add("fade-out");
  });

  try {
    let response = await fetch(url);
    if (!response.ok) throw new Error("City Not Found");
    result = await response.json();
    setTimeout(() => {
      document.getElementById("location").innerText = result.name;
      document.getElementById("temperature").innerText =
        `${Math.floor(result.main.temp)}°C`;
      document.getElementById("description").innerText =
        result.weather[0].description;
      document.getElementById("feels-like").innerText =
        `${Math.floor(result.main.feels_like)}°C`;
      document.getElementById("humidity").innerText =
        `${result.main.humidity}%`;
      document.getElementById("pressure").innerText =
        `${result.main.pressure}hPa`;
      document.getElementById("wind-speed").innerText =
        `${result.wind.speed}mph`;
      document.getElementById("weather-icon").src =
        `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;

      elements.forEach((el) => {
        el.classList.remove("fade-out");
      });
    }, 300);
  } catch (err) {
    console.log(err.message);
    elements.forEach((el) => {
        el.classList.remove("fade-out");
      });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=multan&appid=45a37725c7f874154ae9327c30ebc123&units=metric`;
  weather(url);
});
