$(function(){

  
    
  $('.ban_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    nextArrow:".next",
    prevArrow:".pev"
  
  
  });
  
  $('.our_main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical:true,
    centerMode:true,
    centerPadding:"0",
    nextArrow:".up",
    prevArrow:".down",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
    
  });
      
  
  $('.ft_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.fm_main'
  });
  $('.fm_main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.ft_main',
    dots: false,
    centerMode: true,
    vertical:true,
    centerPadding:"0",
    focusOnSelect: true,
  });
  
  
  
  $(window).load(function(){
    $(".preload").delay(500).fadeOut(1000)
  })
  
  
  
  jQuery(document).ready(function($) {
      $('.counter').counterUp({
          delay: 10,
          time: 1000
      });
  });
  
  
  $('.slik').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:400,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      },
    ]
    
  });
  
  
  $('.dui').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.ak',
  
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
  
  });
  $('.ak').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.dui',
  centerMode: true,
  centerPadding:"100",
  focusOnSelect: true,
  vertical:true,
  nextArrow:".ami",
  prevArrow:".tumi",

  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
  
  });
  
  
  
  $(window).scroll(function(){
  
  var scrolling = $(this).scrollTop()
  
  if(scrolling > 20){
    $(".menu_bg").addClass("menu_l")
  }
  
  
  else{
    $(".menu_bg").removeClass("menu_l")
  }
  if(scrolling > 20){
    $(".top").fadeIn()
  }else{
    $(".top").fadeOut()
  }


  })
  

})



