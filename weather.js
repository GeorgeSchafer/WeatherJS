class Weather {
  constructor(zip){
    this.apiKey = '813b044c035d9f510fc16ea7e52f6510';
    this.zip = zip;
  }

  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zip}&units=imperial&APPID=${this.apiKey}`);

    const responseData = await response.json();
    
    return responseData;

  }

  //Change Location
  changeLocation(zip){
    this.zip = zip;
  }
}