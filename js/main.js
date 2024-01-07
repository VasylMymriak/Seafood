$(function(){
    $('.header__slider').slick({
        dots: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow_top.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/arrow_down.png" alt=""></button>',
        fade: true,
        autoplay: true
    });

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        autoplay: true,
        prevArrow:'<button type="button" class="product-prev"><img src="images/arrow_up-blue.png" alt=""></button>',
        nextArrow:'<button type="button" class="product-next"><img src="images/arrow_down-blue.png" alt=""></button>',
        responsive: [
          {
          breakpoint: 891,
          settings:{
            vertical: false,
            slidesToShow: 3,
            arrows: false,           
            dots: true,
           },
           breakpoint: 460,
          settings:{
            vertical: false,
            slidesToShow: 1,
            arrows: false,           
            dots: true,
           }
          }
        ]
      });
      $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false
      });

      $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
      });

});
