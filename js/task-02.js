const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const insertedList = ingredients.map(ingredient => {
  const insertedItem = document.createElement('li');
  // console.log(insertedItem);
  insertedItem.classList.add('item');
  insertedItem.textContent = ingredient;

  return insertedItem;
});

listEl.append(...insertedList);

