'use strict';

(function($) {
  $.fn.cardify = function(options) {
    var settings = $.extend({
      boxColor: '#34D1BF'
    }, options);

    // Agregando estilos al contenedor
    $(this).addClass('cardifyContainer');
    // Iterar entre imágenes
    $(this).find('img').each(function(index, image) {
      // Creando elementos
      $(image).wrap('<figure></figure>');
      $(image).parent().append($('<figcaption></figcaption>').text($(image).attr('alt')));

      // Agregando estilos a la imagen
      $(image).addClass('cardifyImage');
      // Agregando estilos al figure
      $(image).parent().addClass('cardifyFigure').css('box-shadow', '#D8DAD5 8px 8px, ' + settings.boxColor + ' -8px -8px, rgba(216, 216, 216, 0.7) -5px 5px 30px 10px');
      // Agregando estilos al Figcaption
      $(image).next().addClass('cardifyFigcaption');
    });
  };
})(jQuery);