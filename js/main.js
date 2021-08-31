var a = prompt('Enter a letter');
var i;
var line = a.repeat(i +1);

var writeLetterManyTimes = function () {

  for (i = 0; i < 10; i++) {
    document.write(line +'<br>');
  }
};

writeLetterManyTimes();
