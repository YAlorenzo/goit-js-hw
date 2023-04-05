const input = document.querySelector('#validation-input');
input.addEventListener('blur', onCorrectInput)
function onCorrectInput() {
    if (input.value.length === 6) {
        input.style.borderColor = 'green';
    }
    else {
         input.style.borderColor = 'red';
    }
}