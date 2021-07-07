//Nav Menu

const navbutton = document.querySelector('.ham');
const navbars = document.querySelector('.fa-bars');
const navclose = document.querySelector('.fa-window-close');
const mainnav = document.querySelector('.navigation');

navbutton.addEventListener('click', () => {mainnav.classList.toggle('responsive');
navbars.classList.toggle('open'); navbars.classList.toggle('hide'); navclose.classList.toggle('close')}, false);

window.onresize = () => {if (window.innerWidth > 550) mainnav.classList.remove('responsive'); navclose.classList.remove('close'); navbars.classList.remove('hide')};

//Date Section

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const date = new Date();
const dayOfMonth = date.getDate();
const year = date.getFullYear();
const day = days[date.getDay()];
const month = months[date.getMonth()];
const currentDate = `${day}, ${dayOfMonth} ${month} ${year}`;

document.querySelector('#currentYear').innerHTML = year;
document.querySelector('#currentDate').innerHTML = currentDate;



    if (day == 'Friday') {
        document.querySelector('.banner').style.display = 'Block'; 
    }



// var now = new Date();
// var weekday = new Array(7);
// weekday[0]=  "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var day = weekday[now.getDay()];

// document.getElementById("displayMessage").textContent = "day[weekday]";

// 	if (day == "Friday"){
//       document.writeln(" <h2>Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.</h2>");
//     } 

//     else{
//       document.writeln("<p>No pancake today. </p>");
//     }