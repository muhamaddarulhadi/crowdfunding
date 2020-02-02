$(function(){

    var mySwiper = new Swiper ('.swiper-container', {

        //loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        
        
                // AutoPlay
                autoplay: 6000,
                speed: 500,
                watchSlidesProgress: true,
                watchVisibility: true,

                // Loop
                loop: true,
                loopAdditionalSlides: 2,
                loopedSlides: 2,

                // Position
                slidesPerView: 'auto', //If "auto" or slidesPerView > 1, enable watchSlidesVisibility for lazy load
                //spaceBetween: 20,

                // Keyboard and Mousewheel
                keyboardControl: true,
                mousewheelControl: true,
                mousewheelForceToAxis: true, // just use the horizontal axis to 

                // Lazy Loading 
                watchSlidesVisibility: true,
                preloadImages: false,
                lazyLoading: true,
    });
});