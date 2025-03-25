let currentVisibleButton = null;
const imageUrls = [
    'https://i.ibb.co/pV3PXCj/9473.jpg',
    'https://i.ibb.co/pBxTJfQH/4673.jpg',
    'https://i.ibb.co/yc2xJh4f/3429.jpg',
    'https://i.ibb.co/qLwrpr5v/472.jpg',
    'https://i.ibb.co/VPq4sK5/1991.jpg',
    'https://i.ibb.co/WWzndPpf/2344.jpg',
    'https://i.ibb.co/hJBPmwD4/2311.jpg',
    'https://i.ibb.co/1JRt3ywT/5005.jpg',
    'https://i.ibb.co/76RgRzd/2401.jpg',
    'https://i.ibb.co/chwg8Y6M/3997.jpg',
    'https://i.ibb.co/HDFLqSjk/3801.jpg',
    'https://i.ibb.co/KcbhP68V/5780.jpg',
    'https://i.ibb.co/CKn1nRXH/5274.jpg',
    'https://i.ibb.co/7t336d43/2991.jpg',
    'https://i.ibb.co/vCcS9vkJ/5687.jpg',
    'https://i.ibb.co/994GH7JJ/7275.jpg',
    'https://i.ibb.co/jPkpVY6F/3665.jpg',
    'https://i.ibb.co/nsxhkNDz/9663.jpg',
    'https://i.ibb.co/Ndvq6dDN/4862.jpg',
    'https://i.ibb.co/Kj65B76N/8817.jpg',
    'https://i.ibb.co/ZpRs6k57/8414.jpg',
    'https://i.ibb.co/gLdVQpVr/8578.jpg',
    'https://i.ibb.co/rhGtCj9/6401.jpg',
    'https://i.ibb.co/Q3wH9qGb/750.jpg',
    'https://i.ibb.co/svPkTLYW/5055.jpg',
    'https://i.ibb.co/SDfcZdnX/6328.jpg',
    'https://i.ibb.co/LVQZD9v/2929.jpg',
    'https://i.ibb.co/nMVnwV2p/2157.jpg',
    'https://i.ibb.co/7xmBf7Wk/2112.jpg',
    'https://i.ibb.co/H6v6vMc/1683.jpg',
    'https://i.ibb.co/whMZJJSJ/7022.jpg',
    'https://i.ibb.co/Rpf7kSkZ/4401.jpg',
    'https://i.ibb.co/37xmBf7Wk/2112.jpg',
    'https://i.ibb.co/spsQ1DK0/275.jpg'
];

function generateImageCards() {
    const gallery = document.querySelector('.gallery');
    
    imageUrls.forEach((imageUrl, index) => {
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Image ' + (index + 1);
        img.classList.add('downloadable-image');
        
        const button = document.createElement('button');
        button.classList.add('download-btn');
        button.setAttribute('data-image', imageUrl);
        button.textContent = 'Download';
        
        imageCard.appendChild(img);
        imageCard.appendChild(button);
        gallery.appendChild(imageCard);
    });
}

generateImageCards();

document.querySelectorAll('.downloadable-image').forEach(image => {
    image.addEventListener('mouseover', function() {
        const button = this.nextElementSibling;
        
        if (currentVisibleButton && currentVisibleButton !== button) {
            currentVisibleButton.style.display = 'none';
            setTimeout(() => {
                currentVisibleButton.style.opacity = '0';
            }, 200);
        }
        
        if (button.style.display === 'none') {
            button.style.display = 'block';
            setTimeout(() => {
                button.style.opacity = '1';
            }, 200);
            currentVisibleButton = null;
        } else {
            button.style.display = 'block';
            setTimeout(() => {
                button.style.opacity = '1';
            }, 10);
            currentVisibleButton = button;
        }
    });
});

document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation();
        const imageUrl = this.getAttribute('data-image');
        const fileName = 'Niroshan_Image_' + Date.now() + '.jpg';
        
        if (!imageUrl) {
            console.error('Image URL is missing.');
            return;
        }
        
        downloadImage(imageUrl, fileName);
    });
});

function downloadImage(imageUrl, fileName) {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
