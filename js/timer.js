import { Sounds } from "./sounds.js";

export function Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls
}) {
  
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;

    seconds = seconds === undefined ? 0 : seconds;

    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");

  }
  
  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (isFinished) {
        resetControls();
        updateDisplay();
        Sounds().timeEnd();
        return;
      };

      if( seconds <= 0 ) {
        seconds = 60;
        --minutes;
      };

      updateDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000)
  };

  function addMinutes() {
    minutes = minutes < 60 ? Number(minutes) + 5 : (minutes = 5)
    
    updateDisplay(minutes, 0)
    updateMinutes(minutes)
  }
  
  function decreaseMinutes() {
    minutes = minutes > 5 ? Number(minutes) - 5 : (minutes = 0)
    
    updateDisplay(minutes, 0)
    updateMinutes(minutes)
  };

  function pause() {
    clearTimeout(timerTimeOut);
  };

  return {
    reset,
    countdown,
    addMinutes,
    decreaseMinutes,
    pause
  };
};