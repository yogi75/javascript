/**
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

// Best way
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

// One more clever way
function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

// other way 1
function duplicateEncode(word){
  var obj = {};
  var str='';
  word = word.toLowerCase();
  word.split('').map(char=>{
    if(obj[char]){
      obj[char]+=1;
    }else{
      obj[char] = 1;
    }
  });
  for(var i = 0; i < word.length; i++){
    if(obj[word[i]] > 1){
      word.replace(word[i], ')');
      str = str+')';
    }else{
      word.replace(word[i], '(');
      str = str+'(';
    }
  }
  return str;
}

console.log(duplicateEncode(')) @'));
