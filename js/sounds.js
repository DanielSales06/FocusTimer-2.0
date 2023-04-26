export function Sounds() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  const forestAudio = new Audio("https://github.com/DanielSales06/FocusTimer-2.0/blob/main/audio/Floresta.wav?raw=true");
  const rainAudio = new Audio("https://github.com/DanielSales06/FocusTimer-2.0/blob/main/audio/Chuva.wav?raw=true");
  const coffeeAudio = new Audio("https://github.com/DanielSales06/FocusTimer-2.0/blob/main/audio/Cafeteria.wav?raw=true?raw=true");
  const fireAudio = new Audio("https://github.com/DanielSales06/FocusTimer-2.0/blob/main/audio/Lareira.wav?raw=true");

  forestAudio.loop = true;
  rainAudio.loop = true;
  coffeeAudio.loop = true;
  fireAudio.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  };

  function timeEnd() {
    kitchenTimer.play();
  };

  function toggleAudio(Audio) {
    let isPaused = Audio.paused;
    if (isPaused) {
      Audio.play()
    } else {
      Audio.pause()
    };
  };

  function forestPlay() {
    toggleAudio(forestAudio);
    rainAudio.pause();
    coffeeAudio.pause();
    fireAudio.pause();
  };

  function rainPlay() {
    toggleAudio(rainAudio);
    forestAudio.pause();
    coffeeAudio.pause();
    fireAudio.pause();
  };

  function coffeePlay() {
    toggleAudio(coffeeAudio);
    forestAudio.pause();
    rainAudio.pause();
    fireAudio.pause();
  };

  function firePlay() {
    toggleAudio(fireAudio);
    forestAudio.pause();
    rainAudio.pause();
    coffeeAudio.pause();
  };

  return {
    pressButton,
    timeEnd,
    forestPlay,
    rainPlay,
    firePlay,
    coffeePlay
  };
};