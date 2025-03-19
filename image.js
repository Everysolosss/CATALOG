let currentVisibleButton = null; // Track the currently visible button

// Function to generate image cards dynamically
function generateImageCards() {
  const gallery = document.querySelector('.gallery');

  for (let i = 1; i <= 40; i++) {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');

    const image = document.createElement('img');
    image.src = `images/image${i}.jpg`; // Updated path
    image.alt = `Image ${i}`;
    image.classList.add('downloadable-image');

    const downloadButton = document.createElement('button');
    downloadButton.classList.add('download-btn');
    downloadButton.setAttribute('data-image', `images/image${i}.jpg`); // Updated path
    downloadButton.textContent = 'Download';

    // Append image and button to the card
    imageCard.appendChild(image);
    imageCard.appendChild(downloadButton);

    // Append the card to the gallery
    gallery.appendChild(imageCard);
  }
}

// Call the function to generate image cards
generateImageCards();

// Add click event to all images
document.querySelectorAll('.downloadable-image').forEach(image => {
  image.addEventListener('click', function () {
    const downloadButton = this.nextElementSibling;

    // Hide the previously visible button (if any)
    if (currentVisibleButton && currentVisibleButton !== downloadButton) {
      currentVisibleButton.classList.remove('visible');
      setTimeout(() => {
        currentVisibleButton.style.display = 'none';
      }, 500); // Match the duration of the fade-out animation
    }

    // Toggle the current button
    if (downloadButton.classList.contains('visible')) {
      downloadButton.classList.remove('visible');
      setTimeout(() => {
        downloadButton.style.display = 'none';
      }, 500);
      currentVisibleButton = null; // No button is visible now
    } else {
      downloadButton.style.display = 'block';
      setTimeout(() => {
        downloadButton.classList.add('visible');
      }, 10); // Small delay to allow display: block to take effect
      currentVisibleButton = downloadButton; // Update the currently visible button
    }
  });
});

// Add click event to all download buttons
document.querySelectorAll('.download-btn').forEach(button => {
  button.addEventListener('click', function (event) {
    event.stopPropagation();
    const imageUrl = this.getAttribute('data-image');
    const customName = "Niroshan_Image.jpg"; // Set your custom name here

    // Check if the image URL is valid
    if (!imageUrl) {
      console.error("Image URL is missing.");
      return;
    }

    // Download the image
    downloadImage(imageUrl, customName);
  });
});

// Function to download the image
function downloadImage(imageUrl, customName) {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = customName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
