// Select color input
var color = $('#colorPicker').val();
$('#colorPicker').change(function() {
  color = $(this).val();
});

// Select size input
// Height in rows
var height = $('#input_height').val();
$('#input_height').change(function() {
  height = $(this).val();
});

// Width in columns
var width = $('#input_width').val();
$('#input_width').change(function() {
  width = $(this).val();
});


// When size is submitted by the user, call makeGrid()
$('form').submit(function(event) {
  $('.row').remove();
  event.preventDefault();

  if (width && height) {
    makeGrid();
  }
  else {
    alert('Add a grid for going on!');
  }
});

function makeGrid() {
  // Your code goes here!
  for (var i = 0; i < height; i++) {
    $('table').append('<tr class="row" id="' + i + '"></tr>');
  }
  for (var j = 0; j < width; j++) {
    $('.row').append('<td id=' + j + '></td>');
  }

  $('td').on('click', function() {
    $(this).css('background-color', color);
  });
}
