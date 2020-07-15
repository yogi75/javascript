var myArray = ["a","b","a","c","b","a"];
function findOccurance(){
  var obj = {};
  var count = 1;
  var max = {value:0};
  for(var i=0; i<myArray.length; i++){
    
    if(obj[myArray[i]]){
      obj[myArray[i]] = count++;
    }else{
      obj[myArray[i]] = 1;
    }
  }
  for(var key in obj){
    if(max.value < obj[key]){
      max.value = obj[key];
      max.key = key;
    }
  }
  console.log(obj);
  console.log(max.key+" has max occurances "+max.value);
}

findOccurance();

// [object Object] {
//   a: 3,
//   b: 2,
//   c: 1
// }
// "a has max occurances 3"
