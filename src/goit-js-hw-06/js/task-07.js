const slider = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
slider.addEventListener('input', onSliderInput)
function onSliderInput() {
   span.style.fontSize = `${slider.value}px`;
}