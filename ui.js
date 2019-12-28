class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    // this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    let dewpoint = (weather.main.temp - ((9/25)*(100-weather.main.humidity))).toFixed(2) ;
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} F`;
    // this.icon.setAttribute('src', weather.xxxxx);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} F`;
    this.dewpoint.textContent = `DewPoint: ${dewpoint} F`;
    this.wind.textContent = `Wind: ${weather.wind.speed} m/hr`; 
  }

}