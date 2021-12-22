$('.popup__mobile .nav-pills .nav-link').on('click', function (e) {
    $('.popup__mobile').removeClass('menu-open');
    $('html').css({
        overflow: ""
    })
})
$('.popup__mobile .has-dropdown > a').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.submenu').toggleClass('active').slideToggle('400');
    $(this).toggleClass('open');
    $('html').css({
        overflow: ""
    })
});
$('.btn__popup_mobile').on('click', function (e) {
    e.preventDefault();
    $('.popup__mobile').addClass('menu-open');
    $('html').css({
        overflow: "hidden"
    })
});
$('.close-menu').on('click', function (e) {
    e.preventDefault();
    $('.popup__mobile').removeClass('menu-open');
    $('.popup__mobile .has-dropdown > a').removeClass('open').siblings('.submenu').removeClass('active').slideUp('400');
    $('html').css({
        overflow: ""
    })
});