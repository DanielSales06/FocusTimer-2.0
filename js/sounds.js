export function Sounds() {
  const forestAudio = new Audio("./Audio/Floresta.wav");
  const rainAudio = new Audio("./Audio/Chuva.wav");
  const coffeeAudio = new Audio("./Audio/Cafeteria.wav");
  const fireAudio = new Audio("./Audio/Lareira.wav");

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