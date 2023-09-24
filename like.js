// JavaScript code for handling likes and local storage
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');
    
    // Load liked paintings from local storage
    const likedPaintings = JSON.parse(localStorage.getItem('likedPaintings')) || [];

    // Function to toggle like status and update local storage
    function toggleLikeStatus(index) {
        const isLiked = likedPaintings.includes(index);
        if (isLiked) {
            likedPaintings.splice(likedPaintings.indexOf(index), 1); // Remove from liked paintings
        } else {
            likedPaintings.push(index); // Add to liked paintings
        }
        localStorage.setItem('likedPaintings', JSON.stringify(likedPaintings)); // Save to local storage
        updateLikeButtons();
    }

    // Function to update like buttons based on local storage
    function updateLikeButtons() {
        likeButtons.forEach((button, index) => {
            const isLiked = likedPaintings.includes(index);
            button.textContent = isLiked ? 'Liked' : 'Like';
        });
    }

    // Attach click event listeners to like buttons
    likeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            toggleLikeStatus(index);
        });
    });

    // Initialize like buttons
    updateLikeButtons();
});
