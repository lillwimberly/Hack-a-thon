// window.addEventListener("DOMContentLoaded", countdown, false);

function countdown() {
  // declare a var to holiday
  const holiday = 24;
  //new Date()
  const today = new Date().toDateString().split(" ");
  // today.split(" ");
  console.log(today[2]);
  // subtract date from holiday
  let daysLeft = 24 - Number(today[2]);
  // return days left
  return daysLeft;
}

// invoke our func and grab the result
let numOfDays = countdown();
console.log(numOfDays);
// select the h1 tag and save it as var
const day = document.querySelector(".countdown");
console.log(day);
// assign the result as innerText in countdown class
day.innerText = numOfDays;
