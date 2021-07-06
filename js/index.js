const header = document.querySelector('.header');
const menuNav = document.querySelector('.header__content-1');
/* menu */
const menu = function () {
   const body = document.querySelector('.body');
   const header__menu = document.querySelector('.header__menu');
   const header__nav = document.querySelector('.header__nav');
   header__menu.addEventListener('click', function(e) {
      body.classList.toggle('header_bg');
      header__nav.classList.toggle('header__nav-show');
   });
}

/* slider */
const slider = function () { 
   const slides = document.querySelectorAll('.slide');
   const dotsContainer = document.querySelector('.dots');
   let curslide = 0;
   let maxSlide = slides.length;
   
   const createDots = function() {
      slides.forEach((_, i) => {
         dotsContainer.insertAdjacentHTML('beforeend', `<div class="dots_item" data-slide="${i}"></div>`)
      });  
   };

   const activateDots = function (slide) {
       const dots = document.querySelectorAll('.dots_item');
       dots.forEach(dot => {
          dot.classList.remove('dots_item--active');
       });
       document.querySelector(`.dots_item[data-slide="${slide}"]`)
       .classList.add("dots_item--active");
   };

   const goToSlide = function(slide) {
      slides.forEach((s,i)=>{
         s.style.transform = `translateX(${100 * (i - slide)}%)`;
      });
   }
   goToSlide(0);
   createDots();

   const nextSlide = function () {
      if(curslide === maxSlide - 1){
        curslide = 0;
      }else{
        curslide++;
      }
      goToSlide(curslide);
      activateDots(curslide);
    };

    const previewSlide = function() {
      if(curslide === 0){
        curslide = maxSlide - 1;
      }else{
        curslide--;
      }
      goToSlide(curslide);
      activateDots(curslide);
    }
    document.addEventListener('keydown', function(e) {
      if(e.key === 'ArrowLeft') previewSlide();
      if(e.key === 'ArrowRight') nextSlide();
    });

    dotsContainer.addEventListener('click', function(e) {
         if(e.target.classList.contains('dots_item')){
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDots(slide);
         }
    });
}
menu();
slider();
