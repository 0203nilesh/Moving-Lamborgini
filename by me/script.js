console.log('Hello world');
let button=document.getElementById('btn');
let audioElement= new Audio('sound.mp3');
let leftwheel= document.getElementById('left-wheel');
let rightwheel= document.getElementById('right-wheel');
let animations= document.getElementById('car-animation');
button.addEventListener('click' , ()=>{
    console.log('clicked-ones');
    audioElement.play();
    animations.style.animation="moving 3s ease 1";
    leftwheel.style.translate= "rotate(180deg)";
    rightwheel.style.translate= "rotate(180deg)";
    setTimeout(() => {
        audioElement.pause();
        animations.style.animation= '';
    }, 3500);
})  