function playSound(e){
    // console.log(e.keyCode);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(key);
    if(!audio)
        return;
    audio.currentTime=0;//rewind to start... 
    audio.play();
    // key.addClass('playing');
    key.classList.add('playing');
    
}
function removeTransition(e){
    // console.log(e);
    if(e.propertyName != 'transform') return;
    // console.log(this); points to event listener - key
    this.classList.remove('playing');
}
const keys=document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);