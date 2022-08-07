let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action=\'decrement\']');
const incrementBtn = document.querySelector('button[data-action=\'increment\']');
const valuEl = document.querySelector('#value'); 

function decrement() {
    counterValue -= 1;
    valuEl.textContent = counterValue;
    // console.log(`score = ${counterValue}`);
}

function increment() {
    counterValue += 1;
    valuEl.textContent = counterValue;
    // console.log(`score = ${counterValue}`);
}

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

