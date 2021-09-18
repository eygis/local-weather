let link = "https://weather-proxy.freecodecamp.rocks/api/current?"

let latitude;
let longitude;
let coordinates;

let bui = new XMLHttpRequest();
let data;

let unit = "C";
//let celcius = Math.round(data.main.temp) + "° C";
//let far;

let test = "no"; 
let coordFunction = (position) => {
  //console.log(position)
  latitude = "lat=" + position.coords.latitude + "&";
  longitude = "lon=" + position.coords.longitude;
  coordinates = latitude.concat(longitude);
  //console.log(coordinates)
let newLink = link.concat(coordinates);
  //console.log(newLink)
  bui.open("GET", newLink, true);
  bui.send();
  bui.onload = () => {
    //console.log(bui.responseText)
    data = JSON.parse(bui.responseText)
    console.log(data)
    cel = data.main.temp;
 $("#city").html(data.name)  
  $(".cs").html(Math.round(data.main.temp) + "° C")
  //$(".fh").html(Math.round((data.main.temp * 1.8) + 32))
 
    
    $("#picture").html('<img src=' + data.weather[0].icon + ' />')
  
  let celcius = Math.round(data.main.temp) + "° C";
  let far = Math.round((data.main.temp * 1.8) + 32) + "° F";
  
  $("#change").click(function () {
   if(unit === "C") {
    $("#temperature").html(far)
     unit = "F"
  } else if (unit === "F") {
    //console.log(celcius)
    $("#temperature").html(celcius)
     unit = "C"
  }
  })
    
    
  
  }
  
}
$(document).ready(function(){
  
  if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(coordFunction)
     
//console.log(latitude)
 }
   
   
  
  
})