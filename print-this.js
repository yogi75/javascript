                    var myObject = {
                      property: this,
                      regularFunction: function() {
                        return this
                      },
                      arrowFunction: () => {
                        return this
                      },
                      iife: (function() {
                        return this
                      })()
                    }
                    console.log(myObject.regularFunction())
                    console.log(myObject["regularFunction"]())
                    console.log(myObject.property)
                    console.log(myObject.arrowFunction())
                    console.log(myObject.iife)
                    var regularFunction1 = myObject.regularFunction
                    console.log(regularFunction1()); 

// 1. It will print myObject
// 2. It will print myObject
// 3. It will print window object
// 4. It will print window object
// 5. It will print window object
// 6. It will print window object
