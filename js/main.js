var $html = $('html');
var $input = $('#pick-color');
var $ball = $('div');
var $picker = $('form');

$picker.on('change', function () {
  console.log('works');
  $ball.css('background-color', $input.val());
  $('.ball');
});
