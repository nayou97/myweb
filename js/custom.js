$(document).ready(function () {
  $(window).resize(function () {
    // width값을 가져오기
    var width_size = window.outerWidth;

    // 1199 이하인지 if문으로 확인
    if (width_size <= 1199) {
      $(".lead_ment.skill").text("*이미지를 터치해보세요!");
      $(".lead_ment.pp01").text("*PC버전은 PC에서만 보실 수 있습니다.");
      $(".lead_ment.pp02").text("*PC에서만 보실 수 있습니다.");
      $(".pc03, .pc04, .pc05").text("MOBILE");
    } else {
      $(".lead_ment.skill").text("*이미지를 호버해보세요!");
      $(".lead_ment.pp01, .lead_ment.pp02").text("");
    }
  })
  // aos
  AOS.init({
    easing: 'ease',
  });

  // slick
  $('.slide_group').slick({
    autoplay: false,
    slidesToShow: 3,
    slideToScroll: 1,
    arrows: false,
    speed: 500,
    dots: true,
    arrows: true,
    responsive: [{
      breakpoint: 899,
      settings: {
        infinite: false,
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '45px',
      }
    }]
  });

  // iframe 시간
  function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    if (hours > 12) {
      hours -= 12;
    } else if (hours == 0) {
      hours = 12;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    $('.webdesign-m_modal_time').html(hours + ':' + minutes);
  }

  $(document).ready(function () {
    clock();
    setInterval(clock, 1000);
  });
  //webdesign 현재페이지 pc
  $('.pc05').click(function () {
    $('.alert_modal').fadeIn(200);
    $('.alert_modal_txt').html('현재 보고계신 페이지입니다.');
  });
  $('.alert_modal_close').click(function () {
    $('.alert_modal').css('display', 'none')
  });

  // WEBDESIGN MODAL CLOSE
  $( '.webdesign_modal_close' ).click( function () {
    $( '.webdesign_modal' ).css( 'display', 'none' )
    $( '.webdesign_modal_iframe' ).hide()
    $( 'body' ).removeClass( 'hidden' );
    var plan_scroll = localStorage.getItem( 'plan-scroll' );
    $( window ).scrollTop( plan_scroll );
} );
$('.modal').click(function(){
  
})

  // WEBDESIGN-PLAN_MODAL
  $('.planning').click(function () {
    var scrollY = window.scrollY;
    localStorage.setItem('plan-scroll', scrollY);

    $('.webdesign-p_modal').css('display', 'block')

    if (
      $(this).hasClass('plan01')
    ) {
      $('.webdesign-p_modal_iframe').attr('src', 'portfolio/website_work/01/proposal.html');
    } else if (
      $(this).hasClass('plan02')
      ) {
        $('.webdesign-p_modal_iframe').attr('src', 'portfolio/website_work/02/proposal.html');
    } else if (
      $(this).hasClass('plan03')
    ) {
      $('.webdesign-p_modal_iframe').attr('src', 'portfolio/website_work/03/proposal.html');
    } else if (
      $(this).hasClass('plan04')
    ) {
      $('.webdesign-p_modal_iframe').attr('src', 'portfolio/website_work/04/proposal.html');
    } else if (
      $(this).hasClass('plan05')
    ) {
      $('.webdesign-p_modal_iframe').attr('src', 'portfolio/website_work/05/proposal.html');
    }
    $('.webdesign-p_modal_iframe').show();
    $('body').addClass('hidden');
  });

  // WEBDESIGN-M_MODAL
  $('.mobile_btn').click(function () {
    var scrollY = window.scrollY;
    localStorage.setItem('plan-scroll', scrollY);
    $('.webdesign-m_modal').css('display', 'block')
    if (
      $(this).hasClass('mobile02')
    ) {
      $('.webdesign-m_modal_url').html('sungsimdangmall.co.kr');
      $('.webdesign-m_modal_iframe').attr('src', 'portfolio/website_work/02/01_html/index.html');
    } else if (
      $(this).hasClass('mobile03')
    ) {
      $('.webdesign-m_modal_url').html('peanuts.com');
      $('.webdesign-m_modal_iframe').attr('src', 'portfolio/website_work/03/index.html');
    } else if (
      $(this).hasClass('mobile04')
    ) {
      $('.webdesign-m_modal_url').html('kiet.re.kr');
      $('.webdesign-m_modal_iframe').attr('src', 'portfolio/website_work/04/index.html');
    } else if (
      $(this).hasClass('mobile05')
    ) {
      $('.webdesign-m_modal_url').html('zinepeep.com');
      $('.webdesign-m_modal_iframe').attr('src', 'index.html');
    }
    setTimeout(function () {
      $('.webdesign-m_modal_iframe').fadeIn(200)
    }, 1000);
    $('body').addClass('hidden');
  });

  // SEE MODAL
  $('.see_btn').click(function () {
    var scrollY = window.scrollY;
    localStorage.setItem('plan-scroll', scrollY);
    $('.see_modal').css('display', 'block')
    if (
      $(this).hasClass('goToSee01')
    ) {
      $('.see_modal_iframe').attr('src', 'portfolio/practical_work/01/index.html');
    } else if (
      $(this).hasClass('goToSee02')
    ) {
      $('.see_modal_iframe').attr('src', 'portfolio/practical_work/02/index.html');
    } else if (
      $(this).hasClass('goToSee03')
    ) {
      $('.see_modal_iframe').attr('src', 'portfolio/practical_work/03/index.html');
    } else if (
      $(this).hasClass('goToSee04')
    ) {
      $('.see_modal_iframe').attr('src', 'portfolio/practical_work/04/index.html');
    } else if (
      $(this).hasClass('goToSee05')
    ) {
      $('.see_modal_iframe').attr('src', 'portfolio/practical_work/05/index.html');
    }
    setTimeout(function () {
      $('.see_modal_iframe').fadeIn(200)
    }, 1000);
    $('body').addClass('hidden');
  })

  // logo - goToTop
  $('.logo').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // nav
  var $menu = $('nav li');
  var $contents = $('main').children();
  $(window).scroll(function () {
    var scltop = $(window).scrollTop();
    $.each($contents, function (idx, item) {
      var $target = $contents.eq(idx),
        i = $target.index(),
        targetTop = $target.offset().top;
      if (targetTop <= scltop) {
        $menu.removeClass('on');
        $menu.eq(idx).addClass('on');
      }
      if (!(0 <= scltop)) {
        $menu.removeClass('on');
      }
    })
  });
  $('nav li a').on('click', function () {
    var anchorId = $(this).attr('data-anchor');
    scroll_to_that(anchorId);
  });

  // nav-color change
  $(window).scroll(function () {
    var $epil = $('#epilogue').offset().top - 0.5;

    if ($epil <= $(window).scrollTop()) {
      $("nav li").addClass('epil');
    } else {
      $("nav li").removeClass('epil');
    }
  });
});

function scroll_to_that(anchor_id, speed) {
  if (!speed) var speed = 'slow';
  var a_tag = $("#" + anchor_id);
  if (a_tag.length > 0) {
    $('html, body').animate({
      scrollTop: (a_tag.offset().top + 1)
    }, speed);
  }
};

// email copy
function copy(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $('.email_popup').addClass('active');
  setTimeout(function () {
    $('.email_popup').removeClass('active');
  }, 1000);
}