// popup.js

let currentPopup = null; // Store the reference to the current popup

// Get references to the image elements
const images = document.querySelectorAll('#imageContainer img');

// Function to create and display a popup with information
function createPopup(index) {
    // Close the current popup if it exists
    if (currentPopup) {
        document.body.removeChild(currentPopup);
        currentPopup = null;
    }

    // Create a new popup
    const popup = document.createElement('div');
    popup.classList.add('popup');

    // You can customize the popup content here
    popup.innerHTML = `
        <div style="display: flex; flex-direction: column;">
            <button class="close-button">X</button>
            <h2>Painting ${index + 1}</h2>
            <p>Artist: John Doe</p>
            <p>Year: 2023</p>
            <p>Medium: Oil on Canvas</p>
            <p>Description: Lorem ipsum dolor sit amet...</p>
        </div>
    `;

    // Append the popup to the body
    document.body.appendChild(popup);

    // Add a click event listener to close the popup when the close button is clicked
    const closeButton = popup.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        document.body.removeChild(popup);
        currentPopup = null;
    });

    // Store the reference to the current popup
    currentPopup = popup;
}

// Add click event listeners to the images
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        createPopup(index);
    });
});
