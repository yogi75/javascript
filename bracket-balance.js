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
