$(document).ready(function () {
  let startValue, endValue;
  if ($(".pick-up-time-form").length) {
    $("body").on("change", ".time-start-select", function () {
      startValue = parseInt(
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".time-start-select")
          .children("option:selected")
          .val()
      );
      endValue = parseInt(
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".time-end-select")
          .children("option:selected")
          .val()
      );
      if (endValue <= startValue) {
        alert("لابد أن يكون الساعة ( إلى )  أكبر من الساعة ( من )");
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".time-start-select")
          .val(null)
          .trigger("change");
      }
      // console.log()
    });

    $("body").on("change", ".time-end-select", function () {
      startValue = parseInt(
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".time-start-select")
          .children("option:selected")
          .val()
      );
      endValue = parseInt(
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".time-end-select")
          .children("option:selected")
          .val()
      );
      if (endValue <= startValue) {
        alert("لابد أن يكون الساعة ( إلى )  أكبر من الساعة ( من )");
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".time-end-select")
          .val(null)
          .trigger("change");
      }
    });
  }

  if ($(".pick-up-date-experince").length) {
    $("body").on("change", ".date-start-select", function () {
      startValue = parseInt(
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".date-start-select")
          .children("option:selected")
          .val()
      );
      endValue = parseInt(
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".date-end-select")
          .children("option:selected")
          .val()
      );
      if (endValue < startValue) {
        alert("لابد أن يكون التاريخ ( إلى )  أكبر من التاريخ ( من )");
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".date-start-select")
          .val(null)
          .trigger("change");
      }
      // console.log()
    });

    $("body").on("change", ".date-end-select", function () {
      startValue = parseInt(
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".date-start-select")
          .children("option:selected")
          .val()
      );
      endValue = parseInt(
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".date-end-select")
          .children("option:selected")
          .val()
      );
      if (endValue < startValue) {
        alert("لابد أن يكون التاريخ ( إلى )  أكبر من التاريخ ( من )");
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".date-end-select")
          .val(null)
          .trigger("change");
      }
    });
  }

  if ($("#repeater").length) {
    $("#repeater").createRepeater({
      showFirstItemToDefault: true,
    });
  }
  if ($("#repeater2").length) {
    $("#repeater2").createRepeater({
      showFirstItemToDefault: true,
    });
  }

  if ($("#repeater3").length) {
    $("#repeater3").createRepeater({
      showFirstItemToDefault: true,
    });
  }

  if ($(".header-slider").length) {
    $(".header-slider").slick({
      dots: true,
      arrows: false,
    });
  }

  if ($(".consult-slider").length) {
    $(".consult-slider").slick({
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
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".books-slider").length) {
    $(".books-slider").slick({
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
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".legal-post-slider").length) {
    $(".legal-post-slider-content").slick({
      vertical: true,
      verticalSwiping: true,
      arrows: true,
      slidesToShow: 3,
      loop: false,
      autoplay: false,
      infinite: false,
    });
  }

  if ($(".free-post-slider").length) {
    $(".free-post-slider-content").slick({
      vertical: true,
      verticalSwiping: true,
      arrows: true,
      slidesToShow: 2,
      loop: false,
      autoplay: false,
      infinite: false,
    });
  }

  if ($(".book-slider").length) {
    $(".book-slider-content").slick({
      vertical: true,
      verticalSwiping: true,
      arrows: true,
      slidesToShow: 2,
      loop: false,
      autoplay: false,
      infinite: false,
    });
  }

  let openNotificationBody = false;
  if ($("#notification-span").length) {
    $("#notification-span").on("click", function () {
      if (!openNotificationBody) {
        $(".notification-body").css("display", "block");
        window.mark_all_as_unread();
      } else {
        $(".notification-body").css("display", "none");
      }
      openNotificationBody = !openNotificationBody;
    });
  }

  $(".drop-down-hover").hover(function () {
    $(".dropdown-toggle", this).trigger("click");
  });

  // if ($("#countdown").length) {
  //   $("#countdown").timeTo(3600, function () {
  //     alert("Countdown finished");
  //   });
  // }

  // function videoTimeStart() {
  //   $("#countdown").timeTo(3600, function () {
  //     window.videoTimeEnd();
  //   });
  // }

  // videoTimeStart();

  if ($(".select-form-control").length) {
    $(".select-form-control").select2({
      dir: "rtl",
    });
  }

  if ($($(".joining-form")).length) {
    $(".not-activate").on("change", function () {
      $(".item-contetn").toggle("slow");
      $(".repeater-add-btn").toggle("slow");
    });
  }

  if ($("#newPassword").length) {
    $("#newPassword").passtrength({
      minChars: 8,
      passwordToggle: false,
      tooltip: true,
    });
  }
  if ($("#newPassword2").length) {
    $("#newPassword2").passtrength({
      minChars: 8,
      passwordToggle: false,
      tooltip: true,
    });
  }

  $(document).ready(function () {
    if (
      typeof window.location.hash != "undefined" &&
      window.location.hash == "#service_orders"
    ) {
      $("#pills-pills-consult-order-tab").click();
    }
  });
});


if($('.custome-file-validation').length){
  $('body').on('change', '.custome-file-validation', function(e){
    var fileName = e.target.files[0].name;
      $(this).parent().parent().parent().find('.custome-file-validation-name').css("display", "block");
      $(this).parent().parent().parent().find('.custome-file-validation-name').text(fileName);
      $(this).parent().parent().parent().find('.custome-file-validation-delete').css("display", "inline-block");
  })
}

if($('.custome-file-validation').length){
  $('body').on('click', '.custome-file-validation-delete', function(e){
      $(this).siblings('span').text("");
      $(this).css("display", "none");
      $(this).parent().find('.custome-file-validation').val("");
      e.preventDefault();
  })
}




// if ($(".max-file-upload").length) {
//   var maxSizeUpload = 4000;
//   $('body').on('change', '.max-file-upload', function(e){
//     var fileSizeUpload = e.target.files[0].size
//     if(fileSizeUpload > maxSizeUpload){
//       $(this).parent().parent().parent().find(".upload-error").css('display', 'block');
//       $(this).val("");
//       $(this).parent().parent().parent().find(".upload-error").siblings('a').css('display', 'none');
//       $(this).parent().parent().parent().find(".upload-error").siblings('span').css('display', 'none');
//     }else{
//       $(this).parent().parent().parent().find(".upload-error").css('display', 'none');
//     }
//   });
// } 