import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
const input = document.querySelector('input#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const spanDays = document.querySelector('[data-days]');
const spanHours = document.querySelector('[data-hours]');
const spanMinutes = document.querySelector('[data-minutes]');
const spanSeconds = document.querySelector('[data-seconds]');



function addLeadingZero(value){
    return String(value).padStart(2, '0');
      }

function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days =  addLeadingZero(Math.floor(ms / day));
        const hours = addLeadingZero(Math.floor((ms % day) / hour));
        const minutes =  addLeadingZero(Math.floor(((ms % day) % hour) / minute));
        const seconds =  addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    
         
      spanDays.textContent = days;
      spanHours.textContent = hours;
      spanMinutes.textContent = minutes;
      spanSeconds.textContent = seconds;
    
    return { days, hours, minutes, seconds };
}


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);

      if (options.defaultDate > selectedDates[0]) {
          window.alert("Please choose a date in the future");
      }
      if (options.defaultDate < selectedDates[0]) {
          btnStart.disabled = false;
      }
    
      btnStart.addEventListener("click", () => {
          
          let timerId = setInterval(() => { 
              const newDate = new Date();
              let ms = selectedDates[0] - newDate;
              if (ms <= 0) {
                  clearInterval(timerId);
              }
              else {
                  convertMs(ms);
              }   
          }, 1000);
     });
    },
};
flatpickr(input, options);




