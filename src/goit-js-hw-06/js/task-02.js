const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arr = [];
 ingredients.forEach((elem) => {
   let itemCreate = document.createElement('li');
   itemCreate.classList.add('item')
   itemCreate.textContent = elem;
   arr.push(itemCreate);
   
 })
 document.querySelector('#ingredients').append(...arr);  