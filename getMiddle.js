function getMiddle(s)
{
  if(s.length%2 === 0){
    var firstLetterIndex = (s.length/2 - 1);
    var secondLetterIndex= (s.length/2 + 1);
    return s.substring(firstLetterIndex, secondLetterIndex);
  } else {
    var middleLetterIndex = Math.floor(s.length/2);
    return s.substring(middleLetterIndex, middleLetterIndex+1);
  }
}
