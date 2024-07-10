// Reduce pollyfill

var arr = [1,2,3,4];
var multiply = function(a,b){return a*b;};
Array.prototype.reduceArray = function(fn, seedValue){
  var result = seedValue ? seedValue : this[0]; // If seedValue provided then accumulater will have seedValue else 0 index element
  var itr = seedValue ? 0 : 1;  // If seedValue provided then iteration start from 0 index else accumulater has 0th element and iterate from 1st element
  for(var i =itr; i<this.length; i++ ){
    result =  fn(result, this[i]);
  }
  return result;
}

console.log(arr.reduceArray(multiply));

// Map pollyfill

Array.prototype.mapArray = function(callback){
    var temp = [];
    for(var i=0; i < this.length; i++){
        temp.push(callback(this[i], i, this));
    }
    return temp;
}
console.log([1,2,3].mapArray(num => num*3)) // [3, 6, 9]

// Filter pollyfill

Array.prototype.filterArray = function(callback){
    var temp = [];
    for(var i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            temp.push(this[i])
        }
    }
    return temp;
}
console.log([1,2,3,4].filterArray(num => num > 3)) // [4]
