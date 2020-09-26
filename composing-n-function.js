// compose(square, addTen)(20) = 900;

// compose(f1, f2, f3, ..)(20)

const addTen = x => x+10;
const square = x => x*x;
const subtract = x => x-10;
const compose = (...args) => {
    return (x)=>{
      for(let i = args.length-1; i >= 0; i--){
        x = args[i](x);
      }
      return x;
      }
    }

console.log(compose(square, addTen, subtract)(20))
