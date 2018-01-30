'use strict';

(function($) {
  $.fn.cardify = function() {
    // Estilos del contenedor
    $(this).css({
      'align-items': 'stretch',
      'align-content': 'flex-end',
      'display': 'flex',
      'flex-flow': 'row wrap',
      'justify-content': 'center'
    });

    // Iterar entre imágenes
    $(this).find('img').each(function() {
      // Creando elementos
      $(this).wrap('<figure></figure>');
      $(this).parent().append($('<figcaption></figcaption>').text($(this).attr('alt')));

      // Agregando estilos
      $(this).css({
        'width': '100%',
        'opacity': '1',
        'transition': 'opacity .5s'
      });

      $(this).parent().css({
        'align-items': 'center',
        'box-shadow': '#FBFCFA 10px 10px, #34D1BF -10px -10px, #CFDBD5 -5px 5px 30px 10px',
        'border': '3px solid',
        'display': 'flex',
        'flex-flow': 'column',
        'justify-content': 'center',
        'margin': '2%',
        'padding': '2.5%',
        'position': 'relative',
        'width': '25%'
      });

      $(this).next().css({
        'font-size': '1.5em',
        'line-height': '1.2',
        'opacity': '0',
        'padding': '5%',
        'position': 'absolute',
        'text-align': 'center',
        'transition': 'opacity .5s',
        'width': '90%'
      });

      // Agregando efecto hover
      $(this).parent().hover(function() {
        $(this).children(':first').css('opacity', '0');
        $(this).children(':last').css('opacity', '1');
      }, function() {
        $(this).children(':first').css('opacity', '1');
        $(this).children(':last').css('opacity', '0');
      });
    });
  };
})(jQuery);