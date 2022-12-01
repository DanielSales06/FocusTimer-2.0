export default function() {
  const forestAudio = new Audio("./Audio/Floresta.wav")
  const rainAudio = new Audio("./Audio/Chuva.wav")
  const coffeeAudio = new Audio("./Audio/Cafeteria.wav")
  const fireAudio = new Audio("./Audio/Lareira.wav")

  forestAudio.loop = true
  rainAudio.loop = true
  coffeeAudio.loop = true
  fireAudio.loop = true

  return {
  forestAudio,
  rainAudio,
  coffeeAudio,
  fireAudio
  }
}