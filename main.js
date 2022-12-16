document.addEventListener("DOMContentLoaded", (e) => {
  // countdown function
  function countdown() {
    const currentTime = new Date().getTime();
    const timeRemaining = new Date('December 23, 2022 20:00:00').getTime() - currentTime;
    // helper getTime function
    function getTime() {
      return {
        days: Math.floor(timeRemaining / 1000 / 60 / 60 / 24),
        hours: Math.floor(timeRemaining / 1000 / 60 / 60) % 24,
        minutes: Math.floor(timeRemaining / 1000 / 60) % 60,
        seconds: Math.floor(timeRemaining / 1000) % 60,
      };
    }
    
    const time = getTime();
    // console.log(time)
    const day = document.querySelector('.countdown-days');
    const hours = document.querySelector('.countdown-hours');
    day.innerText = `${time.days} days`;
    hours.innerHTML = `${time.hours} : ${time.minutes} : ${time.seconds}`;
    
  }
  setInterval(countdown, 1000);
})
