

$(document).ready(function () {

    //sliders

    $.scrollify({
        section : ".section",
        sectionName : "section-name",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        before:function() {},
        after:function() {}
    });


    var mySwiper = new Swiper('.slider', {
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var mySwiper = new Swiper('.slider-inner', {
        speed: 400,
        spaceBetween: 100,
        direction: 'vertical',
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });




    $('.customScroll').mCustomScrollbar();

    $('.customScroll2').mCustomScrollbar({
        axis: "x"
    });



    // custom select




















    // anchor scroll
    /*$(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });*/


    //modal success
    /*$('.successBtn').on('click', function(e){
        e.preventDefault();
        dynamic_modal('success');
        return false;
    });*/

    /*function dynamic_modal(modal_name) {
        $('body').find('.modal-' + modal_name).css('display', 'block');
        setTimeout(function () {
            $('.modal-' + modal_name).addClass('open');
            $('.modal-' + modal_name + '-content').css('display', 'flex');
        }, 10);
        setTimeout(function () {
            $('.modal-' + modal_name + '-content').addClass('openModal');
        }, 200);
        $('html,body').addClass('no-scroll');
        setTimeout(function () {
        }, 200);
    };

    $('.modal').click(function (e) {
        if (e.target.id === 'modal-name') {
            $('.content-modal').removeClass('openModal');
            setTimeout(function () {
                $('.modal').removeClass('open');
            }, 300);
            setTimeout(function () {
                $('body').find('.modal').css('display', 'none');
                $('.content-modal').css('display', 'none');
            }, 500);
            $('html, body').removeClass('no-scroll');


        }
    });

    $('.close, .cancel').on('click', function () {
        $('.content-modal').removeClass('openModal');
        setTimeout(function () {
            $('.modal').removeClass('open');
        }, 300);
        setTimeout(function () {
            $('body').find('.modal').css('display', 'none');
            $('.content-modal').css('display', 'none');
        }, 500);
        $('html,body').removeClass('no-scroll');
    });*/

});


















