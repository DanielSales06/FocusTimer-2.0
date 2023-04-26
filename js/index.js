import { Controls } from "./controls.js";
import { Events } from "./events.js";
import { Timer } from "./timer.js";
import { Sounds } from "./sounds.js";

import {
  buttonPlay,
  buttonPause,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundFire,
  buttonSoundCoffee,
  minutesDisplay,
  secondsDisplay

} from "./elements.js";

const controls = Controls ({
  buttonPlay,
  buttonPause,
  buttonSoundForest,
  buttonSoundCoffee,
  buttonSoundRain,
  buttonSoundFire
});

const timer = Timer ({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
});

const sounds = Sounds();

Events({controls, timer, sounds})

