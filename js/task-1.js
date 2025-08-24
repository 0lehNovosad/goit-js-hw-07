const countCategories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${countCategories.length}`);

countCategories.forEach(el => {
  const titleText = el.querySelector('h2');
  const countList = el.querySelectorAll('ul li');
  console.log(`Category: ${titleText.textContent}`);
  console.log(`Elements: ${countList.length}`);
});
