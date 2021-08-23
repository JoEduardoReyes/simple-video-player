// cada que te refieras a un elemento de HTMl utiliza un simbolo de pesos para saber que es lo que estas manipulando.
const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}
function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}

$backward.addEventListener("click", handleBackward);

function handleBackward() {
  $video.currentTime -= 10;
}

$forward.addEventListener("click", handleForward);

function handleForward() {
  $video.currentTime += $video.currentTime + 10;
}
