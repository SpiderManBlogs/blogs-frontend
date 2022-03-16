import $ from 'jquery'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'


const $WIN = $(window);

const cfg = {
    scrollDuration: 800, // smoothscroll duration
    mailChimpURL: ''   // mailchimp url
};

/* menu
 * ------------------------------------------------------ */
function ssMenu() {

    const menuToggle = $('.header__menu-toggle'),
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


/* masonry
    * ---------------------------------------------------- */
function ssMasonryFolio() {
    const containerBricks = document.querySelector('.masonry');
    new Masonry(containerBricks,{
        itemSelector: '.masonry__brick',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        resize: true
    })

    imagesLoaded(containerBricks,function( instance ) {
        new Masonry(containerBricks,'layout');
    });
}

export function SMContentInit() {
    ssMasonryFolio();
}

export function SMMainInitMenu() {
    ssMenu();
}

export function SMMainInitPrettyPrint() {
    ssPrettyPrint();
}
