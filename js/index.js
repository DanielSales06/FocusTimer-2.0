import Sound from "./sounds.js"

const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonMinutesAdd = document.querySelector(".minutesAdd")
const buttonMinutesLess = document.querySelector(".minutesLess")
const buttonFlorest = document.querySelector(".florest")
const buttonRain = document.querySelector(".rain")
const buttonCoffee = document.querySelector(".coffee")
const buttonFire = document.querySelector(".fire")
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
let updateMinutes

const sound = Sound()

function toggleAudioPlay(myAudio) {
  let isPaused = myAudio.paused
  if (isPaused) {
    myAudio.play()
  } else {
    myAudio.pause()
  }
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown(){
  timerTimeOut = setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <=0) {
      resetTimer()
      return
    }

    if( seconds <= 0 ) {
      updateDefault()
      seconds = 60

      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function updateDefault(minutes) {
  updateMinutes = minutes
}

function increaseMinutes() {
  minutes = minutes < 60 ? Number(minutes) + 5 : (minutes = 5)
  
  updateTimerDisplay(minutes, 0)
  updateDefault(minutes)
}

function decreaseMinutes() {
  minutes = minutes > 5 ? Number(minutes) - 5 : (minutes = 0)
  
  updateTimerDisplay(minutes, 0)
  updateDefault(minutes)
}

buttonPlay.addEventListener("click", function() {
  buttonPlay.classList.add("onFocus")
  buttonStop.classList.remove("onFocus")
  countdown()
})

buttonStop.addEventListener("click", function() {
  buttonStop.classList.add("onFocus")
  buttonPlay.classList.remove("onFocus")
  resetTimer()
})

buttonMinutesAdd.addEventListener("click", function() {
  increaseMinutes()
})

buttonMinutesLess.addEventListener("click", function() {
  decreaseMinutes()
})

buttonFlorest.addEventListener("click", function() {
  buttonFlorest.classList.toggle("onFocus")
  buttonRain.classList.remove("onFocus")
  buttonCoffee.classList.remove("onFocus")
  buttonFire.classList.remove("onFocus")
  toggleAudioPlay(sound.forestAudio)
  sound.rainAudio.pause()
  sound.coffeeAudio.pause()
  sound.fireAudio.pause()
})

buttonRain.addEventListener("click", function() {
  buttonFlorest.classList.remove("onFocus")
  buttonRain.classList.toggle("onFocus")
  buttonCoffee.classList.remove("onFocus")
  buttonFire.classList.remove("onFocus")
  toggleAudioPlay(sound.rainAudio)
  sound.forestAudio.pause()
  sound.coffeeAudio.pause()    
  sound.fireAudio.pause()
})

buttonCoffee.addEventListener("click", function() {
  buttonFlorest.classList.remove("onFocus")
  buttonRain.classList.remove("onFocus")
  buttonCoffee.classList.toggle("onFocus")
  buttonFire.classList.remove("onFocus")
  toggleAudioPlay(sound.coffeeAudio)
  sound.rainAudio.pause()
  sound.forestAudio.pause()
  sound.fireAudio.pause()
})

buttonFire.addEventListener("click", function() {
  buttonFlorest.classList.remove("onFocus")
  buttonRain.classList.remove("onFocus")
  buttonCoffee.classList.remove("onFocus")
  buttonFire.classList.toggle("onFocus")
  toggleAudioPlay(sound.fireAudio)
  sound.rainAudio.pause()
  sound.coffeeAudio.pause()
  sound.forestAudio.pause()
})