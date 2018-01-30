'use strict';

(function($) {
  $.fn.cardify = function() {
    // Agregando estilos al contenedor
    $(this).addClass('cardifyContainer');
    // Iterar entre imágenes
    $(this).find('img').each(function() {
      // Creando elementos
      $(this).wrap('<figure></figure>');
      $(this).parent().append($('<figcaption></figcaption>').text($(this).attr('alt')));

      // Agregando estilos a la imagen
      $(this).addClass('cardifyImage');
      // Agregando estilos al figure
      $(this).parent().addClass('cardifyFigure');
      // Agregando estilos al Figcaption
      $(this).next().addClass('cardifyFigcaption');
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