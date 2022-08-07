const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const respondOnChanges = () => {
    textEl.style.fontSize = `${inputEl.value}px`;
}

inputEl.addEventListener('input', respondOnChanges);









