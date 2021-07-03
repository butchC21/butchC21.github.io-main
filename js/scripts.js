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