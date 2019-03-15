function result() {
  $('#resh').text('');

  var a = Number( $('#a').val() );
  var b = Number( $('#b').val() );
  var c = Number( $('#c').val() );
  
  $('#resh').append('<h4>Решение:</h4>');

  var D;
  $('#resh').append('<p>D = b<sup>2</sup> - 4 * a * c</p>');
  
  D = b * b - 4 * a * c;
  
  if (D > 0) {
    
    $('#resh').append('<p>D = ' + b + '<sup>2</sup> - 4 * ' + a + ' * ' + c + ' = ' + D + ' > 0</p>' + '<br>');
  
    var x1, x2;
    $('#resh').append('<p>X<sub>1,2</sub> = (-b	&#177; &#8730;D) &#247; (2 * a)</p>');
    $('#resh').append('<p>X<sub>1,2</sub> = (' + (b * -1) + ' &#177; &#8730;' + D + ') &#247; (2 * ' + a + ')</p>' + '<br>');
    
    x1 = ( (b * -1) + Math.sqrt(D) ) / (2 * a);
    x2 = ( (b * -1) - Math.sqrt(D) ) / (2 * a);
  
    $('#resh').append('<p>X1 = ' + x1 + '</p>');
    $('#resh').append('<p>X2 = ' + x2 + '</p>' + '<br>');

    $('#resh').append('<p>Ответ: ' + x1 + ', ' + x2 + '</p>');

  } else if (D == 0) {
    
    $('#resh').append('<p>D = ' + b + '<sup>2</sup> - 4 * ' + a + ' * ' + c + ' = ' + D + '</p>' + '<br>');
  
    var x;
    $('#resh').append('<p>X = -b &#247; (2 * a)</p>');
    $('#resh').append('<p>X = ' + (b * -1) + '&#247; (2 * ' + a + ')</p>' + '<br>');

    x = (b * -1) / (2 * a);

    $('#resh').append('<p>X = ' + x + '</p>' + '<br>');

    $('#resh').append('<p>Ответ: ' + x + '</p>');

  } else {
    
    $('#resh').append('<p>D = ' + b + '<sup>2</sup> - 4 * ' + a + ' * ' + c + ' = ' + D + ' < 0</p>');

    $('#resh').append('<p>Ответ: корней нет</p>');
  }

}