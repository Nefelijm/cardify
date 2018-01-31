'use strict';

(function($) {
  $.fn.cardify = function() {
    // Agregando estilos al contenedor
    $(this).addClass('cardifyContainer');
    // Iterar entre imágenes
    $(this).find('img').each(function(index, image) {
      // Creando elementos
      // console.log(image);
      $(image).wrap('<figure></figure>');
      $(image).parent().append($('<figcaption></figcaption>').text($(image).attr('alt')));

      // Agregando estilos a la imagen
      $(this).addClass('cardifyImage');
      // Agregando estilos al figure
      $(this).parent().addClass('cardifyFigure');
      // Agregando estilos al Figcaption
      $(this).next().addClass('cardifyFigcaption');

      // Agregando efecto hover
      $(image).parent().hover(function(event) {
        if ($(event.target).is('figure')) {
          console.log(event.target);
          $(event.target).children(':first').css('opacity', '0');
          $(event.target).children(':last').css('opacity', '1');
        }
      }, function(event) {
        if ($(event.target).is('figure')) {
          $(event.target).children(':first').css('opacity', '1');
          $(event.target).children(':last').css('opacity', '0');
        }
      });
    });
  };
})(jQuery);