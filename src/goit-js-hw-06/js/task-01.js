// const listUl = document.querySelector('#categories');
// const item = listUl.children;
// const itemLength = item.length;
// const arrItem = [];
// console.log(`Number of categories: ${itemLength}`);
// for (let  i = 0; i < item.length; i++) {
//    arrItem.push(item[i]);
// };
// arrItem.forEach((elem) => {
//     let title = elem.querySelector('h2').textContent;
//     let elements = elem.querySelectorAll('li').length;
//     console.log(`Category: ${title}`);
//     console.log(`Elements: ${elements}`);
// });



// ------------------------------------------------------------------------- rework
const listUl = document.querySelector('#categories');
const item = listUl.children;
const itemLength = item.length;
const arrItem = [];

console.log(`Number of categories: ${itemLength}`);
for (let  i = 0; i < item.length; i++) {
   arrItem.push(item[i]);
};
arrItem.forEach((elem) => {
    let title = elem.firstElementChild.textContent;
    let elements = elem.lastElementChild.querySelectorAll('li').length;
     console.log(`Category: ${title}`);
     console.log(`Elements: ${elements}`);
});
 


 