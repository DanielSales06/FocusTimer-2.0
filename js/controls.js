export function Controls ({
  buttonPlay,
  buttonPause,
  buttonSoundForest,
  buttonSoundCoffee,
  buttonSoundRain,
  buttonSoundFire
}) {

  function play() {
    buttonPlay.classList.toggle("hide");
    buttonPause.classList.toggle("hide");
  };

  function pause() {
    buttonPlay.classList.toggle("hide");
    buttonPause.classList.toggle("hide");
  };

  function reset() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
  };

  function coffee() {
    buttonSoundCoffee.classList.toggle("on");
    buttonSoundForest.classList.remove("on");
    buttonSoundFire.classList.remove("on");
    buttonSoundRain.classList.remove("on");
  };

  function forest() {
    buttonSoundForest.classList.toggle("on");
    buttonSoundFire.classList.remove("on");
    buttonSoundRain.classList.remove("on");
    buttonSoundCoffee.classList.remove("on");
  };

  function fire() {
    buttonSoundFire.classList.toggle("on");
    buttonSoundRain.classList.remove("on");
    buttonSoundCoffee.classList.remove("on");
    buttonSoundForest.classList.remove("on");
  };

  function rain() {
    buttonSoundRain.classList.toggle("on");
    buttonSoundCoffee.classList.remove("on");
    buttonSoundForest.classList.remove("on");
    buttonSoundFire.classList.remove("on");
  };

  return {
    reset,
    play,
    pause,
    coffee,
    fire,
    forest,
    rain
  };
};