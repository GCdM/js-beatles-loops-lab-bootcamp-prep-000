function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (var i = 0; i < musicians.length; i++) {
     var string = `${musicians[i]} plays ${instruments[i]}`;
     result.push(string);
  }
  return result;
}
function johnLennonFacts(facts) {
  var FACTS = [];
  var i = 0;
  while (FACTS.length < facts.length) {
    FACTS.push(`${facts[i]}!!!`);
    i++;
  }
  return FACTS;
}