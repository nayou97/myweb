 $(function(){
            var btn = $('.menu .btns i');
            var imgGroup = $('.imgGroup');
            var txtGroup = $('.txtGroup');
            var pBtn = $('.paging li');
            var len = $('.imgGroup .image').length;
            var i = 0;
            var flag = true;
            function rightSlide(){
                i++;
                i = i % len;
                imgGroup.css({marginLeft : i * -100 + '%'});
                txtGroup.css({marginLeft : i * -100 + '%'});
                pBtn.removeClass('show');
                pBtn.eq(i).addClass('show');
            }
            function leftSlide(){
                i--;
                i = (i + len) % len;
                imgGroup.css({marginLeft : i * -100 + '%'});
                txtGroup.css({marginLeft : i * -100 + '%'});
                pBtn.removeClass('show');
                pBtn.eq(i).addClass('show');
            }
            btn.eq(1).click(leftSlide);
            btn.last().click(rightSlide);

            var auto = setInterval(rightSlide, 1000);
            btn.first().click(function(){
                    if(flag){
                        clearInterval(auto);
                        btn.first().removeClass('xi-pause');
                        btn.first().addClass('xi-play');
                        flag = false;
                    }else{
                        btn.first().removeClass('xi-play');
                        btn.first().addClass('xi-pause');
                        auto = setInterval(rightSlide, 1000);
                        flag = true;
                    }
                    
            });
        })