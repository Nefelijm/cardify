'use strict';

(function($) {
  $.fn.cardify = function() {
    $(this).find('img').each(function() {
      $('img').css({ 'width': '150px',
        'heigth': '20px' });
      $(this).wrap('<figure></figure>').css({ 'margin-top': '10%',
        'margin-left': '10%',
        'box-shadow': '10px 10px white, -10px -10px rgb(132, 175, 155), 0px 0px 40px 10px yellow',
        'border': '3px solid' });
      $(this).parent().append($('<figcaption></figcaption>'));
      $(this).next().text($(this).attr('alt')).css({ 'color': 'black',
        'font-size': '30px',
        'margin-left': '10%',
        'margin-top': '3%' });
    });
    // $('figure').append('<figcaption></figcaption>');
    // $('figcaption').text($('img').attr('alt'));
    // return $(this);
  };
})(jQuery);