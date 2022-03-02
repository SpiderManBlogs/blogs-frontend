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

export function SMMainInitMenu() {
    ssMenu();
}
