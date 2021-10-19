const currentImage = document.querySelector("#image");

const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];

function changeImage () {
    let randomNumber = Math.floor(Math.random() * images.length);
    console.log(randomNumber);
    currentImage.src = images[randomNumber];
}    