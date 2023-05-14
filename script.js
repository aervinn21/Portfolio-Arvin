const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    effect: 'coverflow',
    grabCursor: true,
    autoplay: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: false,
    },
  
    
    
  });