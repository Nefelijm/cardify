(function($) {
  $.fn.cardify = function() {
    // Agregando estilos al contenedor
    $(this).addClass('cardifyContainer');
    // Iterar entre imágenes
<<<<<<< HEAD
    $(image
    ).find('img').each((index, image) => {
=======
    $('img').each((index, image) => {
>>>>>>> 0e499d80b929e068ced08b33166ca4ace7151d81
      // Creando elementos
      $(image).wrap('<figure></figure>');
      $(image).parent().append($('<figcaption></figcaption>').text($(image).attr('alt')));

      // Agregando estilos a la imagen
      $(image).addClass('cardifyImage');
      // Agregando estilos al figure
      $(image).parent().addClass('cardifyFigure');
      // Agregando estilos al Figcaption
      $(image).next().addClass('cardifyFigcaption');
<<<<<<< HEAD



=======
>>>>>>> 0e499d80b929e068ced08b33166ca4ace7151d81
    });
  };
})(jQuery);