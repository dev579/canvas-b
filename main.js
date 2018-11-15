$(function () {
    $('.slider-cont').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="template/img/arr_l.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="template/img/arr_r.png"></button>'
    });
    $('.head-menu--btn').click(function (e) {
        e.preventDefault();
        $('.head-menu').slideToggle();
    })
});