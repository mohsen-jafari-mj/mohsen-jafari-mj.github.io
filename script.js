const imageCount = 14;
const imagesFolder = "image/";
let slideIndex = 1;

// Fetch and create image elements in a loop
const slideshowContainer = document.getElementById("slideshow-container");
for (let i = 1; i <= imageCount; i++) {
    const image = new Image();
    image.src = `${imagesFolder}image${i}.jpg`;
    image.className = "mySlides";
    image.width = 300;
    image.height = 200;
    slideshowContainer.appendChild(image);
}

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}