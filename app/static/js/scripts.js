let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {slideIndex = 0}   
    if (n < 0) {slideIndex = slides.length - 1}

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show');
    }

    slides[slideIndex].classList.add('show');
}