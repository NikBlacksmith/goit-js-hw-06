const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfElements = document.querySelector(`#ingredients`);
const items = ingredients.map((e) => {
  let element = document.createElement('li');
  element.textContent = e;
  element.classList.add('item');
  return element;
})
listOfElements.append(...items);
console.log(listOfElements)