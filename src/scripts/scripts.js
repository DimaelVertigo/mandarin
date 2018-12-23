import 'babel-polyfill';
var $menu = $('.main-category-menu');
$('.main-category').on('click', function (e) {
  e.preventDefault();
  $menu.toggleClass('main-category-menu--visible');
  e.stopPropagation();
});
$(document).on('click', function (e) {
  if ($(e.target).is('.main-category-menu') === false) {
    $menu.removeClass('main-category-menu--visible');
  }
});
