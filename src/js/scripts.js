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
});