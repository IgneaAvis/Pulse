$(document).ready(function () {
    $('.slider__inner').slick({
        speed: 1200,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                autoplay: true,
                dots: true
            }
        }]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content')
            .removeClass('catalog__content_active')
            .eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleClass(item) {
        $(item).each(function (i) {
            $(this)
                .on("click", function (e) {
                    e.preventDefault();
                    $('.catalog-item__front').eq(i).toggleClass('catalog-item__front_active');
                    $('.catalog-item__back').eq(i).toggleClass('catalog-item__back_active');
                });
        });
    }
    toggleClass('.catalog-item__link');
    toggleClass('.catalog-item__beh');

    //Modal

    $('[data-modal=consultation]').on("click", function () {
        $(".overlay, #consultation").fadeIn("slow");
    });

    $('.modal__close').on("click", function () {
        $(".overlay, #consultation, #order, #thanks").fadeOut("slow");
    });

    // $('[data-modal=add]').on("click", function () {
    //     $("#consultation, #order").fadeOut();
    //     $("#thanks").fadeIn("slow");
    // });

    $('.button_mini').each(function (i) {
        $(this).on("click", function () {
            $('#order .modal__deskr').text($(".catalog-item__subtitle").eq(i).text());
            $(".overlay, #order").fadeIn("slow");
        });
    });

    //Validation

    $("#cons").validate();
    $("#consultation form").validate({
        rules:{
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone: "required",
        },
        messages: {
            name: "Введите имя",
            email: {
              required: "Нам нужен ваш E-Mail, чтобы связаться с вами",
              email: "Пример: name@domain.com"
            }
          }
    });
    $("#order form").validate();
});