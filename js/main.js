$(window).on('load', function () {

  //preloader
  $('.pre-loader').fadeOut("500", function () {
    $('html').removeClass("overflow");
    $(this).remove();
  });

  if ($('.pre-loader').length == 0) {
    $('html').removeClass("overflow");
  }

  // animate on scroll

  AOS.init({
    duration: 700,
    mirror: true,
    once: true,
    disable: function () {
      var maxWidth = 769;
      return window.innerWidth < maxWidth;
    },
    easing: 'ease-in-out'
  });

  //nava toggle
  $('#nava-icon').click(function (e) {
    $('#nava').toggleClass('nava-active');
    $('html').toggleClass('overflow');
  });

  $('#nava').click(function (e) {
    if (e.target.id == 'nava' || e.target.id == 'close-nava' || e.target.parentNode.id == "close-nava") {
      $(this).removeClass('nava-active');
      $('html').removeClass('overflow');
    }
  });

  //search toggle
  $('#search-btn').click(function (e) {
    $('#search-form').toggleClass('search-form-active');
    $('html').toggleClass('overflow');
  });

  $('#search-form').click(function (e) {
    if (e.target.id == 'search-form' || e.target.id == 'close-search' || e.target.parentNode.id == "close-search") {
      $(this).removeClass('search-form-active');
      $('html').removeClass('overflow');
    }
  });

  $(".slide").on("click", function (e) {
    if (e.target.classList.contains('drop')) {
      e.stopPropagation();
      $(this).toggleClass("slide-active");
      $(this).children(".top-dropDown").slideToggle();
    }
  });

  //change nav slide 
  function changeSlide() {
    if (window.innerWidth <= 1200) {
      $('.sm-slide').removeClass('top-setting');
      $('.sm-slide').addClass('slide');
      $('.sm-slide .top-dropDown').css('display', 'none');
      
    } else {
      $('.sm-slide').addClass('top-setting');
      $('.sm-slide').removeClass('slide');
      $('.sm-slide .top-dropDown').css('display', 'unset');
    }
  }

  changeSlide();

  window.addEventListener('resize', changeSlide);

// add footer collabse
  function addCollapse() {
    console.log('resize');
    if (window.innerWidth <= 992) {
      $('.footer-list').attr("data-toggle", "collapse");
      $('.footer-list ul').addClass('collapse');
    } else {
      $('.footer-list').attr("data-toggle", "none");
      $('.footer-list ul').removeClass('collapse');
      $('.footer-list ul').css('height', 'auto');
    }
  }


  addCollapse();
  window.addEventListener("resize", addCollapse);


  $(".footer-list").on("click", function (e) {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      $(this).toggleClass("footer-list-active");
    }
  });


  var mySwiper = new Swiper('header .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    autoplay: {
      delay: 5000,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper2 = new Swiper('.s-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      // when window width is >= 480px
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 250px
      150: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper3 = new Swiper('.banners-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 6,
    spaceBetween: 30,
    allowTouchMove: true,
    autoplay: {
      delay: 4000,
    },

    breakpoints: {
      // when window width is >= 576px
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,

      },
      992: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 4,
      },
      // when window width is >= 250px
      0: {
        slidesPerView: 4,
        spaceBetween: 7,
      }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  var mySwiper4 = new Swiper('.notes-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    autoplay: false,
    allowTouchMove: false,

    breakpoints: {
      // when window width is >= 576px
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
        allowTouchMove: true,
        autoplay: {
          delay: 4000,
        }
      },
      576: {
        slidesPerView: 2,
        allowTouchMove: true,
        autoplay: {
          delay: 4000,
        }
      },
      // when window width is >= 250px
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
        autoplay: 4000,
      }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

  if (window.innerWidth <= 1200) {
    setInterval(() => {
      mySwiper4.slideNext();
    }, 4000);
  }

  window.addEventListener("scroll", scrolled);

  function scrolled() {
    let up = document.getElementById('up');
    if (this.scrollY > 200) {
      up.classList.add('active-up');
    } else {
      up.classList.remove('active-up');
    }
  }



});
