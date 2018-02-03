'use strict';

(function ($) {
  $.fn.cardify = function () {
    // Agregando estilos al contenedor
    $(this).addClass('cardifyContainer');
    // Iterar entre imágenes
    $(this).find('img').each(function (index, image) {
      // Creando elementos
      $(image).wrap('<figure></figure>');
      $(image).parent().append($('<figcaption></figcaption>').text($(image).attr('alt')));

      // Agregando estilos a la imagen
      $(image).addClass('cardifyImage');
      // Agregando estilos al figure
      $(image).parent().addClass('cardifyFigure');
      // Agregando estilos al Figcaption
      $(image).next().addClass('cardifyFigcaption');
    });
  };
})(jQuery);