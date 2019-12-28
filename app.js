// init weather object
const weather = new Weather('85257');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click',(e)=>{
  const zip = document.getElementById('zip').value;
  weather.changeLocation(zip);

  getWeather();

  $('#locModal').modal('hide');
});

function getWeather(){

  weather.getWeather()
       .then(results => {
        ui.paint(results);
        console.log(results);
       })
       .catch(err => console.log(err));

}














