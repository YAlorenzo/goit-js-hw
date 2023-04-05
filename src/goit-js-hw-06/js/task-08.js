const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const formElem = event.currentTarget.elements;
    const email = formElem.email.value;
    const password = formElem.password.value;
    if (email.length === 0 || password.length === 0) {
        alert('Please complete all fields!')
    }
    const formData = {
        email,
        password,
    }
    console.log(formData);
}
