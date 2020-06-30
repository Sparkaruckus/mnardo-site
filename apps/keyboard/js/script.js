//Play with Keystrokes
function playNote(e){
  const key = document.querySelector(`.key[data-key="${e.keyCode}"] audio`);
  const keyActive = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (key){
    key.currentTime = 0;
    key.play();
  }
  if (keyActive){
    keyActive.classList.add("key-input");
  }
};

//Remove Class
function removeTransition(e) {
  const keyObtain = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (keyObtain){
    keyObtain.classList.remove("key-input");
  }
}

//Play with Mouse 
function onLoad() {
  const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    //sounds
    pads.forEach((pad, index) => {
      pad.addEventListener("click", function() {
        sounds[index].currentTime = 0;
        sounds[index].play();
      });
    });
}

window.addEventListener('load', onLoad);
window.addEventListener('keydown', playNote);
window.addEventListener('keyup', removeTransition);