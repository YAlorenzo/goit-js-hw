let counterValue = 0;
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
btnIncrement.addEventListener('click', () => {
    counterValue = counterValue + 1;
    value.textContent = counterValue;
});
btnDecrement.addEventListener('click', () => {
    counterValue = counterValue - 1;
    value.textContent = counterValue;
});