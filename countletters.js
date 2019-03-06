function countletters(string){
  var string = string.split(' ').join('')
  string = string.split('')
  var result = { };
  for (i = 0; i < string.length; i ++ ) {
    if (! (string[i] in result) ) {
      result[string[i]] = 1
    } else {
      result[string[i]] += 1
    }
  }
  return (result)
}

console.log(countletters('lighthouse in the house'))


