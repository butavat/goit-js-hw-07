console.log("task-01");

const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Total categories: ${categoriesItems.length}`);

categoriesItems.forEach((category) => {
  
  const categoryName = category.querySelector('h2').textContent;
  
  const categoryItemsCount = category.querySelectorAll('ul > li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItemsCount}`);
});