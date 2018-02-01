$(document).ready(() => {
  let $btnGithub = $('#btn-github');

  $btnGithub.on('click', (event) => {
    debugger;
    $(location).attr('href', 'https://github.com/Nefelijm/cardify');
  });

  $('.example-container').cardify();
});