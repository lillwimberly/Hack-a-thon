document.addEventListener('DOMContentLoaded', (e) => {
    
  
  // countdown function
  function countdown (){
    const currentTime = new Date().getTime();
    const timeRemaining = new Date('December 23, 2022 20:00:00').getTime() - currentTime;

    function getTime() {
      return {
          days: Math.floor(timeRemaining / 1000 / 60 / 60 / 24),
          hours: Math.floor(timeRemaining / 1000 / 60 / 60) % 24,
          minutes: Math.floor(timeRemaining / 1000 / 60) % 60,
          seconds: Math.floor(timeRemaining / 1000) % 60
      };
    }
    // invoke getTime func and save the result
    const time = getTime();
    // console.log(time)
    const day = document.querySelector('.countdown');
    day.innerText = `${time.days} days, ${time.hours} : ${time.minutes} : ${time.seconds}`;
    // iterate over our time obj
      // 

  }
  setInterval(countdown, 1000);

})
// invoke our func and grab the result
// let numOfDays = countdown();
// console.log(numOfDays)
// // select the h1 tag and save it as var
// const day = document.querySelector('.countdown');
// // assign the result as innerText in countdown class
// day.innerText = numOfDays;