import $ from 'jquery';

$(function () {
  $('.header-inner').affix({
    offset: {
      top: function () {
        return (this.top = $(window).height() / 2 - $('.header_logo').height() / 2);
      },
    },
  });
});

