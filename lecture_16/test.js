const synth = window.speechSynthesis;

let utter = new SpeechSynthesisUtterance("Hello Cruel world");

synth.speak(utter);