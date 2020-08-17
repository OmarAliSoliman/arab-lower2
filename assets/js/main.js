$(document).ready(function () {

  if($('.header-slider').length){
    $('.header-slider').slick({
      dots: true,
      arrows: false
    })
  }

  if($('.consult-slider').length){
    $('.consult-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
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
  }

  if($('.books-slider').length){
    $('.books-slider').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
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
  }

  if($('.legal-post-slider').length){
    $('.legal-post-slider-content').slick({
      vertical:true,
      verticalSwiping: true,
      arrows: true,
      slidesToShow: 3,
      loop: false, 
      autoplay: false,
      infinite: false
    })
  }

  if($('.free-post-slider').length){
    $('.free-post-slider-content').slick({
      vertical:true,
      verticalSwiping: true,
      arrows: true,
      slidesToShow: 2,
      loop: false, 
      autoplay: false,
      infinite: false
    })
  }

  if($('.book-slider').length){
    $('.book-slider-content').slick({
      vertical:true,
      verticalSwiping: true,
      arrows: true,
      slidesToShow: 2,
      loop: false, 
      autoplay: false,
      infinite: false
    })
  }


  let openNotificationBody = false;
  if($('#notification-span').length){
    $('#notification-span').on('click', function(){
      if(!openNotificationBody){
        $('.notification-body').css('display', 'block');
      }else{
        $('.notification-body').css('display', 'none');
      }
      openNotificationBody=!openNotificationBody;
    })
  }

  $('.drop-down-hover').hover(function(){ 
    $('.dropdown-toggle', this).trigger('click'); 
  });


  if($('.custom-pic').length){
    $('.custom-pic').on('change', function(e){
      var fileName = e.target.files[0].name;
      alert(fileName + ' has been selected.')
      $('#custom-pic-name').css('display', 'block');
      $('#custom-pic-name').text(fileName);
      $('#delete-pic-file').css('display', 'block');
    })
  }

  if($('#delete-pic-file').length){
    $('#delete-pic-file').on('click', function(e){
      $('.custom-pic').val('');
      $('#custom-pic-name').text('');
      $('#delete-pic-file').css('display', 'none');
      e.preventDefault();
    })
  }



  if($('.custom-pdf-1').length){
    $('.custom-pdf-1').on('change', function(e){
      var fileName = e.target.files[0].name;
      alert(fileName + ' has been selected.')
      $('#custom-pdf-1-name').css('display', 'block');
      $('#custom-pdf-1-name').text(fileName);
      $('#delete-pdf-1-file').css('display', 'block');
    })
  }

  if($('#delete-pdf-1-file').length){
    $('#delete-pdf-1-file').on('click', function(e){
      $('.custom-pdf-1').val('');
      $('#custom-pdf-1-name').text('');
      $('#delete-pdf-1-file').css('display', 'none');
      e.preventDefault();
    })
  }
  

  if($('.custom-pdf-2').length){
    $('.custom-pdf-2').on('change', function(e){
      var fileName = e.target.files[0].name;
      alert(fileName + ' has been selected.')
      $('#custom-pdf-2-name').css('display', 'block');
      $('#custom-pdf-2-name').text(fileName);
      $('#delete-pdf-2-file').css('display', 'block');
    })
  }

  if($('#delete-pdf-2-file').length){
    $('#delete-pdf-2-file').on('click', function(e){
      $('.custom-pdf-2').val('');
      $('#custom-pdf-2-name').text('');
      $('#delete-pdf-2-file').css('display', 'none');
      e.preventDefault();
    })
  }


  if($('.custom-id-pic').length){
    $('.custom-id-pic').on('change', function(e){
      var fileName = e.target.files[0].name;
      alert(fileName + ' has been selected.')
      $('#custom-id-pic-name').css('display', 'block');
      $('#custom-id-pic-name').text(fileName);
      $('#custom-id-pic-delete').css('display', 'block');
    })
  }

  if($('#custom-id-pic-delete').length){
    $('#custom-id-pic-delete').on('click', function(e){
      $('.custom-id-pic').val('');
      $('#custom-id-pic-name').text('');
      $('#custom-id-pic-delete').css('display', 'none');
      e.preventDefault();
    })
  }


  if($('.custom-license').length){
    $('.custom-license').on('change', function(e){
      var fileName = e.target.files[0].name;
      alert(fileName + ' has been selected.')
      $('#custom-license-name').css('display', 'block');
      $('#custom-license-name').text(fileName);
      $('#custom-license-delete').css('display', 'block');
    })
  }

  if($('#custom-license-delete').length){
    $('#custom-license-delete').on('click', function(e){
      $('.custom-license').val('');
      $('#custom-license-name').text('');
      $('#custom-license-delete').css('display', 'none');
      e.preventDefault();
    })
  }


  if($('.custom-cirtificate').length){
    $('.custom-cirtificate').on('change', function(e){
      var fileName = e.target.files[0].name;
      alert(fileName + ' has been selected.')
      $('#custom-cirtificate-name').css('display', 'block');
      $('#custom-cirtificate-name').text(fileName);
      $('#custom-cirtificate-delete').css('display', 'block');
    })
  }

  if($('#custom-cirtificate-delete').length){
    $('#custom-cirtificate-delete').on('click', function(e){
      $('.custom-cirtificate').val('');
      $('#custom-cirtificate-name').text('');
      $('#custom-cirtificate-delete').css('display', 'none');
      e.preventDefault();
    })
  }


  if($('#countdown').length){
    $('#countdown').timeTo(3600, function(){ alert('Countdown finished'); });
  }
  

  if($('.select-form-control').length){
    $('.select-form-control').select2();
  }


});
