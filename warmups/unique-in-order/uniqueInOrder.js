let uniqueInOrder = (iterable) => {
  const splitIter = (typeof iterable === 'string') ? iterable.split('') : iterable
  let output = []
  for(let i = 1; i<=splitIter.length; i +=1){
    if(splitIter[i-1] !== splitIter[i]){
      output.push(splitIter[i-1])
    }
  }
  return output
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
