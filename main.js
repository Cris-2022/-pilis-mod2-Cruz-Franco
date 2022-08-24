/* Async - Await */
/*
async function getIp() {
    try {
      let response = await fetch("https://api.ipify.org/?format=json");
      let ipResponse = await response.json();
      console.log(ipResponse);
  
      let responseLocation = await fetch("http://ip-api.com/json/" + ipResponse.ip);
      let locationResponse = await responseLocation.json();
      console.log(locationResponse);
    } catch {
      console.log("Algo paso, no se pudo resolver...");
    }
  }
  getIp();
  
async function getWt() {
    try {
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=35&lon=139&appid=c7eb81a7e5dabe1d37507274a340061b");
        let WeatherResponse = await response.json();
        console.log(WeatherResponse);

    } catch {
        console.log("Algo paso, no se pudo resolver...");
    }
}
getWt();   */

fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=-24.183133853538152&lon=-65.33130863194877&appid=c7eb81a7e5dabe1d37507274a340061b")
    .then(response => response.json())
    .then(json => setdata(json))
const setdata = json => {
    console.log(json)
    const weatherdata = {
        location: json.name,
        description: json.weather[0].main,
        humidity: json.main.humidity,
        pressure: json.main.pressure,
        temperature: json.main.temp,
        date: getDate(),

    }
    Object.keys(weatherdata).forEach(key => {
        document.getElementById(key).textContent = weatherdata[key];
    });
}
const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}