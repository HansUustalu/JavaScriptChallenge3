function getAPIdata(){
	var url ='https://api.openweathermap.org/data/2.5/weather';
	var apiKey = 'b0d8b4bc0da95a3b51db784c9246b503';
	var city = 'tallinn';

	var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;

fetch(request)

.then(function(response) {
	if(!response.ok) throw Error(response.statusText);
	return response.json();
})

.then(function(response) {

	onAPISucces(response);
});

}
function onAPISucces(response) {

	console.log(response);

	var degC = Math.floor(response.main.temp - 273.15);

	var desc = response.weather[0].description;

	var windspeed = response.wind.speed;

	var feels_like = Math.floor(response.main.humidity);

	var weatherBox = document.getElementById('curretweather');
	weatherBox.innerHTML = degC + '&#176;C <br>' + desc +'<br>'+windspeed+'m/s <br>humidity  '+feels_like;
}


function onAPIError(error) {
	console.error('Request failed', error);
	var showWeather = document.getElementById('curretweather');
	weatherBox.className = 'hidden';
}

getAPIdata();

var searchButton = document.querySelector("#search");

searchButton.addEventListener("click", ()=>{
  console.log("button pressed");
	fetchImageBlock(`https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=Vy62DcFje8an9sDGFYYv1CjMWBjm4mBcqxMlh7F8`)
document.getElementByClass("content").style.width = "100px";
 $("img").toggleClass("fade-in");
})

var myImage = document.querySelector('#img-selector');
//async paneb koodi osa ootama aruvit alla laadimine
const fetchImageBlock = async url => {
  const res = await fetch(url);
  const blob = await res.blob();
  var objectURL = URL.createObjectURL(blob);
  myImage.src = objectURL;
}

function useApiData(data){
}
