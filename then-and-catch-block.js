
var p1 = new Promise(function(res, rej){ res(10); });
                    
function handleP1(response){
  console.log(response);
  return response; 
}
function handleP2(response){      
  console.log(response) ;
  return new Promise(function(res,rej){
    rej("error in nested promise");
  }) ;
}

function handleP3(response){ console.log('p3', response);}

function errorHandler(error){ console.log(error);}

p1.then(handleP1)
  .then(handleP2)
  .catch(errorHandler)
  .then(handleP3)

// Here handleP2 throws error response which will be catched by immediate catch function and after that then block will execute

// 10
// 10
// "error in nested promise"
// "p3"
// undefined

p1.then(handleP1)
  .then(handleP2)
  .then(handleP3)
  .catch(errorHandler)

// Here handleP3 will not execute as handleP2 throws error object which will be catched by skipping next then function

// 10
// 10
// "error in nested promise"
