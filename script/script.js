// targetting the class type in the clock 
hrs = document.querySelector(".hours");
min = document.querySelector(".minutes");
sec = document.querySelector(".seconds");

function ready(){
var time = new Date();
// to find the percentage of the clock
var second = time.getSeconds()/60;
var minute =(second+time.getHours())/60;
var hour = (minute+time.getHours())/12;
// change the degree to precentage by 360 to the radiaton property
hrs.style.setProperty("--radiation",hour*360);
sec.style.setProperty("--radiation",second*360);
min.style.setProperty("--radiation",minute*360);
}
// settting the time interval to 1 second  adn calling the function by one seconed
setInterval(ready,1000);
// automatic adjuct the clock by refresh
ready();
