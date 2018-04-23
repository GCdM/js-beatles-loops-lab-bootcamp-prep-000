function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (var i = 0; i < musicians.length; i++) {
     var string = `${musicians[i]} plays ${instruments[i]}`;
     result.push(string);
  }
  return result;
}