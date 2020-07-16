const deepCopyFunction = (inObject) => {
  let outObject, value, key;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {
    value = inObject[key];

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value);
  }
  return outObject;
}
var a = ['a',1,['b','c',['d']]];
var b = deepCopyFunction(a);
console.log(b); // ["a", 1, ["b", "c", ["d"]]]
b[2][2][0] = 'e';
console.log(b); // ["a", 1, ["b", "c", ["e"]]]
console.log(a); // ["a", 1, ["b", "c", ["d"]]]
