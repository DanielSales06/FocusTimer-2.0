import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddMinutes,
  buttonDecreaseMinutes,
  buttonSoundForest,
  buttonSoundCoffee,
  buttonSoundRain,
  buttonSoundFire
} from "./elements.js";

export function Events({controls, timer, sounds}) {

  buttonPlay.addEventListener("click", function() {
    controls.play();
    timer.countdown();
  });

  buttonPause.addEventListener("click", function() {
    controls.pause();
    timer.pause();
  });

  buttonStop.addEventListener("click", function() {
    controls.reset();
    timer.reset();
  });

  buttonAddMinutes.addEventListener("click", function() {
    timer.addMinutes();
  });

  buttonDecreaseMinutes.addEventListener("click", function() {
    timer.decreaseMinutes();
  });

  buttonSoundCoffee.addEventListener("click", function() {
    controls.coffee();
    sounds.coffeePlay();
  })

  buttonSoundForest.addEventListener("click", function() {
    controls.forest();
    sounds.forestPlay();
  })

  buttonSoundFire.addEventListener("click", function() {
    controls.fire();
    sounds.firePlay();
  })

  buttonSoundRain.addEventListener("click", function() {
    controls.rain();
    sounds.rainPlay();
  })
}