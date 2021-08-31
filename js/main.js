var writeLetterManyTimes = function () {
  var a = prompt('Enter a letter');
  var i;

  for (i = 0; i < 10; i++) {
    for (j=0; j<i+1;j++) {
      document.write(a);
    }
    document.write('<br>');
  }
};
