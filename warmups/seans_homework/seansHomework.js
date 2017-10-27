// Understanding for loops is critical to understanding iterative logic. For
// your first exercise, try to use a for loop to identify the user 'Trevor'.
// returning the object containing that user. Your challenge here is to use
// either a 'break' or 'return' statement in combination with a for-loop and
// conditional to stop iteration and return the result as soon as it is found!
// Remember, you can use a break statement like so to stop a for-loop from
// exectuing:
//

const data = [
                {name: 'John'},{name: 'Sue'},{name: 'Sally'},{name: 'Greg'},
                {name: 'Aarom'},{name: 'Paul'},{name: 'Trevor'}, {name: 'Danielle'}
              ]

const findName = (dataIn, search) => {
  const results = []

  for (let i=0, n=array.length; i<n; i+=1) {
    if(dataIn[i] === search){
      return dataIn[i]
    }
  }
  console.log(search(dataIn))
}


//
// We can also use for a return to short-circuit a for loop. Remember, if we
// call return in a function, the function will stop whatever else it is doing
// immediately and return what is on the return statement's line:
//
//
//  const myFunction = (dataIn, search) => {
//
//    for(let i=0, n=array.length; i<n; i+=1){
//
//      if(dataIn[i] === search){
//        return dataIn[i]
//      }
//
//    }
//
//    return "Not found"
//
// }

// const search = () => {
//   const dataIn = findName
//
//   for (let i = 0; i < name.length; i+=1)
//
//     if(dataIn[i] === search)
//
//
//   return dataIn[i]
// }
//
// console.log(search(dataIn))

// Result should be the object containing 'Trevor', i.e. {name: 'Trevor'}
