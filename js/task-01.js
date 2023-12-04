console.log("task-01");

const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.children;

console.log(`Total categories: ${categoriesItems.length}`);

for (const category of categoriesItems) {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelector('ul').children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItemsCount}`);
}