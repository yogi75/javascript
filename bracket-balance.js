/**
*  Passing seed value 0 to counter. If balanced -> count = 0. Return !count as true 
*/
const balancedBracket = (str)=>{
  return !str.split('').reduce((count, char)=>{ 
    return (char === ')' || char === ']' || char === '}') ? 
      ++count : (char === '(' || char === '[' || char === '{') ? 
      --count : count}, 0)
}

console.log(balancedBracket('({{}})[] { } ([]{})')) // true

/**  if balanced bracket return 1 and total pair
*    if no bracket in string return 1
*    if no balanced bracket return 0
*/
function SearchingChallenge(str) { 

  // code goes here  
  var result={count:0, pair:0, noBracket:0} 
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '['){
      result.count++;
      result.noBracket = 1;
      if(result.count == 0){
        result.pair++;
      }
    }
    if (str[i] === ')' || str[i] === '}' || str[i] === ']'){
      result.count--;
      result.noBracket = 1;
      if(result.count == 0){
        result.pair++;
      }
    }
  }
  if(!result.noBracket) return 1;
  if(!result.count) return `1 ${result.pair}`;
  return 0;
}
   
// keep this function call here 
console.log(SearchingChallenge("(dfgf)[!]")); // 1 2


