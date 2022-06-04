$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Oulu&units=metric&mode=XML&APPID=be077300772d998ff80ddce8c64a4bf1", function(data){

let ikoni = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";

let lampö = Math.floor(data.main.temp) + "°C";
let saa = data.weather[0].main ;

$(".icon").attr('src', ikoni);
$(".saa").append(saa);
$(".Lämpötila").append(lampö);
})

var button = document.querySelector("#vihreä");

function doClick(){
    
    document.body.style.backgroundImage = "url('../Kuvat/cool-background4.png')";
    document.querySelector("#vihreä").remove();
}


button.addEventListener("click", doClick);

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Jyvaskyla&units=metric&mode=XML&APPID=be077300772d998ff80ddce8c64a4bf1", function(data){
    let ikon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    let lampö2 = Math.floor(data.main.temp) + "°C";
    let saa2 = data.weather[0].main ;

    $(".ikon").attr('src', ikon);
    $(".saa2").append(saa);
    $(".Lämpötila2").append(lampö);

})

var saa = document.querySelector("#saa");

function change(){
    ''
}
button.addEventListener("click", change );