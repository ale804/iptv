//Variables
const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');

//Eventos
$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
//Cuando se carguen los metadatos del video, consultamos la duración para establecer el progressbar
$video.addEventListener('loadedmetadata',handleLoaded);
//Cuando avanza el video
$video.addEventListener('timeupdate',handleTimeUpdate);
//Al mover la barra de progreso
$progress.addEventListener('input',haddleInput);

//Funciones
function handlePlay(){
    $video.play();
    $play.hidden = true
    $pause.hidden = false
}

function handlePause(){
    $video.pause();
    $play.hidden = false
    $pause.hidden = true
}

function handleBackward(){
    $video.currentTime -= 10;
}

function handleForward(){
    $video.currentTime += 10;
}

function handleLoaded(){
    $progress.max = $video.duration;
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime;
}

function haddleInput(){
    $video.currentTime = $progress.value;
}