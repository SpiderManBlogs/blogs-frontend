import $ from 'jquery'

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
}

/* Pretty Print
 * -------------------------------------------------- */
function ssPrettyPrint() {
    $('pre').addClass('prettyprint');
    $( document ).ready(function() {
        prettyPrint();
    });
}

export function SMMainInitMenu() {
    ssMenu();
}

export function SMMainInitPrettyPrint() {
    ssPrettyPrint();
}
