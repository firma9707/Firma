var slideIndex = 1;
showSlides(slideIndex);

// 다음/이전 제어
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// 현재 슬라이드 표시
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
