$(document).ready(function(){  
  
  const navOffset = $('.header__nav').offset().top;
  $(window).scroll(function(){
    
    const scrolled = $(this).scrollTop();

    if (scrolled > navOffset){
      $('#wrapper').addClass('nav-fixed');
    } else if (scrolled < navOffset){
      $('#wrapper').removeClass('nav-fixed');
    }
  });


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
 
  $('.hits__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false, 
    swipe: false,
    lazyLoad: 'progressive' ,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
         
        }
      },
      {
        breakpoint: 780,
        settings: {
          swipe: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
         
        }
      },
      {
        breakpoint: 440,
        settings: {
          swipe: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      }
    ]
  });
  $('.news__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false, 
    swipe: false,
    lazyLoad: 'progressive' ,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          swipe: true,
          arrows: false,
         
        }
      },
      {
        breakpoint: 860,
        settings: {
          swipe: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
         
        }
      },
      {
        breakpoint: 450,
        settings: {
          swipe: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      }
    ]
  });
  
  const ratingItemsList = document.querySelectorAll('.reviews__star');
  const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

  ratingItemsArray.forEach(item => {
      item.addEventListener('click', () => {
        const { itemValue } = item.dataset
        item.parentNode.dataset.totalValue = itemValue;

        // request itemValue
      });
  });
  // if(matchMedia){
  //   var screen = window.matchMedia("(max-width:900px)");
  //   screen.addListener(changes);
  //   changes(screen);
  // }

  //   if (screen.matches){
  //     $('.help__wrapper').slick({
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       arrows: false,
  //       dots: true,    
  //       infinite: false, 
  //       // autoplay: true,
  //       //  autoplaySpeed: 1000,
  //       responsive: [
  //         {
  //           breakpoint: 540,
  //           settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
             
  //           }
  //         }
  //       ]
  //     });
  //   }
  
  
    
    $('.taobao__trigers').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      swipe: false,
      lazyLoad: 'progressive' ,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            swipe: true,
            dots: true,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: true,
            dots: true,
          }
        },
      ]
    });
  
    $('.reviews__list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      swipe: false,
      lazyLoad: 'progressive' ,
      infinite: false,
      responsive: [
        {
          breakpoint: 957,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            swipe: true,
            dots: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: true,
            dots: true,
          }
        }
      ]      
    });
    $('.help__wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      swipe: false,
      lazyLoad: 'progressive' ,
      infinite: false,
      responsive: [
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1.5,
            swipe: true,
            dots: true,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: true,
            dots: true,
          }
        }
        ,
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 0.5,
            slidesToScroll: 0.5,
            swipe: true,
            dots: true,
          }
        }
      ]      
    });
    //------------------------ Слайдеры
  $('.header__link-drp').click(function(){
      $('.header__list-drop').toggleClass('drop-active');
      $('.header__link-drp').toggleClass('dropItem-active')
    });
    $('.burger').click(function(){
      $('.header__nav').addClass('header__nav-active');
      $('.body__window').addClass('body__window-active');
    
      
    });
    $('.header__burger-close').click(function(){
      $('.header__nav').removeClass('header__nav-active');
      $('.body__window').removeClass('body__window-active');
  
    });  
  
  $('.bell__btn').click(function(){
    $('.popup').addClass('popup-active');  
  });
  
  $('.popup__close').click(function(){
    $('.popup').removeClass('popup-active');    
  });

  $('.header__user-inner').click(function(){
    $('.header__account').toggleClass('header__account-active');
  });
});

