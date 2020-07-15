var myArray = [1,2,3,4,5,6];
function rotateArray(d){
  var a = "", count = 0;
  var rotation = d % myArray.length;
  for(var i = 0; i < rotation; i++){
    a = myArray.splice(0, 1);
    myArray.push(a[0]);
  }
  return myArray;
}
console.log(rotateArray(10));
// [5, 6, 1, 2, 3, 4]
