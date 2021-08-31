var a = prompt('Enter a letter');

var writeLetterManyTimes= function () {
  var i;

  for (i = 0; i < 10; i++) {
    var line = a.repeat(i+1);
    document.write(line+'<br>');
  }
};

writeLetterManyTimes();
