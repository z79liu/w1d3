function countletters(string){
  var string = string.split('')
  console.log(string)
  var result = { };
  let currentletter = ''
  let counter = 1
  for (i = 1; i < string.length; i ++ ) {
    let firstletter = string[0]
    console.log(firstletter)
    if (firstletter == string[i]) {
      counter ++
      console.log(counter)
    }
    result[firstletter] = counter
  }
}

console.log(countletters('hhha'))

