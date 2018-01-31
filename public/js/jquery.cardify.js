'use strict';

(function($) {
  $.fn.cardify = function() {
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
      $(image).parent().addClass('cardifyFigure');
      // Agregando estilos al Figcaption
      $(image).next().addClass('cardifyFigcaption');

      // Agregando efecto hover
      // $(image).parent().hover(function(event) {
      //   if ($(event.target).is('figure') || $(event.target).parents('figure')) {
      //     $(this).find('img').css('opacity', '0');
      //     $(this).find('figcaption').css('display', 'block');
      //   }
      // }, function(event) {
      //   if ($(event.target).is('figure') || $(event.target).parents('figure')) {
      //     $(this).find('img').css('opacity', '1');
      //     $(this).find('figcaption').css('display', 'none');
      //   }
      // });
    });
  };
})(jQuery);