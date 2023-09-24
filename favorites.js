// JavaScript code to load liked images and create image cards
function loadLikedImages() {
    const favoritesContainer = document.getElementById('favoritesContainer');
    favoritesContainer.innerHTML = ''; // Clear previous liked images

    // Get the liked images from local storage
    const likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];

    likedImages.forEach((imageUrl) => {
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Liked Image';
        img.width = 420; // Set the width to 400px
        img.height = 420; // Set the height to 400px

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            // Call a function to remove the image URL from local storage and reload the liked images
            removeLikedImage(imageUrl);
            loadLikedImages(); // Reload the liked images after removal
        });

        const timestamp = document.createElement('div');
        // Replace with the actual timestamp

        imageCard.appendChild(img);
        imageCard.appendChild(timestamp);
        imageCard.appendChild(removeButton);
        favoritesContainer.appendChild(imageCard);
    });
}

// Call the function to load liked images when the favorites page is opened
loadLikedImages();



// Function to remove an image URL from local storage
function removeLikedImage(imageUrl) {
    // Get the liked images from local storage
    const likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];

    // Find the index of the image URL in the array
    const index = likedImages.indexOf(imageUrl);

    if (index !== -1) {
        // Remove the image URL from the array
        likedImages.splice(index, 1);

        // Update the local storage with the modified array
        localStorage.setItem('likedImages', JSON.stringify(likedImages));
    }
}
removeButton.addEventListener('click', () => {
    // Debugging: Check if the button click event is being triggered
    console.log('Remove button clicked');

    // Call the function to remove the image URL from local storage and reload the liked images
    removeLikedImage(imageUrl);
    loadLikedImages(); // Reload the liked images after removal
});
