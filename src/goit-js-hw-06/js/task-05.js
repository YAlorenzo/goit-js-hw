const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
   input.addEventListener('input',  onTextInput) 
function onTextInput() {
    if (input.value.length !== 0) {
        
         span.textContent = input.value;
    }
    else {
        span.textContent = 'Anonymous';
    }
}

