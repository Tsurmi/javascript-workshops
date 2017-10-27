const numbers = [552, 472, 510, 938, 403, 785, 10, 646, 545, 816, 422, 506, 904, 124, 434, 176, 845, 428, 440, 760]

function bubbleSort(array) {
  let done = false
  while (!done) {
    done = true
    for (let i = 0; i < array.length; i++) {
      if (array[i-1] > array[i]) {
        done = false
        let tempArr = array[i];
        array[i] = tempArr;
      }
    }
  }
  return array
}

bubbleSort(numbers);
console.log(numbers);
