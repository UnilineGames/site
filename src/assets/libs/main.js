import $ from 'jquery';

$(function () {
  $('.header-inner').affix({
    offset: {
      top: function () {
        console.log($(window).height());
        return (this.top = $(window).height() / 2 - $('.header_logo').height() / 2);
      },
    },
  });
});

