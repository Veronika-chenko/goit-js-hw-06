const allItemEl = document.querySelectorAll('#categories .item');

console.log('Number of categories: ' + allItemEl.length);

allItemEl.forEach( item => {
    console.log('Category: ' + item.firstElementChild.textContent);
    console.log('Elements: ' + item.querySelectorAll('li').length);
});