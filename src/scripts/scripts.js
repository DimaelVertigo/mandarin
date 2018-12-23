import 'babel-polyfill';

$('.main-category').on('click', function (e) {
  e.preventDefault();
  $('.main-category-menu').toggleClass('main-category-menu--visible');
  e.stopPropagation();
});
$(document).on('click', function (e) {
  if ($(e.target).is('.main-category-menu') === false) {
    $('.main-category-menu').removeClass('main-category-menu--visible');
  }
});
