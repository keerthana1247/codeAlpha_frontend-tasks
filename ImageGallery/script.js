let images = [
    "https://tse3.mm.bing.net/th/id/OIP.KfIn06IgnCOP4cyVnHvqXwHaE8?pid=Api&P=0&h=180",
    "https://images.pexels.com/photos/32377242/pexels-photo-32377242.jpeg?cs=srgb&dl=pexels-jordicosta-32377242.jpg&fm=jpg",
    "https://tse1.mm.bing.net/th/id/OIP.Q7FpD8pmdKWC8G5alykJwwHaE1?pid=Api&P=0&h=180",
    "https://images.pexels.com/photos/33866837/pexels-photo-33866837.jpeg?cs=srgb&dl=pexels-marri-shyam-366418-33866837.jpg&fm=jpg"
];

let currentIndex = 0;

let imgElement = document.getElementById("galleryImage");

// show first image
function showImage() {
    imgElement.src = images[currentIndex];
}

// next image
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage();
}

// previous image
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage();
}

// load first image when page opens
showImage();