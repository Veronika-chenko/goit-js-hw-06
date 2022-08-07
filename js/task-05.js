const inputEl = document.querySelector('#name-input');
const nameLabelEl = document.querySelector('#name-output');


function onInputChange(event) {
    if (inputEl.value === '') {
        nameLabelEl.textContent = 'Anonymous';
    } else {
        nameLabelEl.textContent = event.currentTarget.value;
    }
    // console.log(event.currentTarget.value);
};

inputEl.addEventListener('input', onInputChange);













