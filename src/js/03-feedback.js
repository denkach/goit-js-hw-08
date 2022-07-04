import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[type="email"]'),
    message: document.querySelector('textarea[name="message"]'),
}


const { form, email, message } = refs;
const STORAGE_KEY = "feedback-form-state";
let formObj = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

pageUpdate();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
    formObj[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formObj));
}

function onFormSubmit(e) {
    e.preventDefault();
    if (email.value == '' || message == '') {
        alert('Заповніть поля.');
        return;
    }

    console.log(formObj);
    
    formObj = {};
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function pageUpdate() {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (storageData) {
        email.value = storageData.email || '';
        message.value = storageData.message || '';
    }
}

