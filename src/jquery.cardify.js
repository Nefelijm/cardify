(function($) {
  $.fn.cardify = function() {
    $(this).find('img').each(function() {
      // debugger;
      $(this).wrap('<figure></figure>');
      $(this).parent().append($('<figcaption></figcaption>'));
      $(this).next().text($(this).attr('alt'));
    });
    // $('figure').append('<figcaption></figcaption>');
    // $('figcaption').text($('img').attr('alt'));
    // return $(this);
  };
})(jQuery);