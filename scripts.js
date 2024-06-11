//Back to top button
let mybutton = document.getElementById("backToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//Carousel Code
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = Math.floor(items.length / 2);

    function updateCarousel() {
        const carouselWidth = carousel.offsetWidth;
        const itemWidth = items[currentIndex].offsetWidth;
        const offset = -currentIndex * itemWidth + (carouselWidth - itemWidth) / 2;
        
        items.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });

        carousel.style.transform = `translateX(${offset}px)`;
    }

    window.addEventListener('resize', updateCarousel);
    updateCarousel();

    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 3000);
});




//Mobile Nav Button
//document.addEventListener('DOMContentLoaded', function () {
//    const mobileMenu = document.getElementById('mobile-menu');
//    const navbar = document.querySelector('.navbar');

//    mobileMenu.addEventListener('click', function () {
//        navbar.classList.toggle('expanded');
//    });
//});