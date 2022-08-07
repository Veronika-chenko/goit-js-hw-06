const changeColorBtnEl = document.querySelector('.change-color');
const bodyStylesEl = document.body.style;
const spanColorValueEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', changeBodyBgColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyBgColor() {
  bodyStylesEl.backgroundColor = getRandomHexColor()
  spanColorValueEl.textContent = bodyStylesEl.backgroundColor;
}



