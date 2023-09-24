// JavaScript code to load images and create like buttons
function loadImages(category) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear previous images

    for (let i = 0; i < 15; i++) {
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');

        const img = document.createElement('img');
        img.src = `https://source.unsplash.com/featured/?${category}&${i}`;
        img.alt = `Image ${i}`;

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        likeButton.textContent = '❤️'; // Default heart icon

        // Add a click event listener to handle liking/unliking and save to local storage
        likeButton.addEventListener('click', () => {
            toggleLikeState(likeButton, img.src);
        });

        imageCard.appendChild(img);
        imageCard.appendChild(likeButton);
        imageContainer.appendChild(imageCard);
    }
}

// Function to toggle the like state of an image
// Function to toggle the like state of an image and change the like button icon
function toggleLikeState(likeButton, imageUrl) {
    if (likeButton.textContent === '❤️') {
        likeButton.textContent = '✅'; // Change to a different heart icon when liked
        const timestamp = new Date().toLocaleString();
        saveLikedImage(imageUrl, timestamp); // Save the liked image in local storage
    } else {
        likeButton.textContent = '❤️'; // Change back to the heart icon when unliked
        removeLikedImage(imageUrl); // Remove the unliked image from local storage
    }
}


// Function to save a liked image in local storage
function saveLikedImage(imageUrl) {
    console.log("saved");
    // Get the existing liked images from local storage (if any)
    const likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];
    // Add the new liked image URL to the list
    likedImages.push(imageUrl);
    // Save the updated liked images list back to local storage
    localStorage.setItem('likedImages', JSON.stringify(likedImages));
}

// Function to remove an unliked image from local storage
function removeLikedImage(imageUrl) {
    // Get the existing liked images from local storage
    const likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];
    // Remove the unliked image URL from the list
    const updatedLikedImages = likedImages.filter((url) => url !== imageUrl);
    // Save the updated liked images list back to local storage
   
    localStorage.setItem('likedImages', JSON.stringify(updatedLikedImages));
}

// ... (rest of the code for addToLocalStorage, removeFromLocalStorage, isImageLiked)

// Load images based on the category specified in the HTML page
const category = document.getElementById('imageContainer').getAttribute('data-category');
loadImages(category);
