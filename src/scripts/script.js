const swiper = new Swiper('.prod-slider', {
    loop: false,
    slidesPerView: 1,
    navigation: {
        nextEl: '.prod-slider__next',
        prevEl: '.prod-slider__prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});

/* табы */

const tabs = document.querySelectorAll('.c__tab');

tabs?.forEach(tab =>{
  tab.addEventListener('click', ()=>{
    tab.classList.remove('c__tab--blue')
  })
})


var init = false;

function swiperCard() {
  if (window.innerWidth <= 1375) {
    if (!init) {
      init = true;
      swiper = new Swiper('.traid-slider', {
        loop: true,
        slidesPerView: 4,
        navigation: {
            nextEl: '.traid-slider__next',
          },
          /* breakpoints: {
            1367: {
                loop: false,
                slidesPerView: 14,
            }
          } */
    });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);


