$(window).on('load', function () {
    $('.hamburger').click(function () {
      $(this).toggleClass('open');
      $('.navbar').slideToggle();
    });
  $('.slider-one').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      dots: true,
    //   autoplay: true,
    });
    $('.slider-two').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });

      $('.slider-three').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
});