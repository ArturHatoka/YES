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
            $(this).removeClass("active");
            $(".mobile__menu-wrap").removeClass("active");
            $(".mobile__menu-main").removeClass("active");
            $(".mobile__menu-catalog").removeClass("active");
            $(".mobile__menu-search").removeClass("active");
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
    //Разворот пунктов сайдбара категории
    $(".category__sidebar-title").click(
      function () {
          $(this).toggleClass("active");
          $(this).next("div").toggleClass("active");
      }
    );
    //Выбор пола
    $(".category__sort-sex__box").click(
      function () {
          $(this).parent("div").children("div").removeClass("active");
          $(this).addClass("active");
      }
    );
    //Выбор чекбокса
    $("[class $= pop-up], input").click(
      function () {
          $(this).parents("[class *= pop-up]").find("input").prop("checked",false);
          $(this).prop("checked",true);
      }
    );
    //Раскрытие размера
    $("[class $= pop-up],[class $= button]").click(
        function () {
            $(this).addClass("active");
            $(this).next("[class $= deep]").addClass("active");
        }
    );
    //Раскрытие карточки товара в категори
    $(".category__item ").hover(
        function () {
            $(this).addClass("active");
            $(this).children(".category__item-links").addClass("active");
        },
        function () {
            $(this).removeClass("active");
            $(this).children(".category__item-links").removeClass("active");
        }
    );
    //Раскрытие сортировок на мобилке
    $(".category__head-filter button").click(
        function () {
            $(".category__sidebar").addClass("active");
            $(".category__back").addClass("active")
        }
    );
    $(".category__menu button, .category__back").click(
        function () {
            $(".category__sidebar").removeClass("active");
            $(".category__back").removeClass("active")
        }
    );
    //Отображение изображений в карточке товара
    $(".document").ready(
        function () {
            var img = $(".good__img-small").children("img:first-child").attr("src");
            $(".good__img-big img").attr("src", img);
        }
    );
    $(".good__img-small img").click(
        function () {
            var src = $(this).attr("src");
            $(".good__img-big img").attr("src", src);
        }
    );
    $(".good__img-small div").click(
        function () {
            $(this).parent().children().removeClass("active");
            $(this).addClass("active");
        }
    );

    $(".good__option-desc button").click(
        function () {
            $(this).parent().find(".hidden").removeClass("hidden");
            $(this).addClass("hidden");
        }
    );
    $(".good__option-compare button").click(
        function() {
            $(this).parent("div").toggleClass("active");
        }
    );

    $(".good__desc-head button").click(
        function () {
            $(this).parent("div").children("button").removeClass("active");
            $(this).addClass("active");
            var ind = $(this).index();
            $(".good__desc-text").removeClass("active").eq(ind).addClass("active");
        }
    );

    //Открытие вопроса
    $(".good__option-button").click(
        function () {
            $(".overlay").stop(false, false).fadeIn(400).css("display", "block").addClass("active");
            $(".modal").stop(false, false).fadeIn(400).css("display", "block").addClass("active");
        }
    );
    $(".overlay").click(
        function () {
            $(this).stop(false, false).fadeOut(500).removeClass("active");
            $(".modal").stop(false, false).fadeOut(500).removeClass("active");

        }
    );
    $(".modal__close").click(
        function () {
            $(".overlay").stop(false, false).fadeOut(500).removeClass("active");
            $(".modal").stop(false, false).fadeOut(500).removeClass("active");

        }
    );
});
