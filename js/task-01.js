// const numberOfCategories = document.querySelectorAll("li.item").length;
// console.log(numberOfCategories)
// const catetegoriesItem = document.querySelectorAll('item')

// const nuberOfCatetegories = document.querySelectorAll('li.item').length;
// const categories = document.querySelectorAll('.item');
// console.log(`Number of categories: ${nuberOfCatetegories}`);
// for (let category of categories) {
//     console.log(`Category: ${category.querySelector("h2").textContent}`);
//     console.log(`Elements: ${category.querySelectorAll("li").length}`);
// }
const nuberOfCatetegories = document.querySelectorAll('li.item').length;
const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${nuberOfCatetegories}`);
for (let category of categories) {
    console.log(`Category: ${category.querySelector("h2").textContent}`);
    console.log(`Elements: ${category.querySelectorAll("li").length}`);
}
