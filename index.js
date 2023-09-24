// Get references to the category boxes by their IDs
import { createApi } from 'unsplash-js';
const categoryElements = document.querySelectorAll('.category-box');
const classic = document.getElementById('classicArt');
const main = document.querySelector('#main');
const unsplash = createApi({
  accessKey: '6-pabx1sAkenHgCJdB2T3d5UOMgrYkvs4Tnvm0Q7xtM',
});



// Function to execute when a category is clicked
function handleCategoryClick(category) {
  console.log(`Category ${category} clicked! Add your code here to handle this category.`);

  // Add your code to load images for the selected category
  unsplash.search
    .getPhotos({
      query: category, // Pass the category name as the query
      page: 1,
      perPage: 15,
      orientation:"squarish",
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getUrls = photos.map((photo) => {
          return `<img src="${photo.urls.small}" alt="${photo.alt_description}" />`;
        });
        main.innerHTML = getUrls.join('');
      }
    });
}




// Add click event listeners to all category boxes
categoryElements.forEach((categoryElement) => {
  categoryElement.addEventListener('click', () => {
    const categoryName = categoryElement.textContent.trim(); // Get the text content of the category box
    handleCategoryClick(categoryName); // Pass the category name
  });
});


const homeLink = document.getElementById('homeLink');
const categoryLink = document.getElementById('categoryLink');

function handleHomeLinkClick() {
  window.location.href = 'Home.html';
  // Add your code to show the home content (if any)
  // For example, you can load the default content when the page loads
}
function handleCategoryLinkClick(){
  window.location.href='Home.html'
}

homeLink.addEventListener('click', handleHomeLinkClick);
categoryLink.addEventListener('click', handleCategoryLinkClick);