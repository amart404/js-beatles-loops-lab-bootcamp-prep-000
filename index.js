// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var j = 0, j < musicians.length; j++) {
    array.push(`${musicians} plays ${instruments}`);
  }
  return array;
}
