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
    $(".collections-slider__slide ").hover(
        function () {
            $(this).addClass("active");
            $(this).children(".collections-slider__slide-links").addClass("active");
        },
        function () {
            $(this).removeClass("active");
            $(this).children(".collections-slider__slide-links").removeClass("active");
        }
    );

    //Управление мобильного меню
    $(".mobile__catalog-button").click(
        function (){
            $(".mobile__menu-wrap").addClass("active");
            $(".mobile__menu-main").addClass("active");
            $(".mobile__menu-search-button").addClass("active");
            $(".mobile__menu-close").addClass("active");


        }
    );
    $(".mobile__search").click(
        function () {
            $(".mobile__menu-wrap").addClass("active");
            $(".mobile__menu-search").addClass("active");
            $(".mobile__menu-button").addClass("active");
            $(".mobile__menu-close").addClass("active");
        }
    );
    $(".mobile__menu-button").click(
        function () {
            $(this).removeClass("active");
            $(".mobile__menu-close").addClass("active");
            $(".mobile__menu-search-button").addClass("active");
            $(".mobile__menu-catalog").removeClass("active");
            $(".mobile__menu-main").addClass("active");
            $(".mobile__menu-search").removeClass("active");


        }
    );
    $(".mobile__menu-close").click(
        function () {
            $(".mobile__menu-wrap").removeClass("active");
            $(".mobile__menu-main").removeClass("active");
            $(".mobile__menu-catalog").removeClass("active");
            $(".mobile__menu-search").removeClass("active");
            $(".mobile__menu-close").removeClass("active");
            $(".mobile__menu-button").removeClass("active");
            $(".mobile__menu-search-button").removeClass("active");


        }
    );
    $(".mobile__menu-search-button").click(
        function () {
            $(this).removeClass("active");
            $(".mobile__menu-button").addClass("active");
            $(".mobile__menu-main").removeClass("active");
            $(".mobile__menu-catalog").removeClass("active");
            $(".mobile__menu-search").addClass("active");
        }
    );
    $(".mobile__menu-catalog-button").click(
        function () {
            $(".mobile__menu-button").addClass("active");
            $(".mobile__menu-main").removeClass("active");
            $(".mobile__menu-catalog").addClass("active");
            $(".mobile__menu-search-button").removeClass("active");
        }
    );
    $(".mobile__menu-catalog-category").click(
        function () {
            $(this).toggleClass("active");
            $(this).next(".mobile__menu-catalog-list").toggleClass("active");
        }
    );

    //Отображение языков и выбор
    $(".header__language-wrap").hover(
        function () {
            $(this).children().addClass("hover");
        },
        function f() {
            $(this).children().removeClass("hover");
        }
    );
    $(".header__language").click(
        function () {
            $(this).parent().children().removeClass("active");
            $(this).addClass("active");
        }
    );
    //Выпадание поиска в хедере
    $(".header__search").hover(
        function () {
            $(".header__form").stop(false, false).fadeIn(500).css("display", "flex").addClass("active");
        },
        function () {
            $(".header__form").stop(false, false).fadeOut(500).removeClass("active");
        }
    );
    $(".header__form").hover(
        function () {
            $(this).stop(false, false).fadeIn(500).css("display", "flex").addClass("active")
        },
        function () {
            $(this).stop(false, false).fadeOut(500).removeClass("active")
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
        draggable:true,
        accessibility: false,
        variableWidth: true,
        zIndex: 300,
        asNavFor: '.items-slider__nav-slider',
    });
    $('#items_slider_news').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:true,
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
        asNavFor: '#items_slider_hits, #items_slider_news',
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


//Заполнение прогресс бара на слайдере товаров
$(document).ready(function () {
    $('.items-slider__slide').mousemove(
        function () {
            let progress = $(".items-slider__nav-number.slick-active").attr('data-progress');
            $('.items-slider__nav-complete').width(progress*10 + '%');

        });
});


//Иниц. слайдера новостей , управление slider__nav
$(document).ready(function () {
    $('.news-slider__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:true,
        accessibility: false,
        variableWidth: true,
        zIndex: 300,
        asNavFor: '.news-slider__nav-slider',
    });
    //Иниц. slider__nav слайдера новостей
    $('.news-slider__nav-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        fade: true,
        asNavFor: '.news-slider__slider',
        prevArrow: '<button type="button" class="slick-prev"><span class="line"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="line"></span></button>',
        zIndex: 300,

    });

    //Заполнение прогресс бара на слайдере новостей
    $('.news-slider .slick-arrow').click(
        function () {
            let progress = $(".news-slider__nav-number.slick-active").attr('data-progress');
            $('.news-slider__nav-complete').width(progress*10 + '%');

        });
});

//Заполнение прогресс бара на слайдере новостей
$(document).ready(function () {
    $('.news-slider__slide').mousemove(
        function () {
            let progress = $(".news-slider__nav-number.slick-active").attr('data-progress');
            $('.news-slider__nav-complete').width(progress*10 + '%');

        });
});

//Иниц. слайдеров коллекций , управление slider__nav
$(document).ready(function () {
    $('#collections-slider__slider-first').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:true,
        accessibility: false,
        variableWidth: true,
        zIndex: 300,
        asNavFor: '#collections-slider__nav-slider-first',
    });
    //Иниц. slider__nav слайдера коллекций
    $('#collections-slider__nav-slider-first').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        fade: true,
        asNavFor: '#collections-slider__slider-first',
        prevArrow: '<button type="button" class="slick-prev"><span class="line"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="line"></span></button>',
        zIndex: 300,

    });


    $('#collections-slider__slider-second').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:true,
        accessibility: false,
        variableWidth: true,
        zIndex: 300,
        asNavFor: '#collections-slider__nav-slider-second',
    });
    //Иниц. slider__nav слайдера товаров
    $('#collections-slider__nav-slider-second').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        fade: true,
        asNavFor: '#collections-slider__slider-second',
        prevArrow: '<button type="button" class="slick-prev"><span class="line"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="line"></span></button>',
        zIndex: 300,

    });


    $('#collections-slider__slider-third').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:true,
        accessibility: false,
        variableWidth: true,
        zIndex: 300,
        asNavFor: '#collections-slider__nav-slider-third',
    });
    //Иниц. slider__nav слайдера товаров
    $('#collections-slider__nav-slider-third').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        fade: true,
        asNavFor: '#collections-slider__slider-third',
        prevArrow: '<button type="button" class="slick-prev"><span class="line"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="line"></span></button>',
        zIndex: 300,

    });

    //Заполнение прогресс бара на слайдере коллекций
    $('.collections-slider .slick-arrow').click(
        function () {
            let progress = $(this).parent().find(".collections-slider__nav-number.slick-active").attr('data-progress');
            $(this).parent().parent().parent().find(".collections-slider__nav-complete").width(progress*10 + '%');

        });
});

//Заполнение прогресс бара на слайдере коллекций
$(document).ready(function () {
    $('.collections-slider__slide').mousemove(
        function () {
            let progress = $(this).parent().parent().parent().parent().find(".collections-slider__nav-number.slick-active").attr('data-progress');
            $(this).parent().parent().parent().parent().find(".collections-slider__nav-complete").width(progress*10 + '%');
        });
});
