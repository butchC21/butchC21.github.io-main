//Navigation Menu
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


//Date Section
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate = new Date();
var day = currentDate.getDay();        
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
       
document.getElementById("displayDate").textContent = `${days[day]}, ${date} ${months[month]} ${year}`; 

if (day == "Thursday") {
    document.querySelector('.banner').style.display = 'Block'; 
}

//Letters Only
function lettersOnly(input){
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "");
}

//Storm Severity 
function adjustSeverity(severity) {
    document.getElementById("severityvalue").innerHTML = severity;
  }

  //Select a Region
  function selectResponse(){
      const s = document.querySelector('#selected')
      const sel = document.querySelector('#selectregion');
      s.style.display = "block";
      s.textContent = sel.value;
  }


  //Home Page
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL).then(function (response){
    return response.json();
})

.then(function (jsonObject) {
    const towns = jsonObject["towns"];

    const sitetown = towns.filter((town) =>
        town.name == "Preston" ||
        town.name == "Soda Springs" ||
        town.name == "Fish Haven"
    );

    sitetown.forEach((town) => {
        let homepage = document.createElement("section");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let img = document.createElement("img");

        h2.innerHTML = `${town.name}`;
        h3.innerHTML = `${town.motto}`;
        p1.innerHTML = `Year Founded: ${town.yearFounded}`;
        p2.innerHTML = `Population: ${town.currentPopulation}`;
        p3.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;

        div1.setAttribute("class", "towninfo");
        img.setAttribute("src", `images/${town.photo}`);
        img.setAttribute("alt", `Town of ${town.name}`);

        div1.append(h2);
        div1.append(h3);
        div1.append(p1);
        div1.append(p2);
        div1.append(p3);
        div2.append(img);

        homepage.append(div1);
        homepage.append(div2);

        document.querySelector("div.homepage").append(homepage);
    });
});