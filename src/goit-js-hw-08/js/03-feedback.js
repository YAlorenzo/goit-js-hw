import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');
form.addEventListener('input',  throttle(onFormInput,500));
form.addEventListener('submit', onFormSupmit);
formValue();
function onFormInput(event) {
    const email = inputEmail.value;
    const message = textareaMessage.value;

    const formData = {
        email,
        message,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
function onFormSupmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.clear();
}








function formValue() {
    const objFormData =  JSON.parse(localStorage.getItem("feedback-form-state"));
    if (objFormData) {
        inputEmail.value = objFormData.email;
        textareaMessage.value = objFormData.message;
    }
    
}
