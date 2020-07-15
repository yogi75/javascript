Array.prototype.doSort = function(){
  return this.sort(function(a,b){
    return a-b;
  })
}

var a = [1,2,10,5,11,4].doSort();
console.log(a); // [1, 2, 4, 5, 10, 11]
