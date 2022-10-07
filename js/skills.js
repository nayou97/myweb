/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
    $(window).resize(ActiveOnVisible__initOffset);
    ActiveOnVisible__initOffset();

    $(window).scroll(ActiveOnVisible__checkAndActive);
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
    $('.active-on-visible').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.offset().top;
        $node.attr('data-active-on-visible-offsetTop', offsetTop);

        if ( !$node.attr('data-active-on-visible-diff-y') ) {
            $node.attr('data-active-on-visible-diff-y', '0');
        }

        if ( !$node.attr('data-active-on-visible-delay') ) {
            $node.attr('data-active-on-visible-delay', '0');
        }
    });

    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() { 
    $('.active-on-visible:not(.actived)').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
        var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
        var delay = parseInt($node.attr('data-active-on-visible-delay'));

        var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

        if ( $(window).scrollTop() + $(window).height() + diffY > offsetTop ) {
            $node.addClass('actived');

            setTimeout(function() {
                $node.addClass('active');
                if ( window[callbackFuncName] ) {
                    window[callbackFuncName]($node);
                }
            }, delay);
        }
    });
}

$(function() {
    ActiveOnVisible__init();
})
/* 발견되면 활성화시키는 라이브러리 끝 https://codepen.io/leejiyun/pen/oNxELez */


function Circle__run() {
    $(".second.circle").each(function(index, node) {
        var perNum = $(node).attr('circleProgress');
        
        $(this).circleProgress({
            value: perNum / 100,
            startAngle: 300,
            thickness: 3,
            fill: {
                gradient: ["#8780ff", "#ff9998"],
                gradientAngle: Math.PI / 2
            },
            animation: {
                duration: 2200,
                easing: "swing"
            },
            lineCap: "butt",
            reverse: true
    
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.circle-percent').html(Math.round(perNum * progress) + '<i>%</i>');
        });
    });
}