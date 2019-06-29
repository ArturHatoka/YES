//Общие скрипты
$(document).ready(function () {
    //Подчеркивание пунктов меню
    $(".header__menu a").click(
        function(){
            $(this).toggleClass("active");
        }
    );
    //Анимация при наведении на Каталог
    $(".header__catalog").hover(
        function () {
            $(".catalog__wrap").stop(false, false).fadeIn(400).css("display", "flex").addClass("active");
            $(".catalog__background").stop(false, false).fadeIn(800).css("display", "flex").addClass("active");
            $(this).children().addClass("hover");
        },
        function () {
            $(".catalog__wrap").stop(false, false).fadeOut(400).removeClass("active");
            $(".catalog__background").stop(false, false).fadeOut(800).removeClass("active");
            $(this).children().removeClass("hover");
        }
    );

    //При клике изменение цвета кнопки у надписи Каталог
    $(".header__catalog").click(
        function () {
            $(this).children("button").toggleClass("active");
        }
    );
    //Смена слайдеров на главной
    $(".items-slider__tab").click(
        function () {
           $(".items-slider__tab").removeClass("active");
           $(this).addClass("active");
           if ($("#items_slider_hits_button").hasClass("active")){
               $("#items_slider_hits").addClass("active")
           }
           else{
               $("#items_slider_hits").removeClass("active")
           }
           if ($("#items_slider_news_button").hasClass("active")) {
               $("#items_slider_news").addClass("active")
           }
           else{
               $("#items_slider_news").removeClass("active")
           }
        }
    );

    //Раскрытие карточки товара на главной
    $(".items-slider__slide ").hover(
        function () {
            $(this).addClass("active");
            $(this).children(".items-slider__slide-links").addClass("active");
        },
        function () {
            $(this).removeClass("active");
            $(this).children(".items-slider__slide-links").removeClass("active");
        }
    );

});

//Инициализация слайдеров
$(document).ready(function () {
    //Иниц. верт. слайдер изображений на главной , под управлением slider__nav
    $('.vertical-slider__img-box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:false,
        accessibility: false,
        vertical: true,
        zIndex: 300,
    });

    //Иниц. верт. слайдер тектового блока на главной , под управлением slider__nav
    $('.vertical-slider__text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        draggable:false,
        accessibility: false,
        zIndex: 300,
    });

    //Иниц. slider__nav на главной , управление слайдером изображений , слайдером текстового блока
    $('.vertical-slider__nav-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.vertical-slider__text-slider, .vertical-slider__img-box',
        prevArrow: '<button type="button" class="slick-prev"><span class="line"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="line"></span></button>',
        zIndex: 300,

    });

    //Иниц. слайдера товаров , управление slider__nav
    $('#items_slider_hits').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:false,
        accessibility: false,
        variableWidth: true,
        zIndex: 300,
        asNavFor: '.items-slider__nav-slider',
    });

    //Иниц. slider__nav слайдера товаров
    $('.items-slider__nav-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        fade: true,
        asNavFor: '#items_slider_hits',
        prevArrow: '<button type="button" class="slick-prev"><span class="line"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="line"></span></button>',
        zIndex: 300,

    });

    //Заполнение прогресс бара на слайдере товаров
    $('.items-slider .slick-arrow').click(
        function () {
            let progress = $(".items-slider__nav-number.slick-active").attr('data-progress');
            $('.items-slider__nav-complete').width(progress*10 + '%');

        });

});

// $(document).ready(function () {


    // $('.items-slider .slick-arrow').click(
    //     function () {
    //         let progress = $('.items-slider__nav-number .slick-active').getAttribute('data-progress');
    //         $('.items-slider__nav-complete').style.width = progress
    //     }
    // );

    // $('.items-slider .slick-arrow').click(
    //     function () {
    //         this.querySelectorAll('.items-slider__nav-number .slick-active').forEach(slider__nav =>{
    //             let position = slider__nav.getAttribute('data-progress');
    //             slider__nav.style.width = `${position*10}px`;
    //         });
    //     });
// });