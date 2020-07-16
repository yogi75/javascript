const uniqueSort = (arr) => {
  const obj = {};
  const result = [];
  for(let i = 0; i < arr.length; i++){
    if(!obj[arr[i]]){
      result.push(arr[i]);
      obj[arr[i]] = true;
    }
  }
  return result.sort((a,b)=>a-b);
}

console.log(uniqueSort([4,2,4,2,2,2,1,2,1,4])); // [1, 2, 4]
