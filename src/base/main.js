import $ from 'jquery'

const cfg = {
    scrollDuration: 800, // smoothscroll duration
    mailChimpURL: ''   // mailchimp url
};
const $WIN = $(window);

// Add the User Agent to the <html>
// will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
const doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);


/* Preloader
 * -------------------------------------------------- */
function ssPreloader() {
    $("html").addClass('ss-preload');
};


/* Pretty Print
 * -------------------------------------------------- */
function ssPrettyPrint() {
    $('pre').addClass('prettyprint');
    $(document).ready(function () {
        // prettyPrint();
    });
};


/* search
 * ------------------------------------------------------ */
function ssSearch() {

    var searchWrap = $('.header__search'),
        searchField = searchWrap.find('.search-field'),
        closeSearch = searchWrap.find('.header__search-close'),
        searchTrigger = $('.header__search-trigger'),
        siteBody = $('body');


    searchTrigger.on('click', function (e) {

        e.preventDefault();
        e.stopPropagation();

        var $this = $(this);

        siteBody.addClass('search-is-visible');
        setTimeout(function () {
            searchWrap.find('.search-field').focus();
        }, 100);

    });

    closeSearch.on('click', function (e) {

        const $this = $(this);

        e.stopPropagation();

        if (siteBody.hasClass('search-is-visible')) {
            siteBody.removeClass('search-is-visible');
            setTimeout(function () {
                searchWrap.find('.search-field').blur();
            }, 100);
        }
    });

    searchWrap.on('click', function (e) {
        if (!$(e.target).is('.search-field')) {
            closeSearch.trigger('click');
        }
    });

    searchField.on('click', function (e) {
        e.stopPropagation();
    });

    searchField.attr({placeholder: 'Type Keywords', autocomplete: 'off'});

};


/* menu
 * ------------------------------------------------------ */
function ssMenu() {

    var menuToggle = $('.header__menu-toggle'),
        siteBody = $('body');

    menuToggle.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        menuToggle.toggleClass('is-clicked');
        siteBody.toggleClass('nav-wrap-is-visible');
    });

    $('.header__nav .has-children').children('a').on('click', function (e) {

        e.preventDefault();

        $(this).toggleClass('sub-menu-is-open')
            .next('ul')
            .slideToggle(200)
            .end()
            .parent('.has-children')
            .siblings('.has-children')
            .children('a')
            .removeClass('sub-menu-is-open')
            .next('ul')
            .slideUp(200);

    });
};


/* masonry
 * ---------------------------------------------------- */
function ssMasonryFolio() {

    const containerBricks = $('.masonry');

    containerBricks && containerBricks.masonry && containerBricks.masonry({
        itemSelector: '.masonry__brick',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        resize: true
    });

    // layout Masonry after each image loads
    containerBricks && containerBricks.imagesLoaded &&containerBricks.imagesLoaded().progress(function () {
        containerBricks && containerBricks.masonry && containerBricks.masonry('layout');
    });

};

/* animate bricks
 * ------------------------------------------------------ */
function ssBricksAnimate() {

    const animateEl = $('.animate-this');

    $WIN.on('load', function () {

        setTimeout(function () {
            animateEl.each(function (ctr) {
                const el = $(this);

                setTimeout(function () {
                    el.addClass('animated');
                }, ctr * 200);
            });
        }, 300);

    });

    $WIN.on('resize', function () {
        // remove animation classes
        animateEl.removeClass('animate-this animated');
    });

};


/* slick slider
 * ------------------------------------------------------ */
function ssSlickSlider() {

    let slider__sliders = $('.slider__slides');

    const $gallery = slider__sliders && slider__sliders.slick && slider__sliders.slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        pauseOnFocus: false,
        fade: true,
        cssEase: 'linear'
    });

    $('.slider__slide').on('click', function () {
        $gallery.slick('slickGoTo', parseInt($gallery.slick('slickCurrentSlide')) + 1);
    });

};


/* smooth scrolling
 * ------------------------------------------------------ */
function ssSmoothScroll() {

    $('.smoothscroll').on('click', function (e) {
        var target = this.hash,
            $target = $(target);

        e.preventDefault();
        e.stopPropagation();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, cfg.scrollDuration, 'swing').promise().done(function () {

            // check if menu is open
            if ($('body').hasClass('menu-is-open')) {
                $('.header-menu-toggle').trigger('click');
            }

            window.location.hash = target;
        });
    });

};


/* alert boxes
 * ------------------------------------------------------ */
function ssAlertBoxes() {

    $('.alert-box').on('click', '.alert-box__close', function () {
        $(this).parent().fadeOut(500);
    });

};


/* Back to Top
 * ------------------------------------------------------ */
function ssBackToTop() {

    const pxShow = 500,
        goTopButton = $(".go-top");

    // Show or hide the button
    if ($(window).scrollTop() >= pxShow) goTopButton.addClass('link-is-visible');

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= pxShow) {
            if (!goTopButton.hasClass('link-is-visible')) goTopButton.addClass('link-is-visible')
        } else {
            goTopButton.removeClass('link-is-visible')
        }
    });
};

export function SMMainInit() {
    ssPreloader();
    ssPrettyPrint();
    ssSearch();
    ssMenu();
    ssMasonryFolio();
    ssBricksAnimate();
    ssSlickSlider();
    ssSmoothScroll();
    ssAlertBoxes();
    ssBackToTop();
}
