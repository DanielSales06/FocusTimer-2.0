export function Sounds() {
  const forestAudio = new Audio("https://github.com/DanielSales06/FocusTimer-2.0/blob/main/audio/Floresta.wav?raw=true");
  const rainAudio = new Audio("https://github.com/DanielSales06/FocusTimer-2.0/blob/main/audio/Chuva.wav?raw=true");
  const coffeeAudio = new Audio("https://github.com/DanielSales06/FocusTimer-2.0/blob/main/audio/Cafeteria.wav?raw=true?raw=true");
  const fireAudio = new Audio("https://github.com/DanielSales06/FocusTimer-2.0/blob/main/audio/Lareira.wav?raw=true");

  forestAudio.loop = true;
  rainAudio.loop = true;
  coffeeAudio.loop = true;
  fireAudio.loop = true;

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
    forestPlay,
    rainPlay,
    firePlay,
    coffeePlay
  };
};