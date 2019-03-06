function countletters(string){
  var string = string.split('')
  var result = { };
  let firstcounter = 1
  for (i = 0; i < string.length; i ++ ) {
    if (string[i] != ' '){
      if (! (string[i] in result) ) {
        result[string[i]] = [i]
      }else {
        result[string[i]].push(i)
      }
      }
    }
  return (result)
  }

console.log(countletters('lighthouse in the house'))

