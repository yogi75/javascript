const fibonacciSequence = (num) => { 
  if (num <= 0) return [];
  if (num == 1) return [0];
  let sequence = [0, 1];
  while (sequence.length < num) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  return sequence; 
}

console.log(fibonacciSequence(8)) // [0, 1, 1, 2, 3, 5, 8, 13]
