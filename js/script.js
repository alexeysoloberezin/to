$(document).ready(function(){
  $('.mainslider__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    swipe: false,
    lazyLoad: 'progressive' ,
    
    autoplay: true,
     autoplaySpeed: 4000,
  });
  $('.header__link-drp').click(function(){
    $('.header__list-drop').toggleClass('drop-active');
    $('.header__link-drp').toggleClass('dropItem-active')
  });
  $('.burger').click(function(){
    $('.header__nav').addClass('header__nav-active');
    
  });
  $('.header__burger-close').click(function(){
    $('.header__nav').removeClass('header__nav-active');
  });


});

if(matchMedia){
  var screen = window.matchMedia("(max-width:900px)");
  screen.addListener(changes);
  changes(screen);
}
function changes(screen){
  if (screen.matches){
    $('.help__wrapper').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      dots: true,    
      infinite: false, 
      // autoplay: true,
      //  autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
           
          }
        }
      ]
    });
  } else{
   
  }
}