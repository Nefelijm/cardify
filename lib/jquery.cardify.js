'use strict';

(function($) {
  $.fn.cardify = function() {
    debugger;
    $(this).find('img').each(function() {
      $(this).wrap('<figure></figure>');
      console.log('holi');
      $(this).parent().append('holi');
      $('figcaption').text('holi');
    });
  };
})(jQuery);