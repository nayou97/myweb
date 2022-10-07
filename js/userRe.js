
$(function () {
    
    $('html, body').animate({
        'scrollTop': 0
    });
    

    $(window).load(function () {        
        $('.skillBar div').each(function () {
            var percent = $(this).find('p span').eq(1).attr('data-skillbar')+ '%';
            //console.log(percent);
            $(this).find('p span').eq(1).animate({
                width: percent 
            }, 1000);            
        }); //each
        
        $('.mot03').addClass('opacity');
    });
    var triggerPos;
    var targetPos;
    var $indi =$('.indicator li');
    $(window).scroll(function () {        
        $('.aniTarget').each(function(){
            triggerPos = $(window).scrollTop()+200;
            targetPos = $(this).offset().top;
            var BGC = $(this).attr('data-color');
            var num = $(this).index();            
            if(triggerPos>=targetPos){                
                $(this).addClass('active');
                indiOn(num);
            }
        });        
    });    
    $('.indicator li').click(function () {
        var index = $(this).index();
        var divTop = $('section > div').eq(index).offset().top;        
        $('html, body').animate({
            'scrollTop': divTop
        });
    });
    $('.lnb li').click(function () {
        var index = $(this).index();
        var divTop = $('section > div').eq(index).offset().top;
        $('html, body').animate({
            'scrollTop': divTop
        });
        hamFunF();
    });
   
    function indiOn(n){
        $('.indicator span').removeClass('indiOn');
        $('.indicator li').eq(n).find('span').addClass('indiOn');
    }
    function resetFunc(){
        $('section > div').removeClass('scrollingAni').css({opacity:0});
    }
    
    function hamFunT() {
        $('.hamBtn').stop(true).animate({
            top: 50
        });
        $('.hamBtn').find('div').eq(0).css({
            transform: 'rotate(-45deg) translateX(5px)'
        });
        $('.hamBtn').find('div').eq(2).css({
            transform: 'rotate(-45deg)'
        });
        $('.hamBtn').find('div').eq(1).css({
            transform: 'rotate(-135deg) translateY(3px)'
        });
        $('.lnb').css({left:0}).stop(true).animate({opacity:1}, 600);
        /*$('.lnb').stop(true).animate({
            right: '0'
        }, 600);*/
        toggle = false;
    }
    function hamFunF() {
        $('.hamBtn').stop(true).animate({
            top: 40
        });
        $('.hamBtn').find('div').eq(0).css({
            transform: 'rotate(0deg)'
        });
        $('.hamBtn').find('div').eq(2).css({
            transform: 'rotate(0deg)'
        });
        $('.hamBtn').find('div').eq(1).css({
            transform: 'rotate(-90deg) translateY(20px)'
        }).stop(true).animate({
            opacity: 1
        }, 300, function () {
            $(this).css({
                left: -20
            }).stop(true).animate({
                opacity: 1
            }, 300, function () {
                $(this).css({
                    transform: 'rotate(0deg)',
                    left: 0
                })
            });
        });
        $('.lnb').stop(true).animate({opacity:0}, 600, function(){
            $(this).css({left:'100%'});
        });
        /*$('.lnb').stop(true).animate({
            right: '-100%'
        }, 600);*/
        toggle = true;
    }

    var toggle = true;
    $('.hamBtn').on('click', function () {
        if (toggle) {
            hamFunT();
        } else {
            hamFunF();
        }
    }); /* ham Menu*/

    $('.context .contBtn button:nth-child(1)').click(function () {
        var str = $(this).parent().attr('data-href');
        window.open(str, "",
            "width=1366px, height=760px, scrollbars=yes");
    });
    $('.context .contBtn button:nth-child(2)').click(function () {
        var str = $(this).parent().attr('data-href');
        window.open(str, "",
            "width=720px, height=600px, scrollbars=yes");
    });
    $('.context .contBtn button:nth-child(3)').click(function () {
        var str = $(this).parent().attr('data-href');
        var num = $(this).parent().parent().parent().index();
        if (num === 5) {
            window.open(str, "",
                "width=420px, height=600px, scrollbars=yes");
        } else {
            window.open(str, "",
                "width=480px, height=800px, scrollbars=yes");
        }

    });

       
    
    var params = {
      container: document.getElementById('logo'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'data02.json'
    };
    
    var anim;
    anim = lottie.loadAnimation(params);
    lottie.setSpeed(1.5);
   


})
