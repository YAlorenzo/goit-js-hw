import Notiflix from 'notiflix';
const inputFirstDelay = document.querySelector('[name="delay"]');
const inputDelayStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]'); 
const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
 
  const amount = inputAmount.value;
  let firstDelay = inputFirstDelay.value;
  const delayStep = inputDelayStep.value;

  for (let i = 1; i <= amount; i++){
    let step = Number(firstDelay);

    createPromise(i, step).then(onFulfill).catch(onReject);

    step = Number(firstDelay) + Number(delayStep);
    firstDelay = step; 
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
});
}

function onFulfill(value){
    Notiflix.Notify.success(value);
}

function onReject(error) {
   Notiflix.Notify.failure(error);
}
