'use strict';

$(document).ready(function() {
  var $btnGithub = $('#btn-github');

  $btnGithub.on('click', function(event) {
    debugger;
    $(location).attr('href', 'https://github.com/Nefelijm/cardify');
  });

  $('.example-container').cardify();
});