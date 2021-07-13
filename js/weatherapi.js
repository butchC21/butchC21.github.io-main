const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=metric&appid=f041292742df908f0af429eacd66c2b8";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    
   
  });