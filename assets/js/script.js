var $body = $('body'),
$overlay = $('.global-overlay');



/***** Sticky Header *******/

// function stickyHeader(selectors) {
// var { main } = selectors;
// var $headerPosition = (main.elExists()) ? main.offset().top : '';
// var $mainHeaderHeight = (main.elExists()) ? main[0].getBoundingClientRect().height : 0;
// var $headerTotalHeight = $headerPosition + $mainHeaderHeight;


// $(window).on('scroll', function () {
//     var $scroll = $(window).scrollTop();
//     if ($scroll > $headerTotalHeight) {
//         main.addClass('is-sticky');
//     } else {
//         main.removeClass('is-sticky');
//     }
// });
// }




// $(window).on('load', function () {
// var mainSelectors = {
//     main: $('.header')
// }
// stickyHeader(mainSelectors);
// });



/***** Toolbar Button Click Function *******/

$('.js-toolbar-btn').on('click', function (e) {
e.preventDefault();
e.stopPropagation();
var $this = $(this);
var target = $this.data('target');
$body.toggleClass('body-open');
$(target).toggleClass('open');
$($overlay).addClass('overlay-open');
$this.toggleClass('open');
});


/***** Document Click Function *******/

// $body.on('click', function (e) {
// var $target = e.target;
// var dom = $('.wrapper').children();

// if (!$($target).is('.js-toolbar-btn') && !$($target).parents().is('.open')) {
//     dom.removeClass('open');
//     $body.removeClass('body-open');
//     dom.find('.open').removeClass('open');
//     $overlay.removeClass('overlay-open');
// }

// });


/***** Close Button Click Function *******/

$('.btn-close').on('click', function (e) {
e.preventDefault();
var $this = $(this);
$this.parents('.open').removeClass('open');
$($overlay).removeClass('overlay-open');
});


