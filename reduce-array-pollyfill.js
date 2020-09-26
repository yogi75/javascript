var arr = [1,2,3,4];

// var a = arr.reduce((acc,a)=>acc+a);

// console.log(a);

var multiply = function(a,b){return a*b;};

Array.prototype.reduceArray = function(fn, seedValue){
  var result = seedValue ? seedValue : this[0];
  var itr = seedValue ? 0 : 1;
  for(var i =itr; i<this.length; i++ ){
    result =  fn(result, this[i]);
  }
  return result;
}

console.log(arr.reduceArray(multiply))
