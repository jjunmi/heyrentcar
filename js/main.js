let footerYear;
let sectionEl; 
let headerEl;

function setElems () {
    footerYear = document.querySelector(".footer-year");
    sectionEl = document.querySelectorAll('.sec-animate');
    headerEl = document.querySelector('#header');
}

window.addEventListener('load',() => {
    setElems();

    // Header-bg-scroll
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            headerEl.style.backgroundColor = "#000";
            headerEl.style.borderBottom = "0";
        }else{
            headerEl.style.backgroundColor = "transparent";
        }
    })
    // Main-section-scroll-show
    const io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry) {
          if(!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add('show');
        });
      });
      sectionEl.forEach(function(el){
        io.observe(el);
      });

    // Footer
    const thisYear = new Date().getFullYear();
    footerYear.innerText = thisYear;
})
$(document).ready(function() {
    new Swiper(".car-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints: {
        1020: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        },
        }
    });
});