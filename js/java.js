$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Oulu&units=metric&mode=XML&APPID=be077300772d998ff80ddce8c64a4bf1", function(data){

let ikoni = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";

let lampö = Math.floor(data.main.temp) + "°C";
let saa = data.weather[0].main ;

$(".icon").attr('src', ikoni);
$(".saa").append(saa);
$(".Lämpötila").append(lampö);
})