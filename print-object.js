// Input
var obj = {
  a: {
    name: 'name1',
    id: 1
  },
  b: {
    name: 'name2',
    id: 2
  }
}

// Output
// [
//   {
//     key: a,
//     name: 'name1',
//     id: 1
//   },
//   {
//     key: b,
//     name: 'name2',
//     id: 2
//   }
// ]

const returnArrayObj = obj => Object.keys(obj).map(key=>({"key":key, ...obj[key]}));
console.log(returnArrayObj(obj));

//   Problem 2 - Given two objects
var a = {
    name: 'a',
    printFn: function(){
        console.log(this.name)
    }
}

var b = {
    name: 'b'
}
// Print b object name by calling a object printFn function
// Answer
a.printFn.call(b) // b
