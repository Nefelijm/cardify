'use strict';

$(document).ready(function() {
  var $btnGithub = $('#btn-github');
  $btnGithub.on('click', function(event) {
    debugger;
    $(location).attr('href', 'https://github.com/Nefelijm/cardify');
  });
  $('.example-container').cardify({ boxColor: 'rgb(197, 78, 181)', 
    captionColor: 'white', 
    captionsize: '2em', 
    background: 'rgb(87, 155, 175)', 
    border: '5%' });
});